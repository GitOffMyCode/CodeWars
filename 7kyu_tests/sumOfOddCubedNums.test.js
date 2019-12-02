const cubeOdd = require("../7kyu_challenges/sumOfOddCubedNums");

describe("cubeOdd", () => {

    test("returns the sum of the odd numbers within an array, after cubing the initial integers", () => {
        expect(cubeOdd([1, 2, 3, 4])).toBe(28);
        expect(cubeOdd([-3, -2, 2, 3])).toBe(0);
    });

    test("returns undefinded if any of the values aren't numbers", () => {
        expect(cubeOdd(["a", 12, 9, "z", 42])).toBe(undefined);
    });

});
