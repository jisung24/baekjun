'use strict'; //반복문이 너무 어려워서 일단은 배열을 좀 익히고나서..
//js는 다른 언어들과 달리 배열과 split + 형변환을 자유자재로 다룰 줄 알아야한다.
//최댓값 최솟값 구하기,, 이건 변수에 따로 저장을 해줘야함!!

const fs = require("fs");
const input = fs.readFileSync("test.txt").toString().split("\n");

const testCase = Number(input[0]); //5
const arrList = input[1]; //arr전체가 담김!! 배열 전체를 Number시킬 수 없음!!!
//arrList[i] =  Number(input[1].split(" "));
let max = 0;
let min = 0;
for(let i=0; i<arrList.length; i++){

}