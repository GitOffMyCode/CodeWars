const solve = require("../6kyu_challenges/consonantValue");

describe("solve", () => {

    test("returns the highest value of consonant substrings", () => {
        expect(solve("zodiac")).toBe(26);
        expect(solve(("catchphrase"))).toBe(73);
        expect(solve("chruschtschov")).toBe(80);
    });

});