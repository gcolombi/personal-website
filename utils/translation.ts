import { TRANSLATIONS } from '@/data/global.data';

/**
 * Returns a string translation according to the locale
 * @param {string} string string to translate
 * @param {string} locale current locale
 * @returns {string} string translation
 */
export const getTranslation = (string: string, locale: string): string => {
    const match = TRANSLATIONS[locale];

    if (match) {
        const target = match.find(el => el.key === string);

        if (target) {
            return target.value;
        }
        return string;
    }
    return '';
};