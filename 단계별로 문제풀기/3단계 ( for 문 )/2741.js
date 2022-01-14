//자연수 n이 주어졌을 때 1부터 n까지 출력하는 코드 작성하시요!!!!
//반복문... 근데 js에서는 출력을 반복해주면 안 돼.... 
//줄바꿈 문자와 함께 초기화를 했다가.. 하나로 출력을 해줘야한다...
//그럼 +=를 사용해줘 ==> 복합연산자... 
//복합연산자 + - * /는 그냥 수열이라고 생각하자... %도.. 
const fs = require("fs");
const input = fs.readFileSync("test.txt").toString(); //split으로 나누지 않아도 돼!
const inputNum = Number(input); //input[0]이랑 똑같아!!!
let emptyNum = ""; //여기다가 초기화를 해줘!!

for(let i=1; i<=inputNum; i++){
     emptyNum += (i + "\n");
}
console.log(emptyNum);