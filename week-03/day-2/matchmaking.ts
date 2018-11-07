'use strict';
// Write a function that joins two array by matching one girl with one boy in a new array
// Exepected output: ["Eve", "Joe", "Ashley", "Fred"...]

let girls: string[] = ['Eve', 'Ashley', 'Claire', 'Kat', 'Jane'];
let boys: string[] = ['Joe', 'Fred', 'Tom', 'Todd', 'Neef', 'Jeff'];

function makingMatches(girls: string[], boys: string[]): string[]{
  let matches: string[] = [];
  for (let i: number = 0; i < girls.length; i++){
    matches.push(girls[i]);
    matches.push(boys[i]);
  }
  return matches;
}

console.log(makingMatches(girls, boys));

export = makingMatches;