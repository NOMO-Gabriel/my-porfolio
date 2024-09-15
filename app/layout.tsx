import type { Metadata } from "next";
import "./globals.css";
import { ThemeProvider } from './utils/contexts/ThemeContext';
import { LocaleProvider } from './utils/contexts/LocaleContext';
;

export const metadata: Metadata = {
    title: 'Portfolio | Nomo-Gabriel',
    description: 'A Simple Website describing my achievements',
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
