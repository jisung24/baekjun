'use strict';
let input = require("fs").readFileSync("test.txt").toString();

const N = Number(input);
let num = 0;

for(let i=N; i>=1; i--){
    num = num + i + "\n";
}
console.log(num);