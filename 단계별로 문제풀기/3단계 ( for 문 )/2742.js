//이번엔 5를 입력받으면 5부터 1까지 출력하기!! 한 번에...
'use strict';
const fs = require("fs");
const input = fs.readFileSync("test.txt").toString();
//문자열 "5"를 입력..
const testCase = Number(input);
let emptyValue = "";

for(let i=testCase; i>=1; i--){
    emptyValue += (i + "\n");
}
console.log(emptyValue);