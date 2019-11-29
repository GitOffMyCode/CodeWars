// In this Kata, we will check if a string contains consecutive letters as they appear in the English alphabet and if each letter occurs only once.

const consecutiveLetters = s => {
    let codes = [];
    for (let i = 0; i < s.length; i++) codes.push(s[i].charCodeAt(0));
    codes = codes.sort((a,b)=>a-b);
    const codeStart = codes[0];
    const codeLength = codes.length;
    const codeEnd = codes[codeLength-1];
    if (codeEnd === codeStart + codeLength -1) return true;
    else return false;
}

module.exports = consecutiveLetters;