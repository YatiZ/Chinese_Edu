import { INewUser } from "@/types";
import { account, appwriteConfig, avatars, databases } from "./config";
import { ID, Query } from "appwrite";

export async function createUserAccount(user:INewUser) {
    try {
        const newAccount = await account.create(
            ID.unique(),
            user.email,
            user.password,
            user.username
        );

        if(!newAccount) throw Error;

        const avatarUrl = avatars.getInitials(user.username);
        console.log(avatarUrl)
        const newUser = await saveUserToDB({
            accoundId: newAccount.$id,
            username: user.username,
            email: newAccount.email,
            imageUrl: avatarUrl
        })
        return newUser;
    } catch (error) {
        console.log(error)
    }
}

export async function saveUserToDB(user:{
    accoundId: string;
    username: string;
    email: string;
    imageUrl: URL;
    
}) {
    try {
        
        const newUser = await databases.createDocument(
            appwriteConfig.databaseId,
            appwriteConfig.userCollectionId,
            ID.unique(),
            user
        );
        return newUser;

    } catch (error) {
        console.log(error)
    }
}

export async function signInAccount(user:{
    email: string, password: string
}) {
    try {
        const session = await account.createEmailSession(user.email, user.password);

        return session;
    } catch (error) {
        console.log(error)
        return error
    }
}

export async function getAccount() {
    try {
        const currentAccount = await account.get();
        console.log('currentAccount',currentAccount)
        return currentAccount
    } catch (error) {
        console.log(error)
    }
}

export async function getCurrentAccount() {
    try {
        const currentUser = await getAccount();
        console.log("CurrentUser from getCurrentAccount fun: ",currentUser)
        if(!currentUser) throw Error;

        const currentUserAccount = await databases.listDocuments(
            appwriteConfig.databaseId,
            appwriteConfig.userCollectionId,
            [Query.equal("accoundId",currentUser.$id)]
        )
        console.log('currentUserAccount',currentUserAccount)
        if(!currentUserAccount) throw Error;

        return currentUserAccount.documents[0];

    } catch (error) {
        console.log(error)
        return null;
    }
}