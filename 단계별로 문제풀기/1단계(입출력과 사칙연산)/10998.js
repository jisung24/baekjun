'use strict';
// a*b

const fs = require('fs');
const input = fs.readFileSync('test.txt').toString().split(' ');

const num1 = Number(input[0]); //input은 지금 StringType의 배열임.
const num2 = Number(input[1]);

console.log(num1 * num2);