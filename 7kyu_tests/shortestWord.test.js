const shortestWord = require("../7kyu_challenges/shortestWord");

describe("shortestWord", () => {

    test("returns the length of the shortest word(s) in a string", () => {
        expect(shortestWord("do bees have knees")).toBe(2);
        expect(shortestWord("to be or not to be")).toBe(2);
        expect(shortestWord("Supercalifragilisticexpialidocious")).toBe(34); expect(shortestWord("Supercalifragilisticexpialidocious is a very long word")).toBe(1);
    });

});
