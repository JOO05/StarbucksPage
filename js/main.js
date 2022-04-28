const searchel = document.querySelector('.search');
const searchinputel = searchel.querySelector('input');
/*2번째를 .search input이라고 할 수 있지만 효율성 위해서
document자리에 처음 정의한 변수 명을 넣는다 document는 html*/
searchel.addEventListener('click',function(){
  searchinputel.focus();
}); /*search라는 요소 클릭 시 input요소 포커스*/

searchinputel.addEventListener('focus',function(){
  searchel.classList.add('focused');
  /*input 요소에 포커스되면 특정 요소의 클래스 정보를 
가지고 있는 객체(검색)에서 클래스 정보를 추가하겠다.*/
searchinputel.setAttribute('placeholder','통합검색');
/*searchinput 요소에다가 html 속성 지정할 때
순서대로 속성이름, 속성값*/
}) /*검색창 클릭하면 통합검색이라고 써진 칸 나옴 */

searchinputel.addEventListener('blur',function(){
  searchel.classList.remove('focused');
  /*focus의 반대 blur가 되면 집중 된 걸 없앤다*/
searchinputel.setAttribute('placeholder','');
/*빈칸으로 놔둔다*/
}) /*클릭한 거 놓으면 원래대로 돌아가고 통합검색도 없어짐*/

/*일정 거리 이동하면 뱃지 사라지게 하기*/
const badgeel = document.querySelector('header .badges');
window.addEventListener('scroll', _.throttle(function () {
console.log(window.scrollY); /*스크롤 할 때마다 y값 갱신*/
if (window.scrollY > 500){
//배지 숨기기 gsap.to(요소, 지속시간, 옵션);
gsap.to(badgeel, .6, {
opacity:0,
display:'none' //디스플레이 투명도 설정만 말고 실제로 사라지게 하기
});
}
else {
//배지 보여주기
gsap.to(badgeel, .6, {
  opacity:1,
  display:'block'
  });
}
},300));
/*documnent가 html 자체라면 window는 하나의 팩을 의미=화면자체
화면을 스크롤할 때 실행되는 함수의 수가 많음, 사이트 내용 많아질 수록 화면이 
버벅임 수십게 함수가 동시실행되므로, 외부에서 가져올 수 있는 자바스크립트
라이브러리를 통해서 제어할 수 있음 throttle사용해서, 300은 0.3초 단위로 부하를 줘서
함수가 과도히 실행 방지 : _.throttle(함수,시간)
gsap함수는 애니메이션 만들 수 있는 함수로 따로 스크립트 가져와야함*/

const fadeels=document.querySelectorAll('.visual .fade-in');
fadeels.forEach(function(fadeel, index){
  gsap.to(fadeel,1,{
    delay: (index+1)* .7,
    /*fade-in이라는 인수 4개를 만들었고 처음 반복할 때 index 값은 0*/
    /*첫번째는 0.7초, 두번째는 1.4초 후에 실행되는 형태*/
    opacity:1
  });
}); 
/*인수 갯수만큼 실행됨*/

new Swiper('.notice-line .swiper-container',{
  direction: 'vertical',autoplay:true, loop:true
});
/*자바 문법으로 swiper라는 함수 실행*/