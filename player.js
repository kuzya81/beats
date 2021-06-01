let player;
const playerContainer = $('.player');

let eventsInit =() =>{
  $(".player__start").click(e=>{
    e.preventDefault;

    const btn = $(e.currentTarget);

    if (playerContainer.hasClass('paused')){
      playerContainer.removeClass("paused");
      player.pauseVideo();
    } else {
      playerContainer.addClass("paused");
      player.playVideo();
    };

    $(".player__playback").click(e=>{
      const bar =$(e.currentTarget);
      const clickedPosition = e.originalEvent.layerX;
      const newButtonPositionPercent = (clickedPosition/bar.width())*100;
      const newPlaybackPosition = (player.getDuration()/100)*newButtonPositionPercent;
      
      $(".player__playback-button").css({
        left: `${newButtonPositionPercent}%`
      });

      player.seekTo(newPlaybackPosition);
    });

  });

};
const formatTime = timeSec =>{
  const roundTime = Math.round(timeSec);

  const minutes = addZero(Math.floor(roundTime/60));
  const seconds =  addZero(roundTime - minutes * 60);

  function addZero(num) {
    return num <10 ? `0${num}` : num;
  }

  return `${minutes} : ${seconds}`;
}

const onPlayerReady = () =>{
  let interval;
  const durationSec = player.getDuration();

  $(".player__duration-estimate").text(formatTime(durationSec));

  if (typeof interval === 'undefined'){
    clearInterval(interval);
  }
  interval = setInterval(() =>{
    const completedSec = player.getCurrentTime();
    const completedPercent = (completedSec/durationSec)*100;

    $(".player__playback-button").css({
      left: `${completedPercent}%`
    });
    $(".player__playback-completed").css({
      width: `${completedPercent}%`
    });
  

    $('.player__duration-completed').text(formatTime(completedSec))
  },1000);
};

      function onYouTubeIframeAPIReady() {
        player = new YT.Player("player__content", {
          height: '390',
          width: '660',
          videoId: 'KH_crCj4Fjo',
          events: {
            onReady: onPlayerReady,
            // 'onStateChange': onPlayerStateChange
          },
          playerVars: {
            controls:0,
            disablekb:0,
            showinfo:0,
            rel:0,
            autoplay:0,
            modestbranding:0,
          }
        

        });
      }

      eventsInit();