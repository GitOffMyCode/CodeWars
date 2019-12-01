const flattenAndSort = require("../7kyu_challenges/flattenAndSortArray");

describe("flattenAndSort", () => {

    test("returns a flattened version of an array with all integers sorted in ascending order", () => {
        expect(flattenAndSort([])).toEqual([]);
        expect(flattenAndSort([[], [1]])).toEqual([1]);
        expect(flattenAndSort([[3, 4, 5], [9, 8, 7, 6], [1, 2]])).toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9]);
        expect(flattenAndSort([[1, 3, 5], [100], [2, 4, 6]])).toEqual([1, 2, 3, 4, 5, 6, 100]);
        expect(flattenAndSort([[0], [100, 1000, 10]])).toEqual([0, 10, 100, 1000]);
        expect(flattenAndSort([[0], [-2, 2]])).toEqual([-2, 0, 2]);
        expect(flattenAndSort([[-55, -54], [-32, -33], [18, 19]])).toEqual([-55, -54, -33, -32, 18, 19]);
    });

});
