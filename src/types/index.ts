
import React, { Dispatch, SetStateAction } from "react"

export type ThemeContextType = {
    darkTheme: boolean,
    setDarkTheme: Dispatch<SetStateAction<boolean>>;
}

export type INewUser= {
    username: string,
    email: string,
    password: string
}

export type IUser = {
    id: string,
    username: string,
    email: string,
    imageUrl: string,
    bio: string
}

export type IContextType = {
    user: IUser,
    isAuthenticated: boolean,
    isLoading: boolean,
    setUser:React.Dispatch <React.SetStateAction<IUser>>,
    setIsAuthenticated:React.Dispatch<React.SetStateAction<boolean>>,
    checkAuthUser: ()=>Promise<boolean>;
}