// Codewars - Form The Minimum
// Given a list of digits, return the smallest number that could be formed from these digits, using the digits only once (ignore duplicates). Only positive integers will be passed to the function (> 0 ), no negatives or zeros.

const minValue = values => {
    const newValues = new Set(values);
    return Number([...newValues].sort().join(''));
}

module.exports = minValue;