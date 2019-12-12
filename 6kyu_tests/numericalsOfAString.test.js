const numericals = require("../6kyu_challenges/numericalsOfAString");

describe("numericals", () => {

    test("returns each letter of a string replaced by the number of incidences", () => {
        expect(numericals("Hello, World!")).toBe("1112111121311");
        expect(numericals("aaaaaaaaaaaa")).toBe("123456789101112");
    })

})