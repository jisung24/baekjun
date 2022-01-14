const input = require("fs").readFileSync("test.txt").toString();

const num = Number(input); //숫자 5가 담김!
let zero = 0;

for(let i=1; i<=num; i++){
    zero = zero + i + "\n"; //zoro를 여러번을 통해서 초기화를 시켜주고.. 한 번에 zero를 출력
    //출력을 한 번씩 하면 시간이 오래걸리나봐... 그래서 줄바꿈을 통해서 초기화만 반복문 안에서
    //받아주고... 출력은 한 번에!!!
}
console.log(zero);