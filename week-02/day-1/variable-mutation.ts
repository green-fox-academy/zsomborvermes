'use strict';
export {};

let a: number = 3;
a += 10;
// make it bigger by 10

console.log(a);

let b: number = 100;
b -= 7;
// make it smaller by 7

console.log(b);

let c: number = 44;
c = c * 2;
// double c's value

console.log(c);

let d: number = 125;
d = d / 2;
// divide d's value by 5

console.log(d);

let e: number = 8;
e = e ** 2;
// what's the cube of e's value?

console.log(e);

let f1: number = 123;
let f2: number = 345;
let isBigger_1: boolean;

isBigger_1 = f1 > f2;
console.log(isBigger_1);
// tell if f1 is bigger than f2 (as a boolean)

let g1: number = 350;
let g2: number = 200;
let isBigger_2: boolean;

isBigger_2 = g2 * 2 > g1;
console.log(isBigger_2)
// tell if the double of g2 is bigger than g1 (as a boolean)

let h: number = 1357988018575474;
let divisorOfH: boolean;

divisorOfH = h % 11 == 0;
console.log(divisorOfH);
// tell if 11 is a divisor of h (as a boolean)

let i1: number = 10;
let i2: number = 3;
let check: boolean;

check = i2 ** 2 < i1 && i1 < i2 ** 4;
console.log(check);
// tell if i1 is higher than i2 squared and smaller than i2 cubed (as a boolean)

let j: number = 1521;
let divisible: boolean;

divisible = j % 3 == 0 || j % 5 == 0;
console.log(divisible);
// tell if j is divisible by 3 or 5 (as a boolean)

let k: string = 'Apple';
k = k + k + k + k;
// fill the k variable with its content 4 times

console.log(k);