//오븐 시간풀기
//첫 째 줄은 시작하는 시간과 분... 두 번째 줄은 걸리는 시간!!!
//변수 고려를 잘 해줘야한다.

const fs = require('fs');
const input = fs.readFileSync('test.txt').toString().split("\n");
//일단 위아래로 나눠주고 input[0]을 time변수로 해서 hour min으로 나눠주자!!
//input[0]을 또 시간과 분으로 나눠줘야해!!!
// console.log(input[0]);
const time = input[0].split(" ");
let hour = Number(time[0]); //시간
let min = Number(time[1]); //분
let addedTime = Number(input[1]); //더해지는 분!!


resultTime(hour,min,addedTime);

function resultTime(hour,min,addedTime){
    //시간 분 더해지는 분을 입력을 받아서 최종 시간을 계산하는 함수!!
    //hour : 시작시간
    //min : 시작 분
    //addedTime : 더해지는 시간!!!!!
    min = min + addedTime; //min을 구함!! 여기서 이제 반복이 일어난다!!!

    //시간 자체는 딱 한 번 할당받는거임!! 대신 그 할당된 조건 안에서 반복이 이뤄진다!!!!
    //어떤게 반복이 되는 지 알아야 반복문 코드를 잘 짤 수 있음. 

    if(min >= 60){ //60을 넘는다면.. 그 밑에 60이 될 때 마다!!! 조건이 반복문 위에있음!!!
        while(min >= 60){
            min -= 60; //60을 빼줌.
            hour++;
            if(hour >= 24){
                hour -= 24; //24를 빼준다!!
            }
        }
        console.log(`${hour} ${min}`);
    }else{
        console.log(`${hour} ${min}`);
    }
    
    
}