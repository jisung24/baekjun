const fs = require("fs");
const input = fs.readFileSync("test.txt").toString().split("\n");


const testCase = Number(input[0]);
//이제 input 1 - 5까지가 문제임!!!
for(let i=1; i<=testCase; i++){
    const num = input[i].split(" "); // "1","1"이 담긴다!!
    console.log("Case #"+i+": "+Number(num[0]) + " + "+ Number(num[1])+" = "+(Number(num[0])+ Number(num[1])));
    
}

