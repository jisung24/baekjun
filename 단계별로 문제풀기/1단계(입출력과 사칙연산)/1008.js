'use strict';

//a/b

const fs = require('fs');
const input = fs.readFileSync('test.txt').toString().split(' ');

const num1 = Number(input[0]);
const num2 = Number(input[1]); //Number은 그냥 숫자로! parseInt()가 정수!

console.log(num1/num2);