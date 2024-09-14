import { useTheme } from '@/app/utils/hooks/useTheme.js';

const ThemeToggleButton = () => {
    const { theme, changeTheme } = useTheme();

    const handleThemeChange = () => {

        changeTheme(theme === 'light' ? 'dark' : 'light');
    };

    return (
        <button onClick={handleThemeChange} className="p-2 border rounded-full font-semibold">
            {theme === 'light' ? '🌙 Mode Sombre' : '🌞 Mode Clair'}
        </button>
    );
};

export default ThemeToggleButton;
