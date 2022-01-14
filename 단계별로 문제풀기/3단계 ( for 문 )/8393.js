const fs = require("fs");
const input = fs.readFileSync("test.txt").toString();
//1부터 차이만큼!!!
const testCase = Number(input); //3이 입력됨!!
let sum = 0;

for(let i=1; i<=testCase; i++){
    sum = i + sum;
}
console.log(sum);