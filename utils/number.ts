/**
 * Generates a random number using a minimum and maximum value
 * @param {number} min minimum value
 * @param {number} max maximum value
 * @returns {number} a random number
 */
export const randomNumber = (min: number, max: number): number => {
    return Math.floor(Math.random() * (1 + max - min) + min);
};

/**
 * Formats number by prepending 0 to single-digit number
 * @param {number} val number to format
 * @returns {string} 2 digits number prepended by a 0 as string
 */
export const toTwoDigits = (val: number): string => {
    return `0${val}`.slice(-2);
};