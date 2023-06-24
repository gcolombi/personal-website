/**
 * Creates slug from string
 *
 * The normalize() using NFKD method returns the Unicode Normalization Form of a given string
 * Deletes all the accents, which happen to be all in the \u03xx UNICODE block
 * Convert the string to lowercase letters
 * Remove whitespace from both sides of a string (optional)
 * Replace spaces with -
 * Remove all non-word chars
 * Replace _ with -
 * Replace multiple - with single -
 * Remove trailing -
 *
 * @param {string} string
 * @returns {string} string as slug
 */
export const slugify = (string: string): string => {
    return string
    .normalize('NFKD')
    .replace( /[\u0300-\u036f]/g, '' )
    .toLowerCase()
    .trim()
    .replace(/\s+/g, '-')
    .replace(/[^\w\-]+/g, '')
    .replace(/\_/g,'-')
    .replace(/\-\-+/g, '-')
    .replace(/\-$/g, '');
};

/**
 * Converts first letter to uppercase
 * @param {string} string
 * @returns {string} capitalized string
 */
export const capitalizeFirstLetter = (string: string): string => {
    return string.charAt(0).toUpperCase() + string.slice(1);
}