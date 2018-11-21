export function countLetters(str: string) {
  let dictionary = {};
  for (let char of str.toLowerCase().split('')) {
    if (char in dictionary) {
      dictionary[char]++;
    } else {
      dictionary[char] = 1;
    }
  }

  return dictionary;
}
