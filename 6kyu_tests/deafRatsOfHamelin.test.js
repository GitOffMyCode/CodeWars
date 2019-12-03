const countDeafRats = require("../6kyu_challenges/deafRatsOfHamelin");

describe("countDeafRats", () => {

    test("returns correct number of deaf rats", () => {
        expect(countDeafRats(" ~O ~O ~O ~O O~ O~ O~ O~ P ~O ~O ~O ~O O~ O~ O~ O~ ")).toBe(8);
        // expect(countDeafRats("~O~O~O~O P")).toBe(0);
        // expect(countDeafRats("P O~ O~ ~O O~")).toBe(1);
        // expect(countDeafRats("~O~O~O~OP~O~OO~")).toBe(2);
    })

})