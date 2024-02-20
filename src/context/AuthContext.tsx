import { getCurrentAccount } from "@/lib/appwrite/api";
import { IContextType, IUser } from "@/types";
import { createContext, useContext, useEffect, useState } from "react"
import { useNavigate } from "react-router-dom";


const INITIAL_USER ={
    id: '',
    username: '',
    email: '',
    imageUrl:'',
    bio:''
}
const INITIAL_STATE = {
    user: INITIAL_USER,
    isAuthenticated: false,
    isLoading: false,
    setUser:()=>{},
    setIsAuthenticated: ()=>{},
    checkAuthUser: async()=> false as boolean

}
const AuthContext = createContext<IContextType>(INITIAL_STATE);

const AuthProvider = ({children}:{children:React.ReactNode})=>{
   const navigate = useNavigate();
   const [user, setUser] = useState<IUser>(INITIAL_USER);
   const [isLoading, setIsLoading] = useState(false);
   const [isAuthenticated, setIsAuthenticated] = useState(false);

   const checkAuthUser = async()=>{
    setIsLoading(true)
    try {
        const currentAccout = await getCurrentAccount();
        if(currentAccout){
            setUser({
                id: currentAccout.$id,
                username: currentAccout.username,
                email: currentAccout.email,
                imageUrl: currentAccout.imageUrl,
                bio: currentAccout.bio

            })
            setIsAuthenticated(true)

            return true;
        }
        return false;
    } catch (error) {
        console.log(error)
        return false;
    }finally{
        setIsLoading(false)
    }
   }

   useEffect(()=>{
    const cookieFallBack = localStorage.getItem("cookieFallBack");
    if(
        cookieFallBack === "[]" ||
        cookieFallBack === null ||
        cookieFallBack === undefined
    ){
        navigate('/sign-in')
    }
     checkAuthUser();
   },[]);
   
   const value = {
    user,
    setUser,
    isLoading,
    isAuthenticated,
    setIsAuthenticated,
    checkAuthUser
   }
   return (
    <AuthContext.Provider value={value}>
        {children}
    </AuthContext.Provider>
   )
}

export default AuthProvider;
export const useUserContext = ()=> useContext(AuthContext)