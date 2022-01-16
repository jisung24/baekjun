const fs = require("fs");
const input = fs.readFileSync("test.txt").toString();


const testCase = Number(input);
// console.log(testCase,typeof testCase);
//testCase는 5이다.!!

for(let i=1; i<=testCase; i++){
    let star = "";
    let empty = "";
    for(let j=1; j<=testCase - i; j++){
        empty += " "; //공백 생성!
    }
    for(let j=1; j<=i; j++){
        star += "*";
    }
    console.log(empty+star);
}

//첫 줄에 빈 칸 4개 별 하나.. i를 1부터하면 
//testCase - i만큼 빈칸생성!!!

//반복문 내 변수설정...
/**
 * 한 줄 한 줄.. 새로운 한 줄이 나올때마다 다시 처음부터 
 * 시작하고싶으면 반복문 내에다가 변수를 초기화해준다.
 * 계속 변하기때문에, 절대 const로 선언해주지말자!!
 * 
 * 하지만 계속 반복마다 변하게하고싶으면 밖에다가 선언해준다!
 * 
 * i는 세로반복! => 그 안에 있는 2중 반복문은 
 * 그 1줄1줄이 반복이 일어나는지를 봐야한다.
 */