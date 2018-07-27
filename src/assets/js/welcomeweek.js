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


/*
 * Plugins
 */

//fancybox
require('./plugins/fancybox/dist');
require('./plugins/fancybox/init');

//Courses atoz
require('./plugins/welcomeweek-atoz/init');

//Cookies
require('./plugins/cookie/init');

//welcome week additional plugins
require('./plugins/welcomeweek-search/jquery-ui');
require('./plugins/welcomeweek-search/funnelback-completion');
require('./plugins/welcomeweek-search/funnelback-completion-init');
require('./plugins/welcomeweek-search/init');
require('./plugins/welcomeweek-journey/init');
