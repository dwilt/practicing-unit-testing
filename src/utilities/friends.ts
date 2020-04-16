import { addNumbers } from "./math";
import { getMatchingLetters } from "./strings";

interface Friend {
  name: string;
  age: number;
}

interface GetInfoReturnValue {
  totalAge: number;
  matchingLetters: string[];
}

export function getInfoAboutYourFriends(friends: Friend[]): GetInfoReturnValue {
  const totalAge = addNumbers(...friends.map(({ age }) => age));
  const matchingLetters = getMatchingLetters(
    ...friends.map(({ name }) => name)
  );

  return {
    totalAge,
    matchingLetters,
  };
}
