'use client'
import { useLocale } from '@/app/utils/hooks/useLocale.js';

const LanguageToggleButton = () => {
    const { locale, changeLocale } = useLocale();

    const handleLanguageChange = () => {
        changeLocale(locale === 'en' ? 'fr' : 'en');
    };

    return (
        <button onClick={handleLanguageChange} className="p-2 border rounded">
            {locale === 'en' ? 'FR' : 'EN'}
        </button>
    );
};

export default LanguageToggleButton;
