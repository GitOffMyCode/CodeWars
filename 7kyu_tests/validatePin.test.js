const validatePin = require("../7kyu_challenges/validatePin");

describe("validatePin", () => {

    test("returns true if PIN contains exactly 4 digits or exactly 6 digits", () => {
        expect(validatePin(1234)).toBe(true);    
        expect(validatePin(567890)).toBe(true);  
    });

});
