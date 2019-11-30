// Codewars - Shortest Word

// Simple, given a string of words, return the length of the shortest word(s). String will never be empty and you do not need to account for different data types.

function shortestWord(s) {
    s = s.split(' ').sort((a, b) => a.length - b.length);
    return s[0].length
}

shortestWord("do bees have knees")
shortestWord("ashdfiawuhegbjbgkaehgk a")

module.exports = shortestWord;