/*
 * Science Shop Site
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

//funnelback completion
require('./plugins/funnelback-completion/jquery-ui');
require('./plugins/funnelback-completion/funnelback-completion');
require('./plugins/funnelback-completion/funnelback-completion-init');

//mobile side nav
require('./plugins/mobilesidenav/init');

//fancybox
require('./plugins/fancybox/dist');
require('./plugins/fancybox/init');

//Cookies
require('./plugins/cookie/init');

//ss specific
require('./plugins/ss-favourites/init');
