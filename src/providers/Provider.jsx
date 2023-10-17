import { createContext, useEffect, useState } from "react";

export const GlobalContext = createContext(null);

const Provider = ({children}) => {

    const [theme, setTheme] = useState("light");

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
        console.log(theme);
    }, [theme])

    const information = {
        theme,
        handleTheme
    }

    return (
        <GlobalContext.Provider value={information}>
            {children}
        </GlobalContext.Provider>
    );
};

export default Provider;