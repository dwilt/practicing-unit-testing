export function getMatchingLetters(...strings: string[]): string[] {
  if (!strings.length) {
    throw new Error("You need to pass in some strings!");
  }

  const invalidCharacters = [" "];
  const firstWord = strings[0]
    .toLowerCase()
    .split("")
    .filter((character) => invalidCharacters.indexOf(character) === -1);

  return firstWord.reduce((curr, character) => {
    for (let index = 1; index < strings.length; index++) {
      const word = strings[index].toLowerCase();

      if (word.search(character) === -1) {
        return curr;
      }
    }

    if (curr.indexOf(character) === -1) {
      curr.push(character);
    }

    return curr;
  }, [] as string[]);
}
