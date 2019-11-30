const double = require("../7kyu_challenges/mapToDouble");

describe("double", () => {

    test("return a new array with each value doubled in size", () => {
        expect(double([2,4,6,8,10])).toEqual([4,8,12,16,20]); 
    });

});