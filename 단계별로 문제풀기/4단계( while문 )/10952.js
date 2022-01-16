//두 정수 a b가 둘 다 0이 될 때 까지 입력받아라!
const fs = require("fs");
const input = fs.readFileSync("test.txt").toString().split("\n");
// 1 1
// 2 3
// 3 4
// 9 8
// 5 2
// 0 0
//input[i]들을 split으로 나눠줘야함!!!
//주의하자!! 어떤 것들을 split해줘야 할 지 정확하게 파악하자
let i=0;
while(true){
    let arrNum = input[i].split(" "); //arrNum[0,1]
    if((Number(arrNum[0]) && Number(arrNum[1])) === 0){
        break;
    }else{
        console.log(Number(arrNum[0]) + Number(arrNum[1]));
    }

    i++;
}


// ==> 무한루프 + break + continue도 있음! ==> true여도 i를 써줘야함!!!!