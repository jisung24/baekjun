//윤년이면 1  아니면0을 출력한다.
//윤년이란? : (4로 나누어 떨어지고, 100으로 나눠 떨어지지않음) or 400으로 나누어 떨어짐

const fs = require('fs');
const input = fs.readFileSync('test.txt').toString();

const year = Number(input);

if(((year % 4 === 0)&&(year % 100 !== 0))||(year % 400 === 0)){
    console.log(1);
}else{
    console.log(0);
}
