const fs = require("fs");
const input = fs.readFileSync("test.txt").toString();
const testCase = Number(input); //2

for(let i = 1; i<=9; i++){
    console.log(testCase + " * " + i + " = " + testCase * i);
}
//반복되는거!!
//내부 싹 다 반복되고 출력까지 반복된다. ==> 9번!!