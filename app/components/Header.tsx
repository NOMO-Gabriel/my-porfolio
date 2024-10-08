'use client';

import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faBars, faTimes } from "@fortawesome/free-solid-svg-icons";
import Image from "next/image";
import { useState } from "react";
import LanguageToggleButton from "@/app/components/LanguageToggleButton";
import ThemeToggleButton from "@/app/components/ThemeToggleButton";
import { useTheme } from "@/app/utils/hooks/useTheme.js";
import { useLocale } from "@/app/utils/hooks/useLocale.js";

const Header = () => {
    const { theme } = useTheme();
    const { locale } = useLocale();


    const links = (locale === 'en') ? [
        { text: 'Home', href: '#home' },
        { text: 'About', href: '#about' },
        { text: 'Services', href: '#services' },
        { text: 'Skills', href: '#skills' },
        { text: 'Certifications', href: '#certifications' },
        { text: 'Projects', href: '#projects' }
    ] : [
        { text: 'Accueil', href: '#home' },
        { text: 'Moi', href: '#about' },
        { text: 'Services', href: '#services' },
        { text: 'Compétences', href: '#skills' },
        { text: 'Certifications', href: '#certifications' },
        { text: 'Projets', href: '#projects' }
    ];

    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    const backgroundClass = theme === 'light' ? 'bg-gray-100' : 'bg-gray-800';
    const textClass = theme === 'light' ? 'text-black' : 'text-white';

    return (
        <nav className={`flex justify-between items-center p-2 ml-0 ${backgroundClass} ${textClass} header`}>
            <Link href={'/#home'}>
                <div
                    className="text-xl lg:text-2xl xl:text-3xl font-bold lg:ml-10 ml-0 flex flex-row space-x-4 p-2 border rounded-full md:mb-2">
                    <h1>Portfolio</h1>
                    <div className="relative w-8 h-8 md:w-10 md:h-10">
                        <Image
                            src="/images/gabriel.jpg"
                            alt="picture-logo"
                            layout="fill"
                            className="rounded-full object-cover"
                        />
                    </div>
                </div>
            </Link>

            <div className="hidden lg:flex text-xl font-semibold space-x-6 p-2">
                {links.map((link, index) => (
                    <Link key={index} href={link.href}>
                        {link.text}
                    </Link>
                ))}
                <Link href={'#contact'}>
                    <FontAwesomeIcon icon={faEnvelope} />
                </Link>
            </div>

            <div className="flex lg:hidden space-x-2">
                <button onClick={toggleMenu}>
                    <h1>Menu</h1>
                    <FontAwesomeIcon icon={menuOpen ? faTimes : faBars} size="2x" />
                </button>
            </div>

            {menuOpen && (
                <div className={`absolute top-24 xl:top-28 font-bold left-0 w-full flex flex-col items-start space-y-2 py-4 ${backgroundClass} ${textClass}`}>
                    {links.map((link, index) => (
                        <Link key={index} href={link.href} onClick={toggleMenu}>
                            {link.text}
                        </Link>
                    ))}
                    <Link href={'#contact'} onClick={toggleMenu}>
                        <FontAwesomeIcon icon={faEnvelope} />
                    </Link>
                </div>
            )}

            <div className="flex flex-row space-x-4">
                <LanguageToggleButton />
                <ThemeToggleButton />
            </div>
        </nav>
    );
};

export default Header;
