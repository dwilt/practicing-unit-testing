import { getInfoAboutYourFriends } from "./friends";

describe(`Friends`, () => {
  describe(`getInfoAboutYourFriends`, () => {
    it(`returns an object with info about them`, () => {
      expect(
        getInfoAboutYourFriends([
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
        totalAge: 67,
        matchingLetters: ["a"],
      });
    });
  });
});
