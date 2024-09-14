'use client';
import { useTheme } from '@/app/utils/hooks/useTheme.js';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMoon, faSun } from '@fortawesome/free-solid-svg-icons';

const ThemeToggleButton = () => {
    const { theme, changeTheme } = useTheme();

    const handleThemeChange = () => {
        changeTheme(theme === 'light' ? 'dark' : 'light');
    };

    const backgroundClass = theme === 'light' ? 'bg-gray-100' : 'bg-gray-800';
    const switchClass = theme === 'light' ? 'bg-white' : 'bg-gray-900';

    return (
        <div
            onClick={handleThemeChange}
            className={`relative flex items-center justify-between w-24 h-12 p-2 ${backgroundClass} rounded-full cursor-pointer`}
        >

            <FontAwesomeIcon icon={faSun} className="text-yellow-500" size="lg" />

            <FontAwesomeIcon icon={faMoon} className="text-gray-500 dark:text-gray-300" size="lg" />





            <span
                className={`absolute left-1 top-1 w-10 h-10 ${switchClass} rounded-full transform transition-transform duration-300 ease-in-out ${
                    theme === 'light' ? 'translate-x-0' : 'translate-x-12'
                }`}
            />
        </div>
    );
};

export default ThemeToggleButton;
