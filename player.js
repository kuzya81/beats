let player;
      function onYouTubeIframeAPIReady() {
        player = new YT.Player("player__content", {
          height: '390',
          width: '660',
          videoId: 'M7lc1UVf-VE',
          playerVars: {
            'playsinline': 1
          },
          events: {
            'onReady': onPlayerReady,
            'onStateChange': onPlayerStateChange
          }
        });
      }