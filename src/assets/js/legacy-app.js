/*
 * Description: created for applying necessary js for header and footer to pages which still use ulster-frontend-alpha
 * Date: 22/2/18
 * Created by: Gavin Boyd
 */
import $ from 'jquery';
import whatInput from 'what-input';
window.$ = $;
import Foundation from 'foundation-sites';
$(document).ready(function() {
  $(document).foundation();
  $('.mega-menu-link').click(function(e) {
    e.preventDefault();
  });
});

/*
 * Run jQuery as jQuery
 */
import jquery from 'jquery';
window.$ = window.jQuery = jquery;

//jquery ui
require('./plugins/funnelback-completion/jquery-ui');

//custom auto completion
require('./plugins/autocomplete/init');
