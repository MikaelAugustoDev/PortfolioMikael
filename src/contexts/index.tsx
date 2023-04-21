import { createContext, useState } from "react";

export const themes = {

    light: {
        fundo: "#FFFFFF",
        texto: "#000000",
        destaque: "#2C3E50",
        line: "1px solid #000000",
        fundoCardProject: "#000000",
        textCardProject: "#ffffff",
        linePhoto: "1px solid #2C3E50",
        boxShadow: "12px 12px 24px #666666, -12px -12px 24px #ffffff"
    },
    dark: {
        fundo: "#000000",
        texto: "#FFFFFF",
        destaque: "#007bdd",
        line: "1px solid #ffffff",
        fundoCardProject: "#ffffff",
        textCardProject: "#000000",
        linePhoto: "1px solid #007bdd",
        boxShadow: "none"
    }
}

export const ThemeContext = createContext({})

export const ThemeProvider = (props:any) => {

    const [ theme, setTheme] = useState(themes.light)

    return (

        <ThemeContext.Provider value={{theme, setTheme}}>

            {props.children}

        </ThemeContext.Provider>

    )

}