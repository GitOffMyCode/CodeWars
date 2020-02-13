const closest = require("../5kyu_challenges/closestAndSmallest");

describe("closest", () => {

  test("returns an array containing 2 sub-arrays which consist of 3 numbers representing closest and smallest numbers", () => {
    expect(closest("")).toEqual([]);
    expect(closest("456899 50 11992 176 272293 163 389128 96 290193 85 52")).toEqual([ [13, 9, 85], [14, 3, 176] ]);
  });

  test("sorts by index number if weights are equal", () => {
    expect(closest("239382 162 254765 182 485944 134 468751 62 49780 108 54")).toEqual([ [8, 5, 134], [8, 7, 62] ]);
    expect(closest("403749 18 278325 97 304194 119 58359 165 144403 128 38")).toEqual([ [11, 5, 119], [11, 9, 128] ]);
    expect(closest("123 6 50001")).toEqual([ [6, 0, 123], [6, 1, 6] ]);
  });

});
