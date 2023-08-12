const isBeautifulString = (inputString: string): boolean => {
  //Creation of a map variable from the string variable "inputString".
  const tracker = getHashMapFromString(inputString);

  //Creation of variables
  const alphabetFirst: number = "a".charCodeAt(0);
  const alphabetLast: number = "z".charCodeAt(0);
  let previousCount: number = Number.MAX_VALUE;

  for (let index = alphabetFirst; index <= alphabetLast; index++) {
    const currentCount = tracker.get(String.fromCharCode(index)) || 0;
    if (currentCount > previousCount) return false;
    previousCount = currentCount;
  }

  return true;
};

//Function getHashMapInputString create a hashMap from the inputString variable
const getHashMapFromString = (inputString: string): Map<string, number> => {
  //Map variable declared "map".
  const map = new Map<string, number>();
  //walk through the string variable "inputString".
  [...inputString].forEach((currentLetter) => {
    map.get(currentLetter)
      ? map.set(currentLetter, map.get(currentLetter)! + 1)
      : map.set(currentLetter, 1);
  });
  return map;
};

export { isBeautifulString };
