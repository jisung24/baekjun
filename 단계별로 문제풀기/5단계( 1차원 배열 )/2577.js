const fs = require("fs");
const input = fs.readFileSync("test.txt").toString().split("\n");
let num = 1;

//input은 배열이 됨.
for(let i=0; i<input.length; i++){
    num *= Number(input[i]);
}
//num을 이제 다시 String으로 바꿔야 length를 구해!

let arr = String(num); //다시 배열로 바꿔주려고 숫자를 문자열로 바꿔줌!!!!
//문자열이 됐는데, 여기서 찾아야돼!!

for(let i=0; i<arr.length; i++){
    // 0 1 2 3 4 ...등을 세기 위함!! i로 생각하자!
    let count = 0;
    for(let j=0; j<arr.length; j++){
        if(i === Number(arr[j])){
            count++;
        }
    }
    console.log(count);
}



