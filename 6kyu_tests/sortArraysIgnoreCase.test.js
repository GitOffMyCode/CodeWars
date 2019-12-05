const sortme = require("../6kyu_challenges/sortArraysIgnoreCase");

describe("sortme", () => {

    test("returns sorted array in alphabetical order, ignorning case", () => {
        expect(sortme(["C", "d", "a", "B"])).toEqual(["a", "B", "C", "d"]);
        expect(sortme(["Hello", "there", "I'm", "fine"])).toEqual(["fine", "Hello", "I'm", "there"]);
        expect(sortme(["aa", "Ab", "ac", "ad"])).toEqual(["aa", "Ab", "ac", "ad"]);
    })

})