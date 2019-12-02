// Codewars - Consonant Value
// Given a lowercase string that has alphabetic characters only and no spaces, return the highest value of consonant substrings. Consonants are any letters of the alpahabet except "aeiou".
// We shall assign the following values: a = 1, b = 2, c = 3, .... z = 26.
// For example, for the word "zodiacs", let's cross out the vowels. We get: "z, d, cs"

function solve(s) {
    const array = s.match(/[^aeiou]+/gi);
    return array;
    
}

console.log(solve("zodiacs")) //-> 26

module.exports = solve;