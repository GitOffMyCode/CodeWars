// Codewars - Flatten and sort and array
// Given a two-dimensional array of integers, return the flattened version of the array with all the integers in the sorted (ascending) order.

"use strict";

function flattenAndSort(array) {
    let newArray = [];
    array.map(subarr => newArray.push(...subarr));
    return newArray.sort((a,b) => a - b);
}

module.exports = flattenAndSort;