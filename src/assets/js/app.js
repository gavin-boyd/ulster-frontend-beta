/*
 * Foundation includes and Init
 */
import $ from 'jquery';
import whatInput from 'what-input';
window.$ = $;
import Foundation from 'foundation-sites';
// If you want to pick and choose which modules to include, comment out the above and uncomment
// the line below
//import './lib/foundation-explicit-pieces';
$(document).ready(function() {
  $(document).foundation();
});

/*
 * Run jQuery as jQuery
 */
import jquery from 'jquery';
window.$ = window.jQuery = jquery;

/*
 * APIs
 */
function script(url) {
  var s = document.createElement('script');
  s.type = 'text/javascript';
  s.async = false;
  s.src = url;
  var x = document.getElementsByTagName('head')[0];
  x.appendChild(s);
}

//YouTube
script('//www.youtube.com/iframe_api');

//Click4Assistance
script('//www.youtube.com/iframe_api');

/*
 * Plugins
 */

//fancybox
require('./plugins/fancybox/dist');
require('./plugins/fancybox/init');

//sticky video
require('./plugins/stickyvideo/init');

//megamenu
require('./plugins/megamenu/init');

//Click4Assistance
require('./plugins/click4assistance/init');
