/**
 * ============ << 자료구조 >> ============
 * 비슷한 데이터들을 한 바구니에 담는 방식!!
 * 
 * 어떤 방식으로 어떤 형식으로 데이터를 담느냐에 따라서 많은 형식이 있다.
 * 
 * object vs 자료구조!
 * 
 * 자료구조 : 그냥 값만 들어갈 수 있다.
 * object : 특징과 함수까지 있음!!!!!!!
 * 
 * (검색 삽입 정렬 삭제)를 어떤 알고리즘을 사용해서 자료구조에 적용할 지를 공부하는 것이다.!!
 */
//for문 block은 한 번의 단위라고 생각을 하자!!!!!!

const arr = ["김지성0","김지성1","김지성2","김지성3"];
let empty = "";
// ============================= << (array = 문자열) part1 >> =============================

// 1. array 출력
//for of , forEach문! for문!

// a. for
for(let i = 0; i<arr.length; i++){
    empty+=(arr[i] + " "); //이러면 마지막까지 공백문자가 출력이 되긴 해!
}
console.log(empty);

// b. for of
for(myName of arr){
    console.log(myName);
}

// c. forEach : 배열안에 있는 원소들마다 내가 arrow function으로 
//지정햇던 것을 행동한다!!!!

arr.forEach((myName,index)=>{
    console.log("==========");
    console.log(myName,index);
    //이름이 없는 함수는 arrow function을 사용할 수 있다.
});

const arr2 = [1,2,3];

//2. addition, deletion, copy
//push() : 맨 뒤에 값을 삽입한다!
//unshift() : 맨 앞에 값을 삽입한다!

//pop() : 맨 뒤에있는 값을 뺀다! 그리고 그 뺀 값을 return시킨다.
//shift() : 앞에서부터 데이터가 빠진다! <==> unshift()
arr2.unshift(0);
console.log(arr2);
// ========== 중요한 점 ==========
/**
 * unshift, shift are slower than push,pop....
 * 가장 뒤에서 추가하고 삭제하는 건.. 그냥 그 앞에 있는 원소들을 움직이게 하지않고
 * 가능하다.
 * 
 * 하지만 맨 앞에다가 데이터를 넣으려면 2~length-1원소까지 전부 오른쪽으로 한 칸
 * 이동시켜야한다..!!!
 * 삭제도 마찬가지 첫 번째 원소를 삭제하고나면 2 - arr.length-1의 원소까지 전부 
 * 왼쪽으로 이동해서 삭제된 값의 공간을 채워줘야한다!!
 * 
 * 결론 : shift와 unshift를 사용은 하되 pop push를 더 사용하자!!!!!!!
 * 되도록이면 사용하지마... 알고리즘 들어가면 상당히 비효율적이다.
 */
//3. 원하는 위치의 index의 원소를 삭제하고 넣기! ==> splice()
//splice(삭제시작index, 삭제 끝 index, 그 자리에 넣어 줄 원소)
const numbers = [1,2,3,4,5,6];
// numbers.splice(1); //index 1번부터 쭉 삭제하겠다!!
numbers.splice(1,3,numbers[3]); // index 1번부터 3번까지 삭제하겠다!!
console.log(numbers);
//splice정리 : 원하는 자리의 원소를 삭제할 수 있고, 그 자리에다가 다른 값을 넣을 수 있다.

//4. concat : 배열 원소 붙이기!!!
const first = "제 이름은 김지성";
const second = "이고";
console.log(first.concat(second));
console.log(first[0]);

console.clear();

//6. 이건 indexOf 5번이랑 쓰면 좋아!! includes는 해당 원소가 배열안에 있는지!
//포함 돼 있으면 true, 없으면 false를 반환한다.

//5. 배열안에 있는 첫 번째 원소의 index번호를 리턴해주는 함수
//indexOf(); 만약 같은 원소가 있다면 맨 앞에 index를 기준으로 출력해줌!
//laseIndexOf()
console.log(first.indexOf("성"));
console.log(first.lastIndexOf("성"));
//와 만약 indexOf랑 lastIndexOf의 값이 같다면 그건 한 개만 있는거임.!!
console.log(first.includes("3"));
//====================== 여기까지 기본적인 api ======================
//====================== 지금부턴 조금 심화적이지만 되게 좋은 api ======================

u
