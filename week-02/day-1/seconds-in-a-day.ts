'use strict';

let currentHours: number = 14;
let currentMinutes: number = 34;
let currentSeconds: number = 42;
let currentTimeInSeconds: number = 0;
let secondsInADay: number = 86400;
let remainingSeconds: number = 0;

currentTimeInSeconds = currentHours*60*60 + currentMinutes*60 + currentSeconds;
remainingSeconds = secondsInADay - currentTimeInSeconds;

console.log(remainingSeconds);



// Write a program that prints the remaining seconds (as an integer) from a
// day if the current time is represented by these variables

