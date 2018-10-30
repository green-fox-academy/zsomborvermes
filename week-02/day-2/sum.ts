'use strict';
export{};

// -  Write a function called `sum` that sum all the numbers until the given parameter
// -  The function should return the result

function sum(num: number){
    if(num == 1){
        return 1;
    } else{
        return num + sum(num-1);
    }

    // let sum: number = 0;
    // for(let i: number = 0; i <= num; i++){
    //     sum += i;
    // }
    // return sum;
}

console.log(sum(4));
console.log(sum(10));
