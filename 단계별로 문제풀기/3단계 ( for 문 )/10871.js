"N x를 입력하고 N개의 수열 중 x보다 작은 수 모두 출력!"
'use strict';
const fs = require("fs");
const input = fs.readFileSync("test.txt").toString().split("\n");
//10 5
//1 10 4 9 2 3 8 5 7 6
const testCase = input[0].split(" "); //10과 5가 들어감!!
const arrList = input[1].split(" "); //arrList[0-9]까지 문자가 들어감!! 형 변환해주자!

const N = Number(testCase[0]);
const x = Number(testCase[1]);

let printNum = "";
for(let i=1; i<=N; i++){
    //1부터 10번 반복한다!!!!
    if(x > Number(arrList[i-1])){
        printNum += Number(arrList[i-1]) + " ";
    }
    else{
        continue;
    }
}
console.log(printNum);
