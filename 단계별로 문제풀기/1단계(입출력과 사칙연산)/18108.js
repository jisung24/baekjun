//우리나라는 서기!   태국은 불기!! 보통 서기에 544 일부는 543을 더하면 불기가 됨.
const fs = require('fs');
const boolgi = fs.readFileSync('test.txt').toString().split(' ');

const seogi = Number(boolgi) - 543;

console.log(typeof seogi);
