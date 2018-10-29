'use strict';
export { };

let lineCount: number = 7;

// Write a program that draws a
// diamond like this:
//
//    *
//   ***
//  *****
// *******
//  *****
//   ***
//    *
//
// The diamond should have as many lines as lineCount is
if (lineCount % 2 == 1) {
    for (let i: number = 1; i <= lineCount; i += 2) {
        let currentLine: string = "";
        for (let spaces: number = 0; spaces <= (lineCount - i) / 2; spaces++) {
            currentLine = currentLine + " ";
        }
        for (let stars: number = 0; stars < i; stars++) {
            currentLine = currentLine + "*";
        }
        for (let spaces: number = 0; spaces <= (lineCount - i) / 2; spaces++) {
            currentLine = currentLine + " ";
        }
        console.log(currentLine);
    }
    for (let i: number = lineCount - 2; i >= 1; i -= 2) {
        let currentLine: string = "";
        for (let spaces: number = 0; spaces <= (lineCount - i) / 2; spaces++) {
            currentLine = currentLine + " ";
        }
        for (let stars: number = 0; stars < i; stars++) {
            currentLine = currentLine + "*";
        }
        for (let spaces: number = 0; spaces <= (lineCount - i) / 2; spaces++) {
            currentLine = currentLine + " ";
        }
        console.log(currentLine);
    }
} else {
    for (let i: number = 1; i <= lineCount; i += 2) {
        let currentLine: string = "";
        for (let spaces: number = 0; spaces <= (lineCount - i) / 2; spaces++) {
            currentLine = currentLine + " ";
        }
        for (let stars: number = 0; stars < i; stars++) {
            currentLine = currentLine + "*";
        }
        for (let spaces: number = 0; spaces <= (lineCount - i) / 2; spaces++) {
            currentLine = currentLine + " ";
        }
        console.log(currentLine);
    }
    for (let i: number = lineCount - 1; i >= 1; i -= 2) {
        let currentLine: string = "";
        for (let spaces: number = 0; spaces <= (lineCount - i) / 2; spaces++) {
            currentLine = currentLine + " ";
        }
        for (let stars: number = 0; stars < i; stars++) {
            currentLine = currentLine + "*";
        }
        for (let spaces: number = 0; spaces <= (lineCount - i) / 2; spaces++) {
            currentLine = currentLine + " ";
        }
        console.log(currentLine);

    }
}