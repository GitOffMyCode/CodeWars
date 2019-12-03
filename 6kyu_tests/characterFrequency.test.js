const characterFrequency = require("../6kyu_challenges/characterFrequency");

describe("characterFrequency", () => {

    test("returns the letter frequency count for the text", () => {
        expect(characterFrequency("aaAabb dddDD hhcc")).toEqual(
            [['d', 5], ['a', 4], ['b', 2], ['c', 2], ['h', 2]]
        );
        expect(characterFrequency("The things that make me different are the things that make me, me.")).toEqual(
            [['e', 10], ['t', 9], ['h', 6], ['a', 5], ['m', 5], ['i', 3], ['n', 3], ['f', 2],
            ['g', 2], ['k', 2], ['r', 2], ['s', 2], ['d', 1]]
        );
        expect(characterFrequency("zzz")).toEqual(
            [['z', 3]]
        );
        expect(characterFrequency("!?£*ginger*&$and^()*!?fred")).toEqual(
            [['d', 2], ['e', 2], ['g', 2], ['n', 2], ['r', 2], ['a', 1], ['f', 1], ['i', 1]]
        );
    })

})