// Codewars - Persistent Bugger
// Write a function, persistence, that takes in a positive parameter num and returns its multiplicative persistence, which is the number of times you must multiply the digits in num until you reach a single digit.

const persistence = number => { 
    
    const multiplier = num => {
        return num.toString().split('').map(num => Number(num)).reduce((a, b) => a * b)
    }
    let counter = 0;
    while (number > 10) {
        number = multiplier(number)
        console.log(number)
        counter++
    } 
    return counter
}

module.exports = persistence;