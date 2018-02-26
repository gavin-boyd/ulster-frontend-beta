/*
 * Description: created for applying necessary js for header and footer to pages which still use ulster-frontend-alpha
 * Date: 22/2/18
 * Created by: Gavin Boyd
 */

console.log('legacy app js init');
import $ from 'jquery';
import whatInput from 'what-input';
//window.$ = $;
import Foundation from 'foundation-sites';
$(document).ready(function() {
  $(document).foundation();
});
