'use strict';
export {};

let lineCount: number = 6;

// Write a program that draws a
// square like this:
//
// %%%%%
// %%  %
// % % %
// %  %%
// %   %
// %%%%%
//
// The square should have as many lines as lineCount is
for (let i: number = 1; i <= lineCount; i++){
    let currentLine: string = "";
    if (i == 1 || i == lineCount){
        for (let j: number = 1; j < lineCount; j++){
            currentLine = currentLine + "%";
        }
        console.log(currentLine);
    } else {
        for (let k: number = 1; k < lineCount; k++){
            if (k == 1 || k == lineCount-1){
                currentLine = currentLine + "%";
            } else {
                if (k == i){
                    currentLine = currentLine + "%";
                } else {
                    currentLine = currentLine + " ";
                }
            }
        }
        console.log(currentLine);
    }
}