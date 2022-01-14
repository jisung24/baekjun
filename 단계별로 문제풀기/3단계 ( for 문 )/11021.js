/** */
let input = require("fs").readFileSync("test.txt").toString().split("\n");
const testCase = Number(input[0]);
let NULL = "";
// console.log(testCase,typeof testCase); number 5잘 찍힘.
for(let i=1; i<=testCase; i++){
    const num = input[i].split(" ");
    NULL = Number(num[0]) + Number(num[1]);
    console.log("Case #"+i+": "+NULL);
}