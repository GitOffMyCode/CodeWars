const persistence = require("../6kyu_challenges/persistentBugger");

describe("persistence", () => {

    test("returns correct multiplicative persistence", () => {
        expect(persistence(999)).toBe(4);
        expect(persistence(39)).toBe(3);
        // expect(persistence(25)).toBe(2);
        // expect(persistence(4)).toBe(0);
    })

})