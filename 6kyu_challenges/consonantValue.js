// Codewars - Consonant Value
// Given a lowercase string that has alphabetic characters only and no spaces, return the highest value of consonant substrings. Consonants are any letters of the alpahabet except "aeiou".
// We shall assign the following values: a = 1, b = 2, c = 3, .... z = 26.
// For example, for the word "zodiacs", let's cross out the vowels. We get: "z, d, cs"

function solve(s) {
    const consonants = s.match(/[^aeiou]+/gi);   // array = ["z", "d", "cs"]
    let values = [];
    consonants.map(el => {
        let nums = [];
        for (let i = 0; i < el.length; i++) {
            nums.push((el[i].charCodeAt(0)-96));
        }
        values.push(nums);
    });
    return values;
}

console.log(solve("zodiacs"))

module.exports = solve;