'use strict';
// Create a simple calculator application which does read the parameters from the standard input
// and prints the result to the console.

// It should support the following operations, create function called "calculate()" :
// +, -, *, /, % and it should support two operands:

// The format of the expressions must be: {operation} {operand} {operand}.
// Examples: "+ 3 3" (the result will be 6) or "* 4 4" (the result will be 16)

// You should use the command line arguments to accept user input

// It should work like this:

// Start the program with "node calculator.js + 5 6"
// If number of arguments are not correct, print some nice errors
// Else print the result
// Say goodbye

//const args = process.argv.splice(2); // Just a helper for you to get started

//console.log('Input params are', args);
console.log("Provide 2 operand and an operator!");
console.log('Provide the first operand!');
let input = process.openStdin();
let counter: number = 0;
let operand_1: number = 0;
let operand_2: number = 0;
let operator: string = "";

input.addListener('data', function (d) {
  if (counter === 0) {
    operand_1 = +d.toString().trim();
    console.log('Provide the second operand!');
  } else if (counter === 1) {
    operand_2 = +d.toString().trim();
    console.log('Provide an operator! (+, -, *, /, %)');
  } else {
    operator = d.toString().trim();
    console.log(`Result: ${calculator(operand_1, operand_2, operator)}`);
    process.exit();
  }
  counter++;
});

function calculator(op_1: number, op_2: number, operator: string): number {
  if (operator === '+') {
    return op_1 + op_2;

  } else if (operator === '-') {
    return op_1 - op_2;

  } else if (operator === '*') {
    return op_1 * op_2;

  } else if (operator === '/') {
    return op_1 / op_2;

  } else if (operator === '%') {
    return op_1 % op_2;

  } else  {
    console.log('Wrong input!');
  }
}

export = calculator;