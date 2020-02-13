const generateHashtag = require("../5kyu_challenges/theHashtagGenerator");

describe("generateHashtag", () => {

  test("returns false if string has no alphabetic characters", () => {
    expect(generateHashtag("")).toBe(false);
    expect(generateHashtag(" ")).toBe(false);
    expect(generateHashtag(" $ ^ ? / % & . ! ^ ( * # ")).toBe(false);
  });

  test("handles a single word and ignores spaces", () => {
    expect(generateHashtag("code")).toBe("#Code");
    expect(generateHashtag(" love ")).toBe("#Love");
  });

  test("handles single characters", () => {
    expect(generateHashtag("a b c")).toBe("#ABC");
    expect(generateHashtag(" a before z ")).toBe("#ABeforeZ");
  });

  test("handles multiple words", () => {
    expect(generateHashtag("love coding")).toBe("#LoveCoding");
    expect(generateHashtag("Do We have A Hashtag")).toBe("#DoWeHaveAHashtag");
    expect(generateHashtag(" dance like no one is watching ")).toBe("#DanceLikeNoOneIsWatching");
  });

  test("ignores non alphabetic characters", () => {
    expect(generateHashtag("love coding!")).toBe("#LoveCoding");
    expect(generateHashtag(" !@£$%^&*() buzz off ")).toBe("#BuzzOff");
  });

  test("returns false if result is longer than 140 characters", () => {
    expect(generateHashtag("tooooooooo oooooooooo oooooooooo oooooooooo oooooooooo oooooooooo oooooooooo oooooooooo oooooooooo oooooooooo oooooooooo oooooooooo oooooooooo oooooooooo long")).toBe(false);
  });

});