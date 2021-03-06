// Codewars - Numericals of a String
// For each symbol in the string if it's the first character occurence, replace it with a '1', else replace it with the amount of times you've already seen it. There might be some non-ascii characters in the string.
// "Hello, World!" -> "1112111121311"
// "aaaaaaaaaaaa" -> "123456789101112"

const numericals = string => {
    let charsCount = {};
    let result = "";
    for (let i = 0; i < string.length; i++) {
        // if string[i] is in charsCount then add 1 to its value:
        if (charsCount[string[i]]) charsCount[string[i]]++;
        // otherwide add string[i] to charsCount with a value of 1:
        else charsCount[string[i]] = 1;
        // get the value of each char and concat to result:
        result = result + charsCount[string[i]];  
    }
    return result;
}

module.exports = numericals;