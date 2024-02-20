import { ThemeContextType } from "@/types";
import { createContext, useContext, useEffect, useState } from "react";

const ThemeContext = createContext<ThemeContextType>({
    darkTheme: false,
    setDarkTheme:()=> null,
});

const ThemeProvider = ({children}:{children:React.ReactNode})=>{
    const themeFromStorage = typeof localStorage !== 'undefined' && localStorage.getItem('mode-theme')
    ? JSON.parse(localStorage.getItem('mode-theme')!)
    : false;
    const [darkTheme, setDarkTheme] = useState<boolean>(themeFromStorage);
    const [renderComponent, setRenderComponent] = useState(false);

    useEffect(()=>{
        setRenderComponent(true)
    },[])
    if(!renderComponent) return <></>
    return(
        <ThemeContext.Provider value={{darkTheme, setDarkTheme}}>
            <div className={`${darkTheme? "dark":""} min-h-screen`}>
                <div className="dark:text-white dark:bg-[#500A16]">
                {children}
                </div>
            </div>
        </ThemeContext.Provider>
    )   
}

export default ThemeProvider;
export const useThemeContext =()=> useContext(ThemeContext);