import { createContext, useEffect, useState } from "react";

export const GlobalContext = createContext(null);

const Provider = ({children}) => {
    const currThm = localStorage.getItem("theme") || "light";
    const [theme, setTheme] = useState(currThm);

    const handleTheme = () => {
        const root = document.documentElement.classList;
        if (root.contains("dark")) {
            root.remove("dark");
            localStorage.setItem("theme", "light");
            setTheme("light");
        } else {
            root.add("dark");
            localStorage.setItem("theme", "dark");
            setTheme("dark");
        }
    }

    useEffect(() => {
        document.documentElement.classList = theme;
    }, [theme])

    const [user, setUser] = useState(null);

    const information = {
        theme,
        handleTheme,
        user,
        
    }

    return (
        <GlobalContext.Provider value={information}>
            {children}
        </GlobalContext.Provider>
    );
};

export default Provider;