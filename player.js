let player;
      function onYouTubeIframeAPIReady() {
        player = new YT.Player("player__content", {
          height: '390',
          width: '660',
          videoId: 'KH_crCj4Fjo',
          playerVars: {
            'playsinline': 1
          },
          events: {
            // 'onReady': onPlayerReady,
            // 'onStateChange': onPlayerStateChange
          },
          playerVars:{
            controls:0,
            disablekb:0,
            showinfo:0,
            rel:0,
            autoplay:0,
            modestbranding:0,
            widget_referrer:0,
          }
        

        });
      }