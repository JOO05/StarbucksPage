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
const toTopEl=document.querySelector('#to-top');
window.addEventListener('scroll', _.throttle(function () {
console.log(window.scrollY); /*스크롤 할 때마다 y값 갱신*/
if (window.scrollY > 500){
//배지 숨기기 gsap.to(요소, 지속시간, 옵션);
gsap.to(badgeel, .6, {
opacity:0,
display:'none' //디스플레이 투명도 설정만 말고 실제로 사라지게 하기
}); //상위로 올라가는 버튼 보이기
gsap.to(toTopEl,.2,{
  x:0
});

}
else {
//배지 보여주기
gsap.to(badgeel, .6, {
  opacity:1,
  display:'block'
  });
  //상위로 올라가는 버튼 숨기기
  gsap.to(toTopEl,.2,{
    x:100
  });
}
},300));
/*documnent가 html 자체라면 window는 하나의 팩을 의미=화면자체
화면을 스크롤할 때 실행되는 함수의 수가 많음, 사이트 내용 많아질 수록 화면이 
버벅임 수십게 함수가 동시실행되므로, 외부에서 가져올 수 있는 자바스크립트
라이브러리를 통해서 제어할 수 있음 throttle사용해서, 300은 0.3초 단위로 부하를 줘서
함수가 과도히 실행 방지 : _.throttle(함수,시간)
gsap함수는 애니메이션 만들 수 있는 함수로 따로 스크립트 가져와야함*/


toTopEl,addEventListener('click', function(){
gsap.to(window, .7,{
  scrollTo:0
});
});
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

new Swiper('.notice-line .swiper',{
  direction: 'vertical',autoplay:true, loop:true
});
/*자바 문법으로 swiper라는 함수 실행*/

new Swiper('.promotion .swiper-container',{
  direction: 'horizontal', /*기본값*/
  slidesPerView:3, /*한 번에 보여줄 슬라이드 개수*/
  spaceBetween:10, /*슬라이드 사이 여백*/
  centeredSlides:true, /*1번 슬라이드 가운데 보이기*/ loop:true,
  autoplay:{delay: 5000 /*5초씩 자동 슬라이드*/},
  pagination:{
    el: '.promotion .swiper-pagination',
    /*프로모션 내 페이지에서 맞는 요소 사용할 수 있도록 페이지 번호 요소 선택자*/
    clickable:true
  },
  navigation:{
    prevEl:'.promotion .swiper-prev',nextEl:'.promotion .swiper-next'
    /*선택자 찾아서 이전 슬라이드, 다음 슬라이드 볼 수 있는 기능 제공*/
  }
});

new Swiper('.awards .swiper',{
  autoplay:true, loop:true, spaceBetween:30, slidesPerView:5,
  navigation:{
    prevEl:'.awards .swiper-prev',nextEl:'.awards .swiper-next'
  }
});

const promotionEl= document.querySelector('.promotion');
const promotionToggleBtn=document.querySelector('.toggle-promotion');
let isHidePromotion=false; /*프로모션 부분이 숨겨져있나?*/
promotionToggleBtn.addEventListener('click', function(){
isHidePromotion=!isHidePromotion /*클릭하면 변수값 반대로 바꿔줌*/
if (isHidePromotion){/*숨김 처리하기*/
promotionEl.classList.add('hide'); /*hide 있으면 안보이게*/
} else{/*보이기*/
promotionEl.classList.remove('hide'); 
}
});

function random(min, max) {
  // `.toFixed()`를 통해 반환된 문자 데이터를,
  // `parseFloat()`을 통해 소수점을 가지는 숫자 데이터로 변환
  return parseFloat((Math.random() * (max - min) + min).toFixed(2))
}
function floatingObject(selector,delay,size) {
/*gsap.to(요소,시간,옵션)*/
gsap.to(selector,random(1.5,2.5),{
y:size,repeat:-1,yoyo:true,ease: Power1.easeInOut,
delay:random(0,delay)
});
}
floatingObject('.floating1',1,15);
floatingObject('.floating2',.5,15);
floatingObject('.floating3',1.5,20);

const spyEls=document.querySelectorAll('section.scroll-spy');
spyEls.forEach(function(spyEl){
new ScrollMagic
  .Scene({
    triggerElement: spyEl, /*보여짐 여부 감시할 요소 지정*/
    triggerHook: .8, /*어느 지점에서 감시되었나 판단*/
  })
  .setClassToggle(spyEl,'show')
  .addTo(new ScrollMagic.Controller()); 
/*특정 요소 감시 / 클래스 넣었다 뺐다 제어 / 컨트롤*/
});

const thisYear = document.querySelector('.this-year');
thisYear.textContent=new Date().getFullYear();