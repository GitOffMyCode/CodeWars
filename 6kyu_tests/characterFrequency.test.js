const characterFrequency = require("../6kyu_challenges/characterFrequency");

describe("characterFrequency", () => {

    test("returns the letter frequency count for the text", () => {
        expect(characterFrequency("aaAabb dddDD hhcc")).toEqual(
            [['d', 5], ['a', 4], ['b', 2], ['c', 2], ['h', 2]]
        );
    })

})