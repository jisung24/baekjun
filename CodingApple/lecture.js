/**
 * - what is javaScript
 * << 프론트앤드 단에서의 js의 역할 >>
 * html : menu라는 버튼
 * css : menu버튼을 꾸미고 위치를 레이아웃 해준다.
 * js : menu를 눌렀을 때 웹이 어떤 동작을 하게해준다!!
 * ex) 화면이 드래그 되고, 뭐가 변하고 어떤 이벤트와 동작!!!
 * 
 * 즉 이벤트와 동작 ==> html을 조작한다!!!!
 * 
 * 1강 : 자바스크립트의 목적과 selector!
 * - html의 조작과 변경!!!!!! ==> html태그에 이벤트와 동작을 부여한다.
 * 
 * js는 이벤트가 일어나지 않아도 html코드를 조작할 수 있고,
 * 그냥 html요소가 있으면 js로 변경 삭제 생성이 가능하다.
 * event가 일어나면(클릭) html요소에게 동작을 부여해주는 역할!
 * event종류가 많으니까 그냥 내가 web page에다가 뭔 짓을 하면~~~ 싹 다!!!!!
 * 내가 뭔 짓을 해주면 뭔가 계속 변하지???? 그게 js야!!
 */
//document.querySelector("")."" = ""; //바꿀 수 있는 게 너~~~무 많음.
//구글링 해봐야한다 css transition이나 3d 등등 margin padding전부 다 바꿀 수 있음.
const me = document.querySelector(".me");
const button = document.querySelector(".alert");
const alert_box = document.querySelector(".alert_box");
const font = alert_box.innerHTML;
me.style.fontSize = "3rem"; //html요소의 font-size를 변경해줌! css역할도 js가 할 수 있음.

button.addEventListener("click",()=>{
    alert_box.style.display = "block";
    font.innerHTML = "500px";
    document.querySelector(".alert").innerHTML = "alert문장 변경.";
});

const span = document.querySelector("span"); //x버튼
span.addEventListener("click",()=>{
    alert_box.style.display="none";
})