const flattenAndSort = require("../7kyu_challenges/flattenAndSortArray");

describe("flattenAndSort", () => {

    test("returns a flattened version of an array with all integers sorted in ascending order", () => {
        expect(flattenAndSort([[1, 3, 5], [100], [2, 4, 6]])).toBe([1, 2, 3, 4, 5, 6, 100]);
    });

});
