'use strict';
const fs = require('fs');
const input = fs.readFileSync('test.txt').toString().split(' ');
//띄어쓰기를 기준으로 input을 배열로 만들어준다!!
//단 안에는 string type이다!!!!
console.log(input);

let num1 = Number(input[0]); //숫자로 바꿔준다.
let num2 = Number(input[1]); 


console.log(num1 + num2);