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

let instructions: string = `Provide an operation with 2 operand and an operator!
Separate the operands and the operator with spaces!
(Examples: 3 + 3 or 21 * 32)
Press enter to calculate the result!\n`;

console.log(`\n\n\t\tCALCULATOR v2.0\n\n${instructions}`);
let input = process.openStdin();

let operand_1: number = 0;
let operand_2: number = 0;
let operator: string = "";
let validOperators: string[] = ['+', '-', '*', '/', '%'];

input.addListener('data', function (d) {
  let operation: any[] = [];
  operation = d.toString().trim().split(" ");
  operand_1 = +operation[0];
  operand_2 = +operation[2];
  operator = operation[1];
  calculator(operand_1, operand_2, operator);

});

function calculator(op_1: number, op_2: number, operator: string): void {
  if (Number.isNaN(op_1) || Number.isNaN(op_2) || validOperators.indexOf(operator) === -1) {
    console.log(`\t\tWRONG INPUT!!!\n\n${instructions}`);
  } else {
    switch (operator) {
      case "+": {
        console.log(`\nResult: ${op_1 + op_2}\n`);
        process.exit();
        break;
      }
      case "-": {
        console.log(`\nResult: ${op_1 - op_2}\n`);
        process.exit();
        break;
      }
      case "*": {
        console.log(`\nResult: ${op_1 * op_2}\n`);
        process.exit();
        break;
      }
      case "/": {
        console.log(`\nResult: ${op_1 / op_2}\n`);
        process.exit();
        break;
      }
      case "%": {
        console.log(`\nResult: ${op_1 % op_2}\n`);
        process.exit();
        break;
      }
    }
  }
}

export = calculator;