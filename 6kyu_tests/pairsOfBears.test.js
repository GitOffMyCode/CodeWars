const bears = require("../6kyu_challenges/pairsOfBears");

describe("bears", () => {

    test("returns an array containing a string representing the mating pairs and a boolean", () => {
        expect(bears(7, '8j8mBliB8gimjB8B8jlB')).toEqual(["B8B8B8", false]);
        expect(bears(3, '88Bifk8hB8BB8BBBB888chl8BhBfd')).toEqual(["8BB8B8B88B", true]);
        expect(bears(8, '8')).toEqual(["", false]);
    })

})