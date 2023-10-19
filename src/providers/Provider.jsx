import { GoogleAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import auth from "../firebase/firebase.config";

export const GlobalContext = createContext(null);
const provider = new GoogleAuthProvider();


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

    const [user, setUser] = useState();
    const [loading, setLoading] = useState(true);

    const registerUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password);
    }

    const loginNormal = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password);
    }

    const signInWithGoogle = () => {
        return signInWithPopup(auth, provider);
    }

    const logOut = () => {
        return signOut(auth);
    }

    const information = {
        theme,
        handleTheme, 
        user,
        loading,
        setLoading,
        registerUser,
        loginNormal,
        signInWithGoogle,
        logOut,
        setUser
    }

    console.log("user", user);

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, currentUser => {
            const uid = currentUser?.uid;
            console.log("Loggedin user id", uid);
            // console.log('user in the auth state changed', currentUser);
            console.log("current use inside onAuthStateChanged", currentUser)
            console.log("registered or logged in");
            setUser(currentUser);
            setLoading(false);
        })
        return () => unsubscribe();
    }, [])

    return (
        <GlobalContext.Provider value={information}>
            {children}
        </GlobalContext.Provider>
    );
};

export default Provider;