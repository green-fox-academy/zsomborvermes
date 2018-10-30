'use strict';
export { };

let lineCount: number = 6;

// Write a program that draws a square like this:
//
// %%%%%%
// %    %
// %    %
// %    %
// %    %
// %%%%%%
//
// The square should have as many lines as lineCount is

for (let i: number = 0; i < lineCount; i++) {
    let currentLine: string = "";
    if (i == 0 || i == lineCount - 1) {
        for (let j: number = 1; j <= lineCount; j++) {
            currentLine = currentLine + "%";
        }
        console.log(currentLine);
    } else {
        for (let l: number = 1; l <= lineCount; l++) {
            if (l == 1 || l == lineCount) {
                currentLine = currentLine + "%";
            } else {
                currentLine = currentLine + " ";
            }
        }
        console.log(currentLine);
    }
}