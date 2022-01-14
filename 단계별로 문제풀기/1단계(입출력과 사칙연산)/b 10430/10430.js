'use strict';

const fs = require("fs"); //파일객체를 하나 만든다!
//이 파일 객체에 이제 입력받을 파일을 하나 넣어준다.
const input = fs.readFileSync("./dev/stdin.txt").toString().split(" ");
//readFile의 결과물은 버퍼 형식이다.. 따라서 사람이 읽을 수 있는 형식으로 바꿔야하는데.
//그래서 toString을 사용한다.
// console.log(input); //이미 배열로 만들어졌어!!!!!!!!!

const num1 = Number(input[0]);
const num2 = Number(input[1]);
const num3 = Number(input[2]); //다 넣어줌!

console.log(parseInt((num1 + num2) % num3));
console.log(parseInt(((num1 % num2) + (num2 % num3))  % num3));
console.log(parseInt((num1 * num2) % num3));
console.log(parseInt(((num1 % num3) * (num2 % num3))  % num3));