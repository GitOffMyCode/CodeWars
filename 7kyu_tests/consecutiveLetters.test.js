const consecutiveLetters = require("../7kyu_challenges/consecutiveLetters");

describe("consecutiveLetters", () => {

    test("returns true if string contains a range of consecutive letters, none of which are duplicated", () => {
        expect(consecutiveLetters("a")).toBe(true);    
        expect(consecutiveLetters("dabc")).toBe(true);
        expect(consecutiveLetters("abcdefghijklmnopqrstuvwxyz")).toBe(true);
        expect(consecutiveLetters("ghijkl")).toBe(true);
        expect(consecutiveLetters("xyz")).toBe(true);
        expect(consecutiveLetters("acdefghjklmnopqrstiuvwxybz")).toBe(true);
        expect(consecutiveLetters("ikhljg")).toBe(true);
    });
    test("returns false if string contains a range of consecutive letters OR there are duplicates", () => {
        expect(consecutiveLetters("az")).toBe(false);
        expect(consecutiveLetters("ca")).toBe(false);
        expect(consecutiveLetters("abbc")).toBe(false);
        expect(consecutiveLetters("aabcdefghijklmnopqrstuvwxyz")).toBe(false);
        expect(consecutiveLetters("ghikl")).toBe(false);
        expect(consecutiveLetters("abdefghijkmnopqrtuvwyz")).toBe(false);
    });

});
