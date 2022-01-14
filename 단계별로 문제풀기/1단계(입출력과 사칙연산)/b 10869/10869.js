'use strict';

const fs = require("fs");
const input = fs.readFileSync("./dev/stdin.txt").toString().split(" ");

const num1 = Number(input[0]);
const num2 = Number(input[1]); //하나씩 숫자 저장!

console.log(add(num1,num2));
console.log(sub(num1,num2));
console.log(mul(num1,num2));
console.log(parseInt(div(num1,num2)));
console.log(per(num1,num2));

function add(num1,num2){
    return num1 + num2;
}
function sub(num1,num2){
return num1 - num2;
}
function mul(num1,num2){
return num1 * num2;
}
function div(num1,num2){
return num1 / num2;
}
function per(num1,num2){
return num1 % num2;
}