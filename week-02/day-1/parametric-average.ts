'use strict';

// Write a program that asks for a number.
// It would ask this many times to enter an number,
// if all the numbers are entered, it should print the sum and average of these
// numbers like:
//
// Sum: 22, Average: 4.4

let sum: number = 0;
let inputCounter: number = 0;
let numberOfInputs: number = 0;

console.log('How many numbers will you enter? ');
let input: any = process.openStdin();


input.addListener('data', function (d) {
  if (!Number.isNaN(+d.toString().trim())) {
    if (inputCounter === 0) {
      numberOfInputs = +d.toString().trim();
      console.log('Enter a number! ');
    } else if (inputCounter < numberOfInputs) {
      console.log('Enter a number! ');
      sum += +d.toString().trim();
    } else {
      sum += +d.toString().trim();
      console.log(`Sum: ${sum}, Average: ${sum / numberOfInputs}`);
      process.exit();
    }
    inputCounter++;
  } else {
    console.log('I need a number!')
  }
});

// note:  d is an object, and when converted to a string it will
    // end with a linefeed.  so we (rather crudely) account for that  
    // with toString() and then substring() 