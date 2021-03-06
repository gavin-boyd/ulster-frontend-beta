/*
   Function: ulsterCookieConsent

   This plugin adds a cookie consent in line with EU cookie law

   Parameters:

   Dependency: ../../bower_components/jquery-cookie

   Trello card: https://trello.com/c/6xJSAitJ

   Index: 0.1
*/
function ulsterCookieConsentInit () {
  jQuery.fn.extend({
      ulsterCookieConsent: function(domain) {
          var consentCookie = jQuery.cookie('mhl_cc');
          var cookieHTML = '<div id="mhl_cc" role="region" aria-label="cookie banner" class="action-sheet opacity-effect">' +
                             '<div class="grid-container">' +
                               '<div class="grid-x grid-margin-x dark-grey-bg m-b-10 m-small-b-0 p-t-10 p-b-10 shadow">' +
                                 '<div class="cell small-11 medium-10 large-10 position-relative">' +
                                   '<p class="text-white m-b-0 flt-small-l vertical-align">' + domain + ' uses cookies to give users the best experience possible.  <a href="#" class="bl text-white">Find out more<span class="show-for-sr"> about our use of cookies</span></a></p>' +
                                  '</div>' +
                                  '<div class="cell small-1 medium-2 large-2">' +
                                    '<ul class="m-b-0 flt-r m-l-20 m-small-l-0 m-small-t-0">' +
                                      '<li class="text-right"><a href="#" class="button small hollow white expanded flt-r" id="mhl_cc_close"><span class="fas fa-times-circle" aria-hidden="true"></span><span class="hide-for-small-only">&nbsp;Dismiss</span></a></li>' +
                                    '</ul>' +
                                  '</div>' +
                               '</div>' +
                             '</div>' +
                           '</div>';
          // set the cookie expiry time (days):
          var setCookieExpiry = 30;
          //Live
          var setCookieDomain = domain;
          var setCookiePath = '/';
          //Test
          //var setCookieDomain = 'localhost';
          //var setCookiePath = '/ulster-frontend/public/';
          if (consentCookie) {
              jQuery("#mhl_cc").remove();
              //debug
              //console.log('cookie n');
          } else {
              jQuery('body').append(cookieHTML);
              //set cookie
              jQuery.cookie.raw = true;
              jQuery.cookie('mhl_cc', 'yes', {
                  expires: setCookieExpiry,
                  path: setCookiePath,
                  domain: setCookieDomain
              });
              //debug
              //console.log('cookie y');
          }
          jQuery('#mhl_cc_close').click(function(e) {
              e.preventDefault();
              //debug
              //console.log('clicked close');
              jQuery.removeCookie('mhl_cc', {
                  path: setCookiePath
              });
              jQuery('#mhl_cc').remove();
          });
      }
  });
  jQuery(document).ready(function() {
      jQuery('body').ulsterCookieConsent('ulster.ac.uk');
  });
}
export {ulsterCookieConsentInit};
