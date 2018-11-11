export { };
// Write a function that takes a filename as string,
// then returns the number of lines the file contains.
// It should return zero if it can't open the file, and
// should not raise any error.

const fs = require('fs');

function countLines(filename: string): number {
  let numberOfLines: number = 0;
  try {
    let fileContent = fs.readFileSync(filename, 'utf-8');
    numberOfLines = fileContent.split("\n").length;
    return numberOfLines;

  } catch (err) {
    return numberOfLines;
  }
}

console.log(countLines('message.txt'));
console.log(countLines('mess.txt'));