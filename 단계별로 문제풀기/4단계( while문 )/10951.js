const fs = require("fs");
const testCase = fs.readFileSync("test.txt").toString().split("\n");
//input은 이제 testCase가 정해져있지않은 배열임. 길이가 정해져있지않음.
// console.log(testCase[0],typeof testCase[0]);
let i=0;
let sum = 0;
while(i<testCase.length){
    let num = testCase[i].split(" "); //배열이어서 type변환 상관없어! 배열 내부의 숫자들을
    //변환시켜줘야함!!!

    sum += (Number(num[0]) + Number(num[1]) + "\n");
    i++;
}
for(let i=0; i<sum.length; i++){
    console.log(sum[i]);
}
//+=는 계속해서 값을 쌓아두는 것!!