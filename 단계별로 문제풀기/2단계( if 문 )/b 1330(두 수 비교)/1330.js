'use strict';

const fs = require("fs");
const input = fs.readFileSync("./dev/stdin.txt").toString();

const year = Number(input);

if(year % 400 == 0 || (year % 4 == 0 && year % 100 != 0)){
    console.log("1");
}else{
    console.log("0");
}