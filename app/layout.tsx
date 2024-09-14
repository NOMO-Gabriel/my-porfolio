import type { Metadata } from "next";
import "./globals.css";
import { ThemeProvider } from './utils/contexts/ThemeContext';
import { LocaleProvider } from './utils/contexts/LocaleContext';
import {useTheme} from "@/app/utils/hooks/useTheme.js";

export const metadata: Metadata = {
    title: 'MY PORTFOLIO',
    description: 'A SIMPLE WEBSITE DESCRIBING MY ACHIEVEMENTS',
};

export default function RootLayout({
                                       children,
                                   }: {
    children: React.ReactNode;
}) {


    return (
        <html lang="en">
        <body  className={`antialiased `}>
        <LocaleProvider>
            <ThemeProvider>
                {children}
            </ThemeProvider>
        </LocaleProvider>
        </body>
        </html>
    );
}
