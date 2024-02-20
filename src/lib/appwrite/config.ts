import {Account, Avatars, Client, Databases, Storage} from 'appwrite';
export const appwriteConfig ={
    databaseId: '65cbaee50b1f975708d4',
    storageId: '65cbaf69470fd2716593',
    userCollectionId: '65cbafbb46e90d173724',
    postCollectionId: '65cbb11f5deddda00e47',
    
}

export const client = new Client();
client.setEndpoint('https://cloud.appwrite.io/v1')
.setProject('65cbad952006ddfe4b25');

export const account = new Account(client);
export const databases = new Databases(client);
export const storage = new Storage(client);
export const avatars = new Avatars(client);