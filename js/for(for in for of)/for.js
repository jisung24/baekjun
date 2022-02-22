'use strict';

/**
 * 프로그래밍 공부
 * 
 * -1) 기초문법 공부 : 이걸 가지고 있어야 내가 기초문법을 활용해서 뭘 만들 수 있다. 
 */


// Object
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