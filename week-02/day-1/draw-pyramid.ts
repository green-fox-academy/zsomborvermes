'use strict';
export {};

let lineCount: number = 4;
let pyramidBase: number = (lineCount*2)-1;


// Write a program that draws a
// pyramid like this:
//
//    *
//   ***
//  *****
// *******
//
// The pyramid should have as many lines as lineCount is

for (let i: number = 1; i <= pyramidBase; i = i + 2){
    let currentLine: string = "";
    for(let spaces: number = 0; spaces <= (pyramidBase-i)/2; spaces++){
        currentLine = currentLine + " ";
    }
     for(let stars: number = 0; stars < i; stars++){
        currentLine = currentLine + "*";
    }
    for(let spaces: number = 0; spaces <= (pyramidBase-i)/2; spaces++){
        currentLine = currentLine + " ";
    } 
    console.log(currentLine);
}

