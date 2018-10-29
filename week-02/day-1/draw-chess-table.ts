'use strict';

// Create a program that draws a chess table like this
//
// % % % %
//  % % % %
// % % % %
//  % % % %
// % % % %
//  % % % %
// % % % %
//  % % % %
//
for (let i: number = 1; i <= 8; i++){
    let currentLine: string = "";
    if(i % 2 == 0){
        for (let j: number = 1; j <= 8; j++){
            if(j % 2 == 0){
                currentLine = currentLine + "%";
            } else {
                currentLine = currentLine + " ";
            }
        }
        console.log(currentLine);
    } else {
        for (let k: number = 1; k <= 8; k++){
            if (k % 2 == 0){
                currentLine = currentLine + " ";
            } else {
                currentLine = currentLine + "%";
            }
        }
        console.log(currentLine);
    }
}