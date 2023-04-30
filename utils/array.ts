/**
 * Shuffles array in place
 * @param {Array} array An array containing the items to shuffle
 * @returns {Array} a shuffled array
 */
export const shuffle = <T>(array: T[]): T[] => {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}