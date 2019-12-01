const pendulum = require("../7kyu_challenges/pendulumArraySort");

describe("pendulum", () => {

    test("returns even sized array sorted in pendulum sequence", () => {
        expect(pendulum([6, 8, 5, 10])).toEqual([8, 5, 6, 10]);
        expect(pendulum([9, 4, 6, 4, 10, 5])).toEqual([9, 5, 4, 4, 6, 10]);
        expect(pendulum([22, 21, 19, 27, 18, 15, 24, 24])).toEqual([24, 22, 19, 15, 18, 21, 24, 27]);
        expect(pendulum([49, 40, 41, 41, 39, 43, 40, 46, 30, 47, 46, 40])).toEqual([47, 46, 41, 40, 40, 30, 39, 40, 41, 43, 46, 49]);
    });

    test("returns odd sized array sorted in pendulum sequence", () => {
        expect(pendulum([6, 9, 3])).toEqual([9, 3, 6]);
        expect(pendulum([6, 6, 8, 5, 10])).toEqual([10, 6, 5, 6, 8]);
        expect(pendulum([27, 27, 19, 21, 22, 28, 24])).toEqual([28, 27, 22, 19, 21, 24, 27]);
        expect(pendulum([33, 38, 38, 36, 43, 48, 32, 40, 47, 50, 33])).toEqual([50, 47, 40, 38, 33, 32, 33, 36, 38, 43, 48]);
    });

    test("works with negative numbers", () => {
        expect(pendulum([-3, -6, -7])).toEqual([-3, -7, -6]);
        expect(pendulum([-9, -2, -10, -6])).toEqual([-6, -10, -9, -2]);
        expect(pendulum([-8, 15, 8, -3, -11])).toEqual([15, -3, -11, -8, 8]);
        expect(pendulum([-10, -10, -12, -13, -5, -10, -4, -17, -5, -12])).toEqual([-5, -10, -10, -12, -17, -13, -12, -10, -5, -4]);
    });

    test("works with mixture of positive and negative numbers", () => {
        expect(pendulum([-15,8,11])).toEqual([11,-15,8]);
        expect(pendulum([-6, 1, 2, 12, 19, 12, 19, -10, 13, 1])).toEqual([19, 12, 2, 1, -10, -6, 1, 12, 13, 19]);
    });

});
