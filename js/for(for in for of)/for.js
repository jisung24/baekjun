'use strict';
//함수 스토리 읽는 법 : 이 함수는 파라미터 2개를 입력 받아서 이렇게 계산해서 리턴한다. 
//1. 구구단!! 단을 입력받고 그 단을 이용해서 구구단 출력!!!
function multiplication(number){
    for(let i=1; i<=9; i++){
        console.log(`${number} * ${i} = ${number * i}`);
    }
}
multiplication(3); //단을 하나 입력을 받고 그 단의 9까지 곱한 구구단을 출력해주는 구구단!




// Object
// -0)
// - 생성방법 : literal , constructor
// - 자바스크립트는 대부분이 object type으로 이루어짐!!!!! 안에 프로퍼티와 value가 있다.
// - {key : value,}의 집합이다. 
// - 프로퍼티를 (추가,삭제,수정)이 동적으로 가능하다.(하지만 동적으로 하면 나중에 힘들어질 수 있음. )
// - 자바스크립트에서는 class없이 바로 저 두 가지 방법으로 객체 생성이 가능하다. 

const person = {name : '김지성',age : '25'}; //literal
const obj = new Object(); //constructor

//프로퍼티 추가 수정 삭제
person.height = 175;
person.name = 'jisungKim';
delete person.height; //height property삭제!!

person.weigh = 65;
person.weigh = 70;
delete person.weigh;

// -1) 접근 방법 
// - object.property : 일반적인 속성 접근!!
// - object["property"] : 반드시 문자열 속성으로 해야한다!!!

// -2) 저 두 가지 방법 중 뭘 언제 쓸까???
//  - 만약 객체 변수 안에 name안에 이름이 들어있어!!! 그럼 .으로 접근해도돼!!
//  - 근데 만약 편의점 올 손님을 받는 변수같이 아직 미정인 변수야!! 그럼 ['name']으로 
//
let jisung = {names : 'kim'};
//object와 key를 받아서 상응하는 value를 출력하는 함수!!
function printValue(obj , key){
    console.log(obj[key]);
    // .key는 내가 정말 key라는 이름의 property가 있을 때!!!!!
    //하지만 key는 그냥 변수야.. 실제로는 names야!!
    //즉, 실제 출력 키 변수이름이 아니라면 []라고 적어줘야돼!!!
    //즉 .는 실제로 그 key값을 출력하고싶을 떄!!!!!!!
    // []간접적으로 key라는 걸 알려주기만 하고 다른 변수 이름으로 출력하고싶을 때!!!
}
printValue(jisung,'names');


// -3) 만약 노트북 사람.. 처럼 정말 비슷한 객체들을 많이 생성해야 할 때는 ??????
//  ex) 노트북 사이트에서 노트북 특징, 편의점에서 고객 특징, 등등
//  즉 프로퍼티가 같은 객체를 여러 개 생성하고 싶을 떄!! 객체 찍어내는 기계를 사용하면 좋아.
//  ====> 생성자 함수!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!! 그럼 이거랑 class는 무슨차이?
// 일단 class가 생성자 함수보다 늦게 나왔고 용도가 비슷하다는 것 만 알아두자!!!!!

// function makeObj(name , age){
//     return {
//         this.name : name,
//         this.age : age,
//     }
// }
//이거처럼 그냥 obj를 만들어주는 함수를 하나 만들까??? ===> 더 간단한 방법이 있어!!!

class Person{
    constructor(name,age){
        this.name = name;
        this.age = age;
    }
}
let person1 = new Person('김지성',25);
console.log(person1.name); //이미 그 속성으로 출력을 확정짓고싶을 때 .를 쓴다..!! 
console.log(person1.age);
person1.height = 175; //객체에 key추가!!!! 3개로 맞춰줌!!!
// -4) 객체 연산자!

// - key가 프로퍼티 안에 있는 지 확인!!
console.log('name' in person1); //true;
console.log('jisung' in person1); //false

// -5) (for..in) vs (for..of)
// - for..in : 객체의 key들을 출력해준다!!!, 배열의 index번호도 쓸 수 있다.(배열[index]해서 값을 출력도 가능.)

// %%%%%%%%%%%%%%%%%%%%%% 정리 : for..in은 객체의 모든 프로퍼티랑 배열의 index값을 가져와서 결국 모든 값도 출력이 가능하다!!!!!!!

// ================= << for..in >> =================

// - 배열 객체 둘 다 사용이 가능하다. 
// - 우리가 만드는 객체는 꼴랑 프로퍼티 3개...
// - 근데 100개의 속성이 있다고 쳐봐.. 그럼 한 번에 값을 가져와서 처리해야 할 코드를 짜고싶어!!
const person_ = {
    firstName : '김',
    lastName : '지성',
}
//원래는 접근하려면 .이나 []를 써야함. 하지만 200개 전체를 다 가져와야한다면??? for..in은 프로퍼티를 다 가져온다!
for(let key in person_){
    console.log(person_[key]);
}

let me = [5,6,7,8,9,10];
for(let index in me){
    console.log(me[index]);
}

// ================= << for..of >> =================
// - 배열의 값을 반복해서 출력한다!!! 
let a = [1,2,3,4,5,6]
for(let value of a){
    console.log(`값 >> ${value}`);
}
// for in vs for of
// - in은 변수에 index값을 가져오고 -of는 변수에 배열의 값을 가져온다.
// 하지만 어떤 값을 가져와도 응용을 하면 값도 출력할 수 있고. index값도 출력할 수 있다!!!!!!
//즉 출력값은 상관없이 그냥 어떤 값을 가져오느냐에 차이가 있다!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!

//단점 : for in , for of를 쓰면 무조건 처음부터 끝까지 다 들고와야한다.
// - 하지만 for문을 쓰면 중간에 제어가 가능하다. 몇 개만 픽을해서 들고올 수 있고... 등등...
// - 하지만 중간에 if와 break를 쓰면 빠져나올 수 있음!!!!!!(아래 예제처럼!!!!!!)

let pro = [1,2,3,4,5,6,7];

for(let value of pro){
    //index몇 번 까지 출력해라.. 이건 잘 모르겠어!!
    //값을 잘 다룰 수 있겠는데 index는 아직이야.....
}


// ================= << for-each >> =================
// - 배열에서만 사용된다!!!!
// - 안에 함수를 쓸 수 있음. 

a.forEach(function(){

})
// -6) 객체 메모리 구조!
// - 일단 속성들은 전부다 메모리 상에 붙어서 마치 하나의 덩어리로 있음.
// - 객체는 직접적으로 속성 상자를 가리키는게 아니라.......
// - 속성 상자의 주소값을 담고있는 상자를 직접적으로 가리킴.
// - 정리 : 속성의 주소값을 저장하고 있는 상자(레퍼런스)를 가리킨다.!!!!


// - for..of

//어떤 걸 받아서~~ 라는 문장이 상당히 중요하다.
//obj. vs obj[]
//obj생성 삭제 수정
//(for in) vs (for of)
//객체 메모리 구조!!


