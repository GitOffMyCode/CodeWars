const pendulum = require("../7kyu_challenges/pendulumArraySort");

describe("pendulum", () => {

    test("returns array sorted in pendulum sequence", () => {
        expect(pendulum([6, 6, 8 ,5 ,10])).toEqual([10, 6, 5, 6, 8]);    
    });

});
