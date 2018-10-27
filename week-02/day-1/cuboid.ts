'use strict';
export {};

// Write a program that stores 3 sides of a cuboid as variables (floats)
// The program should write the surface area and volume of the cuboid like:
//
// Surface Area: 600
// Volume: 1000

let a: number = 34;
let b: number = 51;
let c: number = 15;

let area: number = 0;
let volume: number = 0;

area = 2*a*b + 2*a*c + 2*b*c;
volume = a * b * c

console.log("Surface Area: " + area);
console.log("Volume: " + volume);

