const nbYear = require("../7kyu_challenges/growthOfPopulation");

describe("nbYear", () => {

    test("returns the number of years required to grow population to p", () => {
        expect(nbYear(1500, 5, 100, 5000)).toBe(15);
        expect(nbYear(1500000, 2.5, 10000, 2000000)).toBe(10);
        expect(nbYear(1500000, 0.25, 1000, 2000000)).toBe(94);
        expect(nbYear(1500000, 0.75, 50, 1500000)).toBe(0);
    });

});
