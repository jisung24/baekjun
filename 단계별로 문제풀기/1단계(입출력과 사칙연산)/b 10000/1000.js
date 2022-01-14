'use strict';
/**  1 2를 입력을 받아서 더해주는 문제! */
//정리 자바스크립트는 해당 파일에 쓰여져있는 입력값을
//해당 파일을 불러오면서 읽어버리는 형태이다.
const fs = require("fs");
const input = fs.readFileSync("./dev/stdin.txt").toString().split(" ");

//지금은 문자열임!!
const num1 = Number(input[0]);
const num2 = Number(input[1]);
console.log(solving(num1,num2));


function solving(inputNum1,inputNum2){
    return inputNum1 + inputNum2;
}