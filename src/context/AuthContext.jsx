import { createContext, useEffect, useState } from "react";

export const AuthContext = createContext();

export const AuthContextProvider = ({ children }) => {
    const [user, setUser] = useState(null)
    useEffect(() => {
        const userData = JSON.parse(localStorage.getItem('user'));
        setUser(userData)
    }, [])
    return <AuthContext.Provider value={{ user }}>
        {children}
    </AuthContext.Provider>
}
