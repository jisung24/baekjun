'use strict';
const fs = require("fs");
const input = fs.readFileSync("test.txt").toString().split("\n");

const testCase = Number(input[0]);

//5번 더해주고 그 값을 출력해주는거 까지 반복된다!
//즉 반복문 안에 들어갈 내용은 더하고 출력!
for(let i = 1; i<=testCase; i++){
    let num = input[i].split(" ");
    console.log(Number(num[0]) + Number(num[1]));
    //그냥 각자 빼서 형변환하고 더하는거 반복해서 해주면 되잖아!!
    //그냥 간단하게 생각해!!!!
    // ['1','2'] ==> 이거 [0],[1]뺴서 Number입힌다음 더해줘!
    //그럼 3이 나오잖아!!!
}