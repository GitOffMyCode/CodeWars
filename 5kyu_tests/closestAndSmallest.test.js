const closest = require("../5kyu_challenges/closestAndSmallest");

describe("closest", () => {

    test("returns an array containing 2 sub-arrays which consist of 3 numbers representing closest and smallest numbers", () => {
        expect(closest("456899 50 11992 176 272293 163 389128 96 290193 85 52")).toEqual([[13, 9, 85], [14, 3, 176]]);
    });

});
