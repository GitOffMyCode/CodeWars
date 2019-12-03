// Codewars - Character frequency
// Write a function that takes a string and returns the letter frequency count for the text. This count excludes numbers, spaces and all punctuation marks. Upper and lower case versions of a character are equivalent and the result should all be in lowercase.
// The function should return a list of arrays sorted by the most frequent letters first. Letters with the same frequency are ordered alphabetically. For example: letterFrequency('aaAabb dddDD hhcc') -> [['d',5], ['a',4], ['b',2], ['c',2], ['h',2]]

function characterFrequency(text) {
    text = text.toLowerCase().match(/[a-z]/gi)
    let letters = [...new Set(text)];
    let result = [];
    letters.forEach(letter => {
        let counter = 0;
        for (const l of text) if (letter === l) counter++
        result.push([letter, counter])                      
    })
    // sort by VALUE OF MOST FREQUENT LETTER, and if letters have same value SORT ALPHABETICALLY
    result.sort((v1,v2) => {
        if (v1[1] > v2[1]) return -1
        if (v1[1] < v2[1]) return 1
        if (v1[1] === v2[1]) {
            if (v1[0] > v2[0]) return 1
            if (v1[0] < v2[0]) return -1
            if (v1[1] === v2[1]) return 0
        }
    })

    return result;
}




console.log(characterFrequency("aaAabb dddDD hhcc"))

module.exports = characterFrequency;