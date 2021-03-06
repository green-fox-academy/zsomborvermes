'use strict';
export{};

// -  Create (dynamically*) a two dimensional list
//    with the following matrix**. Use a loop!
//
//    0 0 0 1
//    0 0 1 0
//    0 1 0 0
//    1 0 0 0
//
// -  Print this two dimensional list to the console
//
// * size should depend on a variable
// ** Relax, a matrix is just like an array

let matrix = [];
let size: number = 4;

for (let i: number = 0; i < size; i++){
    let currentLine: number[] = [];
    for (let j: number = size-1; j >= 0; j--){
        if(j === i){
            currentLine.push(1);
        } else{
            currentLine.push(0);
        }
    }
    matrix.push(currentLine);
}

matrix.map(e => console.log(e.toString().split(",").join(" ")));
