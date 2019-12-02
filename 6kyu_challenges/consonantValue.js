// Codewars - Consonant Value
// Given a lowercase string that has alphabetic characters only and no spaces, return the highest value of consonant substrings. Consonants are any letters of the alpahabet except "aeiou".
// We shall assign the following values: a = 1, b = 2, c = 3, .... z = 26.
// For example, for the word "zodiacs", let's cross out the vowels. We get: "z, d, cs"

function solve(s) {
    const consonants = s.match(/[^aeiou]+/gi);
    let values = [];
    consonants.map(el => {
        let subValues = [];
        for (let i = 0; i < el.length; i++) subValues.push((el[i].charCodeAt(0)-96));
        values.push(subValues.reduce((a,b) => a + b))
    });
    return Math.max(...values);
}

module.exports = solve;