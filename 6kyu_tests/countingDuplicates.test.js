const duplicates = require("../6kyu_challenges/countingDuplicates")


describe("duplicates", () => {

    test("returns the count of distinct case-insensitive alphabetic characters and numeric digits that occur more than once in the input string", () => {
        expect(duplicates("")).toBe(0);
        expect(duplicates("abcde")).toBe(0);
        expect(duplicates("aabbcde")).toBe(2);
        expect(duplicates("aabBcde")).toBe(2);
        expect(duplicates("112aabBcde")).toBe(3);
        expect(duplicates("Indivisibility")).toBe(1);
        expect(duplicates("aaaaaaaaaaaaaaaaaaaaz")).toBe(1);
        expect(duplicates("aaaaaaaaaaaaaaaaaaaAz")).toBe(1);
        expect(duplicates("12345678901234567890")).toBe(10);
        expect(duplicates("a1b2c3d4e5f6g7h8i9j0a1b2c3d4e5f6g7h8i9j0a1b2c3d4e5f6g7h8i9j0")).toBe(20);
        expect(duplicates("a1b2c3de5f6g7h8i9j0a1b2c3de5f6g7h8i9j0a1b2c3d4e5f6g7h8i9j0")).toBe(19);
    })

})