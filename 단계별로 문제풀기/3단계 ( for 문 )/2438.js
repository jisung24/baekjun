/** for문 */
const fs = require("fs");
const input = fs.readFileSync("test.txt").toString();
const testCase = Number(input);
let star = "";

// console.log(testCase,typeof testCase);
for(let i=1; i<=testCase; i++){
    star = star + "*";
    console.log(star);
}