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

if(min + addedTime > 59){
    if(min + addedTime === 60){
        hour++;
        min === 0;
        console.log(`${hour} ${min}`);
    }else{
        hour++; //일단 hour을 증가시키고본다!!!!!!!!
        //그리고 60이 넘어버리면 또 
        // min = addedTime - (60 - min)이렇게 계산하는데.....
        //60이 초과 될 경우!!!
        if(min = addedTime - (60 - min) >= 60){
            hour++; //hour을 또 증가!!
            if(min = addedTime - (60 - min) === 60){
                min === 0; //0분으로!!!
                console.log(`${hour} ${min}`);
            }else{
                min = addedTime - (60 - min);
                console.log(`${hour} ${min}`);
            }
            
        }else{
            min = addedTime - (60 - min);
            console.log(`${hour} ${min}`);
        }
    }
}else{
    min = min + addedTime;
    console.log(`${hour} ${min}`);
}
