const duplicates = require("../6kyu_challenges/countingDuplicates")


describe("duplicates", () => {

    test("returns the count of distinct case-insensitive alphabetic characters and numeric digits that occur more than once in the input string", () => {
        expect(duplicates("abcde")).toBe(0);
        expect(duplicates("aabbcde")).toBe(2);
        expect(duplicates("aabBcde")).toBe(2);
    })

})