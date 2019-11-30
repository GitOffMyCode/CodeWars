const oddOne = require("../7kyu_challenges/odderThanTheRest");

describe("oddOne", () => {

    test("returns the index at which the sole odd number is located", () => {
        expect(oddOne([1])).toBe(0); 
        expect(oddOne([2,4,6,7,10])).toBe(3);    
        expect(oddOne([2,16,98,10,13,78])).toBe(4);
        expect(oddOne([4,-8,98,-12,-7,90,100])).toBe(4);
        expect(oddOne([1009872,1009873])).toBe(1);
        expect(oddOne([1,2])).toBe(0); 
    });

    test("returns -1 if no odd number is found", () => {
        expect(oddOne([])).toBe(-1);
        expect(oddOne([2,4,6,8])).toBe(-1);
        expect(oddOne([246, 870, 990, 120, 7652])).toBe(-1);
    });

});
