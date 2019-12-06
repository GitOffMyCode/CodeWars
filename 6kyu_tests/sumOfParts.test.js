const partsSums = require("../6kyu_challenges/sumOfParts");

describe("partsSums", () => {

    test("return an array of the sums of its parts", () => {
        expect(partsSums([0, 1, 3, 6, 10])).toEqual([20, 20, 19, 16, 10, 0]);
    })

})