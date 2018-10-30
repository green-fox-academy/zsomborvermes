'use strict';
export{};

// -  Create a function called `factorio`
//    that returns it's input's factorial

function factorio(num: number){
    if(num == 1){
        return 1;
    } else{
        return num * (factorio(num-1));
    }
}

console.log(factorio(5));