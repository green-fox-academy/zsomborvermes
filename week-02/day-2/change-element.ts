'use strict';
export{};

// -  Create an array named `numList` with the following content: `[1, 2, 3, 8, 5, 6]`
// -  Change the 8 to 4 with the `.map` method 
// -  Print the fourth element as a test

let numList: number[] = [1, 2, 3, 8, 5, 6];

let numList_1 = numList.map(e => {
    if(e === 8){
        return 4;
    } else {
        return e;
    }
})

console.log(numList_1);