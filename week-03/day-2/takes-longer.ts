'use strict';
// When saving this quote a disk error has occured. Please fix it.
// Add "always takes longer than" to between the words "It" and "you"

let quote: string = 'Hofstadter\'s Law: It you expect, even when you take into account Hofstadter\'s Law.';

quote = quote.slice(0, quote.indexOf("y")) + "always takes longer than" + quote.slice(quote.indexOf("y")-1);

console.log(quote);