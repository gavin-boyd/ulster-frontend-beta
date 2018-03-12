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
