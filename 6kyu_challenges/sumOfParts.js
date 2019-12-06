// Codewars - Sum of Parts
// The function partsSums will take an array of numbers and return an array of the sums of its parts as follows:
// [0, 1, 3, 6, 10] should return [20, 20, 19, 16, 10, 0]
// because:
// [0, 1, 3, 6, 10] = 20
// [1, 3, 6, 10] = 20
// [3, 6, 10] = 19
// [6, 10] = 16
// [10] = 10
// [] = 0

function partsSums(ls) {
    let result = [];
    while (ls.length > 0) {
        result.push(ls.reduce((a,b) => a + b));
        ls.shift();
    }
    result.push(0);
    return result;
}

module.exports = partsSums;