/**
 * Generates a random number using a minimum and maximum value
 * @param {number} min minimum value
 * @param {number} max maximum value
 * @returns {number} a random number
 */
export const randomNumber = (min: number, max: number): number => {
    return Math.floor(Math.random() * (1 + max - min) + min);
}