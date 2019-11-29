// In this Kata, we will check if a string contains consecutive letters as they appear in the English alphabet and if each letter occurs only once.

const consecutiveLetters = s => {
    const alphabet = 'abcdefghijklmnopqrstuvwxyz';
    const sSorted = [...s].sort().join('');
    return alphabet.includes(sSorted);
}

module.exports = consecutiveLetters;