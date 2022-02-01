/**숫자 사이클! */
const fs = require("fs");
const input = fs.readFileSync("test.txt").toString();
//split 안 써도됨.
const testCase = Number(input);
let result = 0;
if((testCase >= 0) && (testCase <= 99)){
    if(testCase < 10){
        //앞에 0을 붙여서 두 자리 수로 만든다....
        //그리고 각 자리의 숫자를 더한다.
        '0' + testCase;
        result = (testCase / 10) + (testCase % 10);
    }else{
        //10 이상이면!
    }
}
// 10의 자리의 10의 자리 수 : 26 / 10 ==> 10의 자리..
//26 % 10