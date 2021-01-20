import $ from 'jquery';
import 'what-input';
window.jQuery = $;
/*
 * Run jQuery as jQuery
 */
import jquery from 'jquery';
window.$ = window.jQuery = jquery;
jQuery('head').append('<link rel="stylesheet" type="text/css" href="https://cdn.ulster.ac.uk/home/ulster-frontend/beta/assets/css/site-message.css">');
//cookies
require('./plugins/cookie/init');
//site-message
require('./plugins/site-message/init-site-message');
