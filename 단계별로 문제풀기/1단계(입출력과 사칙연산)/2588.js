// const num1 = 385;

// console.log((parseInt(num1 / 100))); //백의자리 : 3
// console.log((num1 % 100)%10); //일의자리!!!
const fs = require('fs');
const input = fs.readFileSync('test.txt').toString().split("\n");
//3번은 num1 * num2의 일의자리
//4번은 num1 * num2의 십의자리
//5번은 num1 * num2의 백의자리
//6번은 num1 * num2
let num1 = Number(input[0]);
let num2 = Number(input[1]);

let num2_first = (num2 % 100)%10; //5
let num2_ten = parseInt((num2 % 100)/10); //8.5가 나오는데 정수로 바꿔줘!
let num2_hun = parseInt(num2 / 100);

console.log(num1 * num2_first);
console.log(num1 * num2_ten);
console.log(num1 * num2_hun);
console.log(num1 * num2);

//  /할 때는 끝까지 소수점자리까지 나오니까 꼭 parseInt로 정수로 바꿔줘야한다.!!!
// 계속 typeof연산자를 통해 타입 체크를 계속 해줘야한다. 