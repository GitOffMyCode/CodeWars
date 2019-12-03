const countDeafRats = require("../6kyu_challenges/deafRatsOfHamelin");

describe("countDeafRats", () => {

    test("returns correct number of deaf rats", () => {
        expect(countDeafRats("~O ~O ~O ~O O~ O~ O~ P ~O ~O ~O O~ O~ O~ O~")).toBe(6);
        expect(countDeafRats("~O ~O ~O ~O P")).toBe(0);
        expect(countDeafRats("P O~ O~ ~O O~")).toBe(1);
        expect(countDeafRats("~O ~O ~O ~O P ~O ~O O~")).toBe(2);
    })

    test("works when no spaces between rats", () => {
        expect(countDeafRats("~O~O~O~OP~O~OO~")).toBe(2);
        expect(countDeafRats("~O~O~O~OO~O~O~P~O~O~OO~O~O~O~")).toBe(6);
    })

})