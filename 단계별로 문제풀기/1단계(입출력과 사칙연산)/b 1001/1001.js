'use strict';

const fs = require("fs"); 
const input = fs.readFileSync("./dev/stdin.txt").toString().split(" ");

const num1 = Number(input[0]);
const num2 = Number(input[1]);
console.log(solving(num1,num2));

function solving(inputNum1,inputNum2){
    if(inputNum1 >= inputNum2){
        return inputNum1 - inputNum2;
    }
    else{
        return inputNum2 - inputNum1;
    }
}