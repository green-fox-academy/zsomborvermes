'use strict';

// Write a program that asks for a number.
// It would ask this many times to enter an number,
// if all the numbers are entered, it should print the sum and average of these
// numbers like:
//
// Sum: 22, Average: 4.4

console.log("How many numbers will you enter?: ");
let input: any = process.openStdin();
let sum: number = 0;
let inputCounter: number = 0;
let NumberOfInputs = 0;


input.addListener("data", function (d) {
    if (!Number.isNaN(+d.toString().trim())) {
        if (inputCounter == 0) {
            NumberOfInputs = +d.toString().trim();
            console.log("Enter a number! ");
        } else if (inputCounter < NumberOfInputs) {
            console.log("Enter a number! ");
            sum += +d.toString().trim();
        } else {
            console.log("Enter a number! ");
            sum += +d.toString().trim();
            console.log("Sum: " + sum + ", Average: " + sum / NumberOfInputs);
            process.exit();
        }
        inputCounter++;
    } else {
        console.log("I need a number!")
    }

});
