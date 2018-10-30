'use strict'
export{};

// -  Create a variable named `abc` with the following content: `["Arthur", "Boe", "Chloe"]`
// -  Swap the first and the third element of `abc`

let abc: string[] = ["Arthur", "Boe", "Chloe"];

let temp: string = abc[0];
abc.splice(0, 1);
abc.push(temp);

console.log(abc);