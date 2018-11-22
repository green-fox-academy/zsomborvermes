export function countLetters(str: string) {
  let dictionary = {};
  for (let char of str.toLowerCase().split('')) {
    dictionary[char] ? dictionary[char]++ : dictionary[char] = 1;
  }
  return dictionary;
}