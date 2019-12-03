// Codewars - The Deaf Rats of Hamelin
// The Pied Piper has been enlisted to play his magical tune and coax all the rats out of town. But some of the rats are deaf and are going the wrong way! How many deaf rats are there? (return number)   
//  P = The Pied Piper   O~ = Rat going left     ~O = Rat going right
// Examples: 
// ex1 ~O~O~O~O P has 0 deaf rats
// ex2 P O~ O~ ~O O~ has 1 deaf rat
// ex3 ~O~O~O~OP~O~OO~ has 2 deaf rats

const countDeafRats = town => {
    const splitRats = town.split("P");
    let ratsLeft = splitRats[0];
    let ratsRight = splitRats[1];
    let deafRatsLeft = 0;
    let deafRatsRight = 0;
    if (ratsLeft.length !== 0) {
        deafRatsLeft = ratsLeft.match(/O~/g);
        deafRatsLeft ? deafRatsLeft = deafRatsLeft.length : deafRatsLeft = 0;
    }
    if (ratsRight.length !== 0) {
        deafRatsRight = ratsRight.match(/~O/g);
        deafRatsRight ? deafRatsRight = deafRatsRight.length : deafRatsRight = 0;
    }
    return deafRatsLeft + deafRatsRight
}

console.log( countDeafRats("~O ~O ~O ~O P ~O ~O O~") )  //-> 2
console.log( countDeafRats("~O~O~O~OP~O~OO~") )  //-> 2

module.exports = countDeafRats;