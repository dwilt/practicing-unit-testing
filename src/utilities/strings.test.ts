import { getMatchingLetters } from "./strings";

describe(`Strings`, () => {
  describe(`getMatchingLetters`, () => {
    it(`returns an empty array back if there are no words`, () => {
      expect(getMatchingLetters()).toMatchObject([]);
    });

    it(`returns a every letter when a single word is passed`, () => {
      expect(getMatchingLetters("dan")).toMatchObject(["d", "a", "n"]);
    });

    it(`returns an empty array when no letters match between words`, () => {
      expect(getMatchingLetters("dan", "joe")).toMatchObject([]);
    });

    it(`returns an array of matching letters between all words`, () => {
      expect(getMatchingLetters("daniel", "joe")).toMatchObject(["e"]);
    });

    it(`returns an array of matching letters between all words ignoring case`, () => {
      expect(getMatchingLetters("Daniel", "Todd")).toMatchObject(["d"]);
    });

    it(`returns an array without spaces`, () => {
      expect(getMatchingLetters("da n")).toMatchObject(["d", "a", "n"]);

      expect(getMatchingLetters("daniel wilt", "joe yuhas")).toMatchObject([
        "a",
        "e",
      ]);
    });

    it(`returns an array without duplicates`, () => {
      expect(getMatchingLetters("aaaaa", "aaaa")).toMatchObject(["a"]);
    });
  });
});
