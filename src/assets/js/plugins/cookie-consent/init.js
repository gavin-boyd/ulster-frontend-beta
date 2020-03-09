/*
   Function: ulsterCookieConsent

   This plugin adds a cookie consent in line with EU cookie law

   Parameters:

   Dependency: ../../bower_components/jquery-cookie

   Trello card: https://trello.com/c/6xJSAitJ

   Index: 0.1
*/
jQuery.fn.extend({
    ulsterCookieConsent: function(domain) {
        var consentCookie = jQuery.cookie('uls_cc');
        var cookieHTML = '<div id="uls_cc" role="region" aria-label="cookie banner" class="action-sheet">' +
                           '<div class="grid-container">' +
                             '<div class="grid-x grid-margin-x bordered dark-grey-bg m-b-10 m-small-b-0 p-t-10 p-b-10 shadow">' +
                               '<div class="cell small-9 medium-10 large-10">' +
                                 '<p class="text-white m-b-0">' + domain + ' uses cookies to give users the best experience possible.</p>' +
                                 '<p class="m-b-0"><a href="https://www.ulster.ac.uk/about/cookies" class="bl text-white">Find out more&nbsp;<span class="fas fa-angle-right" aria-hidden="true"></span></a></p>' +
                                '</div>' +
                                '<div class="cell small-3 medium-2 large-2">' +
                                  '<ul class="m-t-10 m-b-0 flt-r m-l-20 m-small-l-0 m-small-t-0">' +
                                    '<li><a href="#" class="bl m-b-0 m-l-20 m-small-l-0 text-white text-right-small" id="uls_cc_close"><span class="fas fa-times-circle m-r-5" aria-hidden="true"></span><span class="hide-for-small-only">&nbsp;Dismiss</span></a></li>' +
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
            jQuery("#uls_cc").remove();
            //debug
            //console.log('cookie n');
        } else {
            jQuery('body').append(cookieHTML);
            //set cookie
            jQuery.cookie.raw = true;
            jQuery.cookie('uls_cc', 'yes', {
                expires: setCookieExpiry,
                path: setCookiePath,
                domain: setCookieDomain
            });
            //debug
            //console.log('cookie y');
        }
        jQuery('#uls_cc_close').click(function(e) {
            e.preventDefault();
            //debug
            //console.log('clicked close');
            jQuery.removeCookie('uls_cc', {
                path: setCookiePath
            });
            jQuery('#uls_cc').remove();
        });
    }
});
