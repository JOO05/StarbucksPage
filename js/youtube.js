// 2. This code loads the IFrame Player API code asynchronously.
var tag = document.createElement('script');

tag.src = "https://www.youtube.com/iframe_api";
var firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

// 3. This function creates an <iframe> (and YouTube player)
//    after the API code downloads.
function onYouTubeIframeAPIReady() {
  new YT.Player('player', {
    videoId: 'An6LvWQuj_8',
    PlayerVars: {/*영상 제어하기 위한 객체 할당*/
      autoplay:true,
      loop:true, /*true인 경우 반복재생할 거 뭔지 알리기*/
      playlist:'An6LvWQuj_8'
    },
    events: {
      onReady: function(event){
        event.target.mute()
      } /*이 이벤트 플레이어가 준비가 되면 함수가 실행되면
      데이터로 설정해놓은 값들을 넘겨줌*/
    }
  });
}