'use strict'; //반복문이 너무 어려워서 일단은 배열을 좀 익히고나서..
const fs = require("fs");
const input = fs.readFileSync("test.txt").toString().split("\n");
//input도 배열이 됐어!! 문자열 형이야!!!
const testCase = Number(input[0]);

const arr = input[1].split(" ");
for(let i=0; i<arr.length; i++){
    arr[i] = Number(arr[i]); 
} //일단 전부 정수로 바꿔주고!! 그리고 나서 max min함수 사용한다.
console.log(`${Math.max(...arr)} ${Math.min(...arr)}`);