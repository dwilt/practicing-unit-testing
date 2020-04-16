export function addNumbers(...numbers: number[]): number {
  if (!numbers.length) {
    throw new Error(`You need to pass in a number!`);
  }

  return numbers.reduce((previous, current) => {
    return previous + current;
  });
}
