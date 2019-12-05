const sortme = require("../6kyu_challenges/sortArraysIgnoreCase");

describe("sortme", () => {

    test("returns sorted array in alphabetical order, ignorning case", () => {
        expect(sortme(["C", "d", "a", "B"])).toBe(["a", "B", "C", "d"]);
        expect(sortme(["Hello", "there", "I'm", "fine"])).toBe(["fine", "Hello", "I'm", "there"]);
    })

})