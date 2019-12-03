const countDeafRats = require("../6kyu_challenges/deafRatsOfHamelin");

describe("countDeafRats", () => {

    test("returns the letter frequency count for the text", () => {
        expect(countDeafRats("~O~O~O~O P")).toBe(0);
        expect(countDeafRats("P O~ O~ ~O O~")).toBe(1);
        expect(countDeafRats("~O~O~O~OP~O~OO~")).toBe(2);
    })

})