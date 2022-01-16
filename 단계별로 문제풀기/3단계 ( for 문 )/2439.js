//각 testCase당 무엇이 반복되는 지를 파악해라!!
//일단 testCase만큼 반복되는게 정해져있어서...
//for문으로!!
//1. testCase의 수와 *의 수는 같은데 나머지를 빈 칸으로 채운다.
const fs = require("fs");
const input = fs.readFileSync("test.txt").toString();
const testCase = Number(input); //testCase 정수 type 5입력!
var empty;
for(let i=testCase; i>=i; i++){
    for(let i=1; i<=testCase-i; i++){
        empty = empty + "";
    }
    for(let i=1; i<=testCase-(testCase-i); i++){
        empty = empty + "*";
    }
    console.log(empty);
}
//testCase - i 만큼은 ""이 testCase - (testCase - i)은 *