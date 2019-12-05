// Codewars - Meeting
// Could you make a program that makes this string uppercase and returns it sorted in alphabetical order by last name.
// When the last names are the same, sort them by first name. Last name and first name of a guest come in the result between parentheses separated by a comma.

const meeting = s => {
    const names = s.toUpperCase().split(";");
    let nameArray = [];
    names.forEach(name => nameArray.push(name.replace(/(\w+):(\w+)/g, "($2, $1)")));
    let result = "";
    return result.concat(...nameArray.sort());
}

module.exports = meeting;