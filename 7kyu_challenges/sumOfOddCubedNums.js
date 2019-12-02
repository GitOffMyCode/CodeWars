// Sum of Odd Cubed Numbers
// Find the sum of the odd numbers within an array, after cubing the initial integers. The function should return undefined if any of the values aren't numbers.

function cubeOdd(arr) {
    if (arr.every(el => typeof el === "number")) {
        return arr.map(num => num * num * num).filter(num => num % 2 !== 0).reduce((a, b) => a + b);
    } else {
        return undefined;
    }
}

module.exports = cubeOdd;
