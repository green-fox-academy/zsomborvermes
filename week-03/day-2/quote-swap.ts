'use strict';
// Accidentally I messed up this quote from Richard Feynman.
// Two words are out of place
// Your task is to fix it by swapping the right words with code

// Also, log the sentence to the console with spaces in between.
// Create a function called quoteSwap().

let words: string[] = ['What', 'I', 'do', 'create,', 'I', 'cannot', 'not', 'understand.'];

function quoteSwap(words: string[]): string[] {
  let temp: string = words[words.indexOf('do')];
  words.splice(words.indexOf('do'), 1, words[words.indexOf('cannot')]);
  words.splice(words.indexOf('cannot'), 1, temp);

  return words;
}

console.log(quoteSwap(words).join(' '));
// Expected output: "What I cannot create I do not understand."

export = quoteSwap;