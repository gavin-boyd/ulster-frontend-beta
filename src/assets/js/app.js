import $ from 'jquery';
import whatInput from 'what-input';

window.$ = $;

import Foundation from 'foundation-sites';
// If you want to pick and choose which modules to include, comment out the above and uncomment
// the line below
//import './lib/foundation-explicit-pieces';


//import Video from './video';

$(document).ready(function() {
  $(document).foundation();
  $('.mega-menu-link').click(function(e) {
    e.preventDefault();
  });
});

import jquery from 'jquery';
window.$ = window.jQuery = jquery;
require('./fancybox');
jQuery('[data-fancybox]').fancybox({
	iframe : {
		preload : false
	}
});

/*
  Youtube - https://www.youtube.com/iframe_api
*/

function script(url) {
    var s = document.createElement('script');
    s.type = 'text/javascript';
    s.async = false;
    s.src = url;
    var x = document.getElementsByTagName('head')[0];
    x.appendChild(s);
}
script('//www.youtube.com/iframe_api');

//sticky video
jQuery(document).ready(function() {
  if (jQuery('#featured-media').length > 0) {
    var thewindow = jQuery(window); // 1. Window Object.
    var featuredMedia = jQuery("#featured-media"); // 1. The Video Container.
    var featuredVideo = jQuery("#featured-video"); // 2. The Youtube Video.

    var player; // 3. Youtube player object.
    var top = featuredMedia.offset().top; // 4. The video position from the top of the document;
    var offset = Math.floor(top + (featuredMedia.outerHeight() / 2)); //5. offset.

    window.onYouTubeIframeAPIReady = function() {
      player = new YT.Player("featured-video", {
         events: {
           "onStateChange": onPlayerStateChange
         }
      });
    };

    /**
     * Run when the Youtube video state (play, pause, etc.) is changed.
     *
     * @param {Object} event The Youtube Object Event.
     * @return {Void}
     */
    function onPlayerStateChange( event ) {
       var isPlay  = 1 === event.data;
       var isPause = 2 === event.data;
       var isEnd   = 0 === event.data;
       if (isPlay) {
          featuredVideo.removeClass("is-paused");
          featuredVideo.toggleClass("is-playing");
       }
       if (isPause) {
          featuredVideo.removeClass("is-playing");
          featuredVideo.toggleClass("is-paused");
       }
       if (isEnd) {
          featuredVideo.removeClass("is-playing", "is-paused");
       }
    }

    thewindow.on("resize", function() {
       top = featuredMedia.offset().top;
       offset = Math.floor(top + ( featuredMedia.outerHeight() / 2 ) );
    }).on("scroll", function() {
       featuredVideo.toggleClass("is-sticky", thewindow.scrollTop() > offset);
       jQuery('#close-featured-video').toggleClass("show", thewindow.scrollTop() > offset);
    });

    jQuery('#close-featured-video').click(function(e) {
      e.preventDefault();
      jQuery('#featured-video').addClass('is-not-sticky');
      //jQuery('#featured-video').addClass('hide');
      jQuery(this).addClass('hide');
      player.stopVideo();
    });
  }
});
