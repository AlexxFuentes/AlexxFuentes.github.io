'use client'
import { createContext, useContext, useEffect, useState } from 'react'

interface AuthContextProps {
    theme: string;
    setTheme: (theme: string) => void;
}

export const AuthContext = createContext({} as AuthContextProps)

export function useAuth() {
    const context = useContext(AuthContext)
    if (!context) throw new Error('useAuth must be used within an AuthProvider')
    return context
}

export function AuthProvider({ children }: { children: React.ReactNode }) {

    const [theme, setTheme] = useState('dark')

    return <AuthContext.Provider value={{ theme, setTheme }}>{children}</AuthContext.Provider>
}