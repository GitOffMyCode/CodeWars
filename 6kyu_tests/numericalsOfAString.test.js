const numericals = require("../6kyu_challenges/numericalsOfAString");

describe("numericals", () => {

    test("returns each letter of a string replaced by the number of incidences", () => {
        expect(numericals("")).toBe("");
        expect(numericals("A")).toBe("1");
        expect(numericals("A1a1")).toBe("1112");
        expect(numericals(",,,????")).toBe("1231234");
        expect(numericals(" o  x  o ")).toBe("112314526");
        expect(numericals("Hello, World!")).toBe("1112111121311");
        expect(numericals("aaaaaaaaaaaa")).toBe("123456789101112");
        expect(numericals("abcdefghijklmnopqrstuvwxzy1234567890")).toBe("111111111111111111111111111111111111");
        expect(numericals("abcdefghijklmnopqrstuvwxzy1234567890ABCABC")).toBe("111111111111111111111111111111111111111222");
    })

})