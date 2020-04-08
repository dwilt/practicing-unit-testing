import { addNumbers } from "./math";

describe(`Math`, () => {
  describe(`addNumbers`, () => {
    it(`adds numbers together`, () => {
      expect(addNumbers(1, 3, 5, 6)).toBe(15);
      expect(addNumbers(1)).toBe(1);
    });

    it(`throws an error if no numbers are passed in`, () => {
      expect(() => {
        addNumbers();
      }).toThrow();
    });
  });
});
