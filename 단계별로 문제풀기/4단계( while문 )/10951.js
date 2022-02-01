'use strict';
const fs = require("fs");
const input = fs.readFileSync("test.txt").toString().split("\n");
//input[0]도 배열이야!!!
for(let i=0; i<input.length-1; i++){
    const number = input[i].split(" ");

    const num1 = Number(number[0]);
    const num2 = Number(number[1]);
    console.log(num1 + num2);
}