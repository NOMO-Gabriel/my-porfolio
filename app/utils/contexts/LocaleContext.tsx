'use client';

import { createContext, ReactNode, useState, useEffect } from 'react';

interface LocaleContextProps {
    locale: string;
    changeLocale: (newLocale: string) => void;
}

export const LocaleContext = createContext<LocaleContextProps | undefined>(undefined);

export const LocaleProvider = ({ children }: { children: ReactNode }) => {
    const [locale, setLocale] = useState<string>('en');

    useEffect(() => {
        const savedLocale = localStorage.getItem('locale');
        if (savedLocale) {
            setLocale(savedLocale);
        }
    }, []);

    const changeLocale = (newLocale: string) => {
        setLocale(newLocale);
        localStorage.setItem('locale', newLocale);
    };

    return (
        <LocaleContext.Provider value={{ locale, changeLocale }}>
            {children}
        </LocaleContext.Provider>
    );
};
