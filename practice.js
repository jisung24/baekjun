const cycleArr = [];
let firstNum = 26;
cycleArr.push(firstNum); //0번에 들어감!!
// console.log(cycleArr[0]); 
let ten = parseInt(firstNum / 10);
let one = (firstNum % 10);
let newNum = 0;

let i=1;
while(true){
    let firstStep = ten + one;
    newNum = 10*(one) + firstStep; //68이 나옴!!
    cycleArr.push(newNum); //i번째에 입력!!

    if(newNum === firstNum){
        console.log(i);
        break;
    }
}

