import { createContext, useState } from "react";


export const ThemeContext = createContext();


const Theme = ({children}) =>{
    const currentTheme = localStorage.getItem("theme")
    const [theme, setTheme] = useState(currentTheme ? currentTheme: "dark");

    const changeTheme = ()=>{
        setTheme(t =>{
            localStorage.setItem("theme", t == "light"? "dark" : "light");
            return t == "light"? "dark" : "light"
        })
    }

    return(
        <ThemeContext.Provider value={{changeTheme, theme}}>
            <div className={theme}>
                {children}
            </div>
        </ThemeContext.Provider>
    )
}

export default Theme;