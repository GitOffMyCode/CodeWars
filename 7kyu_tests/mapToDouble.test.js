const double = require("../7kyu_challenges/mapToDouble");

describe("double", () => {

    test("return a new array with each value doubled in size", () => {
        expect(double([2,4,6,8,10])).toEqual([4,8,12,16,20]); 
        expect(double([1,45678])).toEqual([2,91356]);
        expect(double([100, 100, 100, 100, 100])).toEqual([200, 200, 200, 200, 200]); 
        expect(double([5000])).toEqual([10000]); 
    });

    test("works with negative numbers", () => {
        expect(double([71,-548,12.3,31415])).toEqual([142,-1096,24.6,62830]); 
        expect(double([-5000])).toEqual([-10000]);
    });

});