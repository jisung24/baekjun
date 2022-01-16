'use strict';
//각 테스트 케이스마다 입력을 받아서 출력을 해라...
//js에서는 한 번에 모든 값을 입력을 받기 때문에.. 입력을 반복적으로 받을 수는 없다.
const fs = require("fs");
const input = fs.readFileSync("test.txt").toString().split("\n");
//문자열로 입력을 받아서 "\n"로 쪼갠다!!
const testCase = Number(input[0]);

//input[1] = (1 1)  (2 3)  (3 4)  (4 5) 이런식으로...됨!!
let emptyValue = ""; //여기에... 문자열이 다 들어가게 한다!!!
for(let i=1; i<=testCase; i++){
    const num = input[i].split(" "); //num[0],num[1]로 나뉨!

    emptyValue += ("Case #" + `${i}: ${Number(num[0]) + Number(num[1])}` + "\n");
}
console.log(emptyValue);