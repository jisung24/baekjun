'use strict';

const fs = require('fs');
const input = fs.readFileSync('test.txt').toString().split(' ');
//split은 지정한 것을 기준으로 값을 잘라서 배열에 넣어주는 함수이다.

let num1 = Number(input[0]);
let num2 = Number(input[1]);
let empty; //아직 할당 전!!!

empty = cal(num1,num2,'+') + `\n` + cal(num1,num2,'-') + `\n` +
cal(num1,num2,'*') + `\n` + cal(num1,num2,'/') + `\n` + cal(num1,num2,'%') + `\n`;

//그 값을 반복해서 출력할 때 백준에서는 console.log를 반복문 안에 넣어주면 오류...
//
console.log(empty);
function cal(num1,num2,oper){
    if(oper === '+'){
        return num1 + num2;
    }else if(oper === '-'){
        return num1 - num2;
    }else if(oper === '*'){
        return num1 * num2;
    }else if(oper === '/'){
        return parseInt(num1 / num2);
    }else{
        return num1 % num2;
    }
}