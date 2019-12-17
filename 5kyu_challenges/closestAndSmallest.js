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
// Example:
//   closest("80 71 62 53") ==> [[8, 0, 80], [8, 1, 71]]
//   weights: [ 8, 8, 8, 8 ]
//   difference of weights is 0 for all pairs so select smallest indexes: 80 and 71 and sort by index (80 first)

function closest(string) {
    const nums = string.split(" ");
    const weights = nums.map(n => n.split("")).map(arr => arr.map(n => parseInt(n))).map(arr => arr.reduce((a, b) => a + b));
    const indexedWeights = []
    for (let num of weights) indexedWeights.push([num, weights.indexOf(num), Number(nums.shift())])
    indexedWeights.sort((a, b) => a[0] - b[0])
    let sorted = [];
    indexedWeights.forEach(iw => {
        const iWCopy = indexedWeights.filter(item => item !== iw);
        const closest = iWCopy.reduce((a, b) => Math.abs(b[0] - iw[0]) < Math.abs(a[0] - iw[0]) ? b : a);
        const diff = Math.abs(closest[0] - iw[0]);
        sorted.push([diff, iw[0], iw[1], iw[2]])
    });
    sorted.sort((a, b) => a[0] - b[0])
    return [sorted[0].splice(1, 4), sorted[1].splice(1, 4)]
}

module.exports = closest;
