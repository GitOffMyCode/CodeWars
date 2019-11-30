// Codewars - Growth of a Population

// In a small town the population is p0 = 1000 at the beginning of a year. The population regularly increases by 2 percent per year and moreover 50 new inhabitants per year come to live in the town. How many years does the town need to see its population greater or equal to p = 1200 inhabitants? 
// Return n number of years.

// p0 = population at beginning of year (1000)
// percent = 2 (0.02)
// aug = inhabitants coming or leaving each year (50)
// p = population target (1200)

function nbYear(p0, percent, aug, p) {
    let popCounter = p0;
    let years = 0;
    for (let i = 0; popCounter < p; i++) {
        popCounter = popCounter + (popCounter * percent / 100) + aug;
        years++
    }
    return years;
}

module.exports = nbYear;