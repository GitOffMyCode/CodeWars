const validatePin = require("../7kyu_challenges/validatePin");

describe("validatePin", () => {

    test("returns true if PIN contains exactly 4 or 6 digits", () => {
        expect(validatePin(1234)).toBe(true);    
        expect(validatePin(567890)).toBe(true);  
    });

    test("returns false if PIN does not contain exactly 4 or 6 digits", () => {
        expect(validatePin()).toBe(false);  
        expect(validatePin(12345)).toBe(false);  
        expect(validatePin(1234567)).toBe(false); 
        expect(validatePin(12345678901234567890)).toBe(false); 
    });

});
