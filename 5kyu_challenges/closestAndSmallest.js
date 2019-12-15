// Codewars - Closest and Smallest
// Input: a string of n positive numbers
// Output: an array containing 2 sub-arrays which consist of 3 numbers
// Task:
//   For each number in the string calculate its "weight". (by adding all nums together ie 13 = 4, 501 = 6)
//   Then find 2 numbers of string that have the smallest difference of weights, and create 2 arrays which show:
//   [number-weight, index in string of the corresponding number, original corresponding number in string]
//   (The two subarrays are sorted in ascending order by their number weights if these weights are different, 
//   by their indexes in the string if they have the same weights.)
// Example:
//   closest("456899 50 11992 176 272293 163 389128 96 290193 85 52") ==> [[13, 9, 85], [14, 3, 176]]
//   weights: [ 41, 5, 22, 14, 25, 10, 31, 15, 24, 13, 7 ]
//   because [13] [14] are closest [9] [3] are their indexes and [85] [176] are the original weights

function closest(string) {
    let nums = string.split(" ").map(n => n.split("")).map(array => array.map(n => parseInt(n)));
    let result = nums.map(array => array.reduce((a,b) => a + b))
    console.log(result)
    

}

module.exports = closest;