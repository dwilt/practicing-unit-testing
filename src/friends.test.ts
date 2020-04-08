import { mocked } from "ts-jest/utils";
import { getInfo } from "./friends";

import { addNumbers } from "./math";
import { getMatchingLetters } from "./strings";

jest.mock("./math");
jest.mock("./strings");

const mockedAddNumbers = mocked(addNumbers, true);
const mockedGetMatchingLetters = mocked(getMatchingLetters, true);

describe(`Friends`, () => {
  describe(`getInfo`, () => {
    it(`returns an object with info about them`, () => {
      mockedAddNumbers.mockReturnValue(2);
      mockedGetMatchingLetters.mockReturnValue(["a", "b", "c"]);

      expect(
        getInfo([
          {
            name: "Dan Wilt",
            age: 33,
          },
          {
            name: "Jake Repash",
            age: 34,
          },
        ])
      ).toMatchObject({
        totalAge: 2,
        matchingLetters: ["a", "b", "c"],
      });

      expect(mockedAddNumbers).toHaveBeenCalledWith(33, 34);
      expect(mockedGetMatchingLetters).toHaveBeenCalledWith(
        "Dan Wilt",
        "Jake Repash"
      );
    });
  });
});
