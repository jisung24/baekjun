const fs = require("fs");
const input = fs.readFileSync("test.txt").toString().split("\n");

for(let i=0; i<input.length; i++){
    input[i] = Number(input[i]);
}

console.log(Math.max(...input));
console.log(input.indexOf(Math.max(...input)) + 1);
//원하는 값의 index를 찾아준다1!!
//만약 없다면 -1을 반환하는데... if문에서 true이니 조심하자!!!

let arr = [6,88,99];
console.log(arr.indexOf(88)); // 1이 반환이 된다.
//그래서 원하는 값의 index를 보기위해서는 indexOf가 필요하다!!