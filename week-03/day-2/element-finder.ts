'use strict';

// Write a function that checks if the array contains "7"
// if it contains return "Hoorray" otherwise return "Noooooo"

const numbers: number[] = [1, 2, 3, 4, 5, 6, 8];

function containsSeven(nums: number[]): string{
  let out: string = "";
  if (nums.includes(7)) {
    out = "Hoorray!"
  } else {
    out = "Noooooo!"
  }
  return out;
}
console.log(containsSeven(numbers));
// The output should be: "Noooooo"
// Do this again with a different solution using different list functions!

export = containsSeven;