'use client';
import { useLocale } from '@/app/utils/hooks/useLocale.js';
import Flag from 'react-world-flags';

const LanguageToggleButton = () => {
    const { locale, changeLocale } = useLocale();

    const handleLanguageChange = () => {
        changeLocale(locale === 'en' ? 'fr' : 'en');
    };

    return (
        <button onClick={handleLanguageChange} className="p-2  rounded font-semibold flex items-center">
            {locale === 'en' ? (
                <Flag code="FR" style={{ width: '30px', marginRight: '8px' }} />
            ) : (
                <Flag code="GB" style={{ width: '30px', marginRight: '8px' }} />
            )}
            {locale === 'en' ? 'FR' : 'EN'}
        </button>
    );
};

export default LanguageToggleButton;
