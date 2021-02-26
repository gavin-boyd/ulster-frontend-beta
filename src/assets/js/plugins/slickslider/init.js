function ulsSliderInit() {
  jQuery(document).ready(function() {
    jQuery('.uls-slick').each(function() {
      jQuery(this).slick({
        infinite: false,
      	//swipeToSlide: true,
        prevArrow: jQuery('#' + jQuery(this).data('controls-id') + ' .uls-prev'),
        nextArrow: jQuery('#' + jQuery(this).data('controls-id') + ' .uls-next'),
        responsive: [
          {
            breakpoint: 768,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 1
            }
          },
          {
            breakpoint: 540,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
        ]
      });
      var status = jQuery('#' + jQuery(this).data('controls-id') + ' .uls-paging-info');
      jQuery(this).on('init reInit afterChange', function(event, slick, currentSlide, nextSlide){
          //currentSlide is undefined on init -- set it to 0 in this case (currentSlide is 0 based)
          var i = (currentSlide ? currentSlide : 0) + 1;
          status.text(i + '/' + slick.slideCount);
      });
    });
  });

  //v2 with flexible position of controls
  //used on applicant days
  jQuery(document).ready(function() {
    jQuery('.uls-slicktwo').each(function() {
      jQuery(this).slick({
        infinite: false,
      	//swipeToSlide: true,
        prevArrow: jQuery('.' + jQuery(this).data('controls-id') + ' .uls-prev'),
        nextArrow: jQuery('.' + jQuery(this).data('controls-id') + ' .uls-next'),
        responsive: [
          {
            breakpoint: 768,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 1
            }
          },
          {
            breakpoint: 540,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
        ]
      });
      var status = jQuery('#' + jQuery(this).data('controls-id') + ' .uls-paging-info');
      jQuery(this).on('init reInit afterChange', function(event, slick, currentSlide, nextSlide){
          //currentSlide is undefined on init -- set it to 0 in this case (currentSlide is 0 based)
          var i = (currentSlide ? currentSlide : 0) + 1;
          status.text(i + '/' + slick.slideCount);
      });
    });
  });
}

function ulsVideoSliderInit() {
  var slideWrapper = $(".main-slider"),
      iframes = slideWrapper.find('.embed-player'),
      lazyImages = slideWrapper.find('.slide-image'),
      lazyCounter = 0;

  // POST commands to YouTube or Vimeo API
  function postMessageToPlayer(player, command){
    if (player == null || command == null) return;
    player.contentWindow.postMessage(JSON.stringify(command), "*");
  }

  // When the slide is changing
  function playPauseVideo(slick, control){
    var currentSlide, slideType, startTime, player, video;

    currentSlide = slick.find(".slick-current");
    slideType = currentSlide.attr("class").split(" ")[1];
    player = currentSlide.find("iframe").get(0);
    startTime = currentSlide.data("video-start");

    if (slideType === "vimeo") {
      switch (control) {
        case "play":
          if ((startTime != null && startTime > 0 ) && !currentSlide.hasClass('started')) {
            currentSlide.addClass('started');
            postMessageToPlayer(player, {
              "method": "setCurrentTime",
              "value" : startTime
            });
          }
          postMessageToPlayer(player, {
            "method": "play",
            "value" : 1
          });
          break;
        case "pause":
          postMessageToPlayer(player, {
            "method": "pause",
            "value": 1
          });
          break;
      }
    } else if (slideType === "youtube") {
      switch (control) {
        case "play":
          postMessageToPlayer(player, {
            "event": "command",
            "func": "mute"
          });
          postMessageToPlayer(player, {
            "event": "command",
            "func": "playVideo"
          });
          break;
        case "pause":
          postMessageToPlayer(player, {
            "event": "command",
            "func": "pauseVideo"
          });
          break;
      }
    } else if (slideType === "video") {
      video = currentSlide.children("video").get(0);
      if (video != null) {
        if (control === "play"){
          video.play();
        } else {
          video.pause();
        }
      }
    }
  }

  // Resize player
  function resizePlayer(iframes, ratio) {
    if (!iframes[0]) return;
    var win = $(".main-slider"),
        width = win.width(),
        playerWidth,
        height = win.height(),
        playerHeight,
        ratio = ratio || 16/9;

    iframes.each(function(){
      var current = $(this);
      if (width / ratio < height) {
        playerWidth = Math.ceil(height * ratio);
        current.width(playerWidth).height(height).css({
          left: (width - playerWidth) / 2,
           top: 0
          });
      } else {
        playerHeight = Math.ceil(width / ratio);
        current.width(width).height(playerHeight).css({
          left: 0,
          top: (height - playerHeight) / 2
        });
      }
    });
  }

  if (jQuery('.uls-video-slider').length > -1) {
    // video slider https://codepen.io/digistate/pen/MvapbEhttps://codepen.io/digistate/pen/MvapbE
    $(function() {
      // Initialize
      slideWrapper.on("init", function(slick){
        slick = $(slick.currentTarget);
        setTimeout(function(){
          playPauseVideo(slick,"play");
        }, 1000);
        resizePlayer(iframes, 16/9);
      });
      slideWrapper.on("beforeChange", function(event, slick) {
        slick = $(slick.$slider);
        playPauseVideo(slick,"pause");
      });
      slideWrapper.on("afterChange", function(event, slick) {
        slick = $(slick.$slider);
        playPauseVideo(slick,"play");
      });
      slideWrapper.on("lazyLoaded", function(event, slick, image, imageSource) {
        lazyCounter++;
        if (lazyCounter === lazyImages.length){
          lazyImages.addClass('show');
          // slideWrapper.slick("slickPlay");
        }
      });

      //start the slider
      slideWrapper.slick({
        // fade:true,
        autoplaySpeed:4000,
        lazyLoad:"progressive",
        speed:600,
        arrows:false,
        dots:true,
        cssEase:"cubic-bezier(0.87, 0.03, 0.41, 0.9)"
      });
    });

    // Resize event
    $(window).on("resize.slickVideoPlayer", function(){
      resizePlayer(iframes, 16/9);
    });
  }
}
export {ulsSliderInit, ulsVideoSliderInit};
