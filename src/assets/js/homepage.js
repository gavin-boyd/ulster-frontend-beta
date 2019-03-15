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

//megamenu
require('./plugins/megamenu/init');

//jquery ui
require('./plugins/funnelback-completion/jquery-ui');

//custom auto completion
require('./plugins/autocomplete/init');

//funnelback completion
require('./plugins/funnelback-completion/funnelback-completion');
require('./plugins/funnelback-completion/funnelback-completion-init');
