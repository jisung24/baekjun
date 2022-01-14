const fs = require("fs");
const input = fs.readFileSync("test.txt").toString().split("\n");
const testCase = Number(input[0]);

for(let i=1; i<=testCase; i++){
    let arr = input[i].split(" ");
    //arr에는 ['1','1']이 담겨있다!! arr[0], arr[1]로 나뉜다.
    console.log(Number(arr[0]) + Number(arr[1]));
}

