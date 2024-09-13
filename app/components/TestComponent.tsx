import { useTheme } from "@/app/utils/hooks/useTheme.js";

const ThemeStyledComponent = () => {
    const { theme } = useTheme();

    const backgroundClass = theme === 'light' ? 'bg-white' : 'bg-black';
    const textClass = theme === 'light' ? 'text-black' : 'text-white';

    return (
        <div className={`p-4 ${backgroundClass} ${textClass}`}>
            <h1 className={'text-blue-700'}>Mon titre</h1>
            <h1>Welcome to the Themed Component!</h1>
            <p>The background and text color change based on the current theme.</p>
        </div>
    );
};

export default ThemeStyledComponent;
