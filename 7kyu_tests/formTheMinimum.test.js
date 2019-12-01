const minValue = require("../7kyu_challenges/formTheMinimum");

describe("formTheMinimum", () => {

    test("returns the smallest number that can be formed from an array of positive intigers greater than 0", () => {
        expect(minValue([1, 3, 1])).toBe(13);
        expect(minValue([4, 7, 5, 7])).toBe(457);
        expect(minValue([4, 8, 1, 4])).toBe(148);
        expect(minValue([3, 6, 5, 5, 9, 8, 7, 6, 3, 5, 9])).toBe(356789);
    });

});
