const nbYear = require("../7kyu_challenges/growthOfPopulation");

describe("nbYear", () => {

    test("returns the number of years required to grow population to p", () => {
        expect(nbYear(1500, 5, 100, 5000)).toBe(15);
    });

});
