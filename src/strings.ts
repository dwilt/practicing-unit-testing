export function getMatchingLetters(...strings: string[]): string[] {
  if (strings.length === 0) {
    return [];
  } else if (strings.length === 1) {
    return strings[0].split("").filter((character) => character !== " ");
  } else {
    const firstWord = strings[0].split("");

    return firstWord.reduce((curr, character) => {
      for (let index = 1; index < strings.length; index++) {
        const word = strings[index];

        if (word.search(character) === -1 || character === " ") {
          return curr;
        }
      }

      curr.push(character);

      return curr;
    }, [] as string[]);
  }
}
