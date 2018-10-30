'use strict';
export{};

// -  Create a function called `printParams`
//    which logs to the console the input parameters
//    (can have multiple number of arguments)

function printParams(...args){
    console.log(...args);
}

printParams(1,2,3,4,5,6,7,8);