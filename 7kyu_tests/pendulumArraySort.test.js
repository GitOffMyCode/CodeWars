const pendulum = require("../7kyu_challenges/pendulumArraySort");

describe("pendulum", () => {

    test("returns array sorted in pendulum sequence", () => {
        expect(pendulum([6, 6, 8, 5, 10])).toEqual([10, 6, 5, 6, 8]);
        expect(pendulum([27, 27, 19, 21, 22, 28, 24])).toEqual([28, 27, 22, 19, 21, 24, 27]);
        expect(pendulum([33, 38, 38, 36, 43, 48, 32, 40, 47, 50, 33])).toEqual([50, 47, 40, 38, 33, 32, 33, 36, 38, 43, 48]);
        expect(pendulum([49, 30, 39, 30, 40, 44, 43, 48, 47, 50, 42, 48, 33])).toEqual([50, 48, 47, 43, 40, 33, 30, 30, 39, 42, 44, 48, 49]);
    });

    test("works with negative numbers", () => {
        expect(pendulum([-9,-2,-10,-6])).toEqual([-6,-10,-9,-2]);
    });

});
