// Codewars - Sort Arrays (Ignoring Case)
// Sort the given strings in alphabetical order, case insensitive. 

const sortme = names => {
    let sortedNames = [];
    names.map(el => {
        sortedNames.push([el.toLowerCase(), el]);
    });
    sortedNames.sort();
    console.log(sortedNames)
    let result = [];
    sortedNames.forEach(el => {
        el.shift();
        result.push(...el)
    });
    console.log(result)
    return result;
}

module.exports = sortme;
