'use client'
import ThemeToggleButton from './ThemeToggleButton';
import LanguageToggleButton from './LanguageToggleButton';

const Nav = () => {
    return (
        <nav className="flex justify-between p-4 bg-gray-800 text-white">
            <div className="flex space-x-4">
                <LanguageToggleButton />
                <ThemeToggleButton />
            </div>
        </nav>
    );
};

export default Nav;
