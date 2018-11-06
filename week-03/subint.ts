'use strict';
//  Create a function that takes a number and a list of numbers as a parameter
//  Returns the indeces of the numbers in the list where the first number is part of
//  Returns an empty list if the number is not part any of the numbers in the list

function subint(num: number, numList: number[]) {
  let subint: number[] = [];
  for (let number of numList) {
    let numberParts = number.toString().split("");
    if (numberParts.find(e => +e === num)) {
      subint.push(numList.indexOf(number));
    }
  }
  return subint;
}

// Example
console.log(subint(1, [1, 11, 34, 52, 61]));
// should print: `[0, 1, 4]`
console.log(subint(9, [1, 11, 34, 52, 61]));
// should print: '[]'