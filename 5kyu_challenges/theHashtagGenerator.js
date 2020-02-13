// Codwars - The Hashtag Generator 5kyu. 
// The marketing team is spending way too much time typing in hashtags. Let's help them with our own Hashtag Generator! Here's the deal:
// It must start with a hashtag (#).
// All words must have their first letter capitalized.
// If the final result is longer than 140 chars it must return false.
// If the input or the result is an empty string it must return false.

const generateHashtag = str => {
  if (/[a-z]/.test(str)) {
    const arr = str.match(/[a-z]*/gi)
    const words = arr.filter(word => {
      if (word) return word
    });
    const result = words.map(word => {
      const firstLetter = word.slice(0,1).toUpperCase();
      const restOfWord = word.slice(1, word.length);
      return firstLetter + restOfWord;
    });
    const hashtag = "#" + result.join("");
    if (hashtag.length > 140) return false;
    return hashtag;
  }
  return false;
}

module.exports = generateHashtag;