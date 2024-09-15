// utils/contexts/ThemeContext.tsx
'use client';

import { createContext, ReactNode, useState, useEffect } from 'react';

interface ThemeContextProps {
    theme: string;
    changeTheme: (newTheme: string) => void;
}

export const ThemeContext = createContext<ThemeContextProps | undefined>(undefined);

export const ThemeProvider = ({ children }: { children: ReactNode }) => {
    const [theme, setTheme] = useState<string>('dark');


    useEffect(() => {
        const savedTheme = localStorage.getItem('theme') || 'light';
        setTheme(savedTheme);

    }, []);

    const changeTheme = (newTheme: string) => {
        setTheme(newTheme);
        localStorage.setItem('theme', newTheme);

    };

    return (

        <ThemeContext.Provider value={{ theme, changeTheme }}>
            {children}
        </ThemeContext.Provider>
    );
};


