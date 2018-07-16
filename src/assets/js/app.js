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
require('./api/youtube/init');
require('./api/clickforassistance/init');

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

//Courses atoz
require('./plugins/courses-atoz/init');

//Regions map
require('./plugins/regions-map/init');

//jQuery Background Video
require('./plugins/jquery-background-video/init');

//
require('./plugins/cookie/init');
require('./plugins/ww/init-min');
