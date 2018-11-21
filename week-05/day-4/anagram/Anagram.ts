
export function isAnagram(word_1: string, word_2: string) {
  const regularize = (str: string) => {
    return str.toLowerCase().replace(/[^a-z\d]/g, '').split('').sort().join('');
  };

  return regularize(word_1) === regularize(word_2);
}




