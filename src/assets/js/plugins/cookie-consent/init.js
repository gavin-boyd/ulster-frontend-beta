/*
   Function: ulsterCookieConsent

   This plugin adds a cookie consent in line with EU cookie law

   Parameters:

   Dependency: ../../bower_components/jquery-cookie

   Trello card: https://trello.com/c/6xJSAitJ

   Index: 0.1
*/
jQuery.fn.extend({
    ulsterCookieConsent: function() {
        var consentCookie = jQuery.cookie('uls_cc');
        var cookieHTML = '<div id="uls_cc"><div><p>Ulster.ac.uk uses cookies to give users the best experience possible.  <a href="https://www.ulster.ac.uk/about/cookies">Find out more about cookies</a></p><a href="#" class="button bl" id="uls_cc_close">Close<a/></div></div>';
        var cookieCSS = '<style>body{padding-bottom:50px;}#uls_cc{position:fixed;bottom:0;width:100%;background:#000;background:rgba(0,0,0,.9);z-index:9999;border-top:5px solid #333;} #uls_cc > div {max-width:1110px;margin:0 auto;padding:10px 0 25px 0;position:relative;} #uls_cc > div p {color:#fff;margin:7px 0 0 0;} #uls_cc > div p a {color:inherit;text-decoration:underline;} #uls_cc > div a#uls_cc_close{position:absolute;right:0; top:10px;} @media (max-width: 1140px) {#uls_cc > div {padding-left:15px;padding-right:15px;}} @media (max-width: 890px) {#uls_cc > div a#uls_cc_close {position:relative;right:auto;top:auto;} #uls_cc > div p {margin-bottom:20px;}}</style>';
        // set the cookie expiry time (days):
        var setCookieExpiry = 30;
        //Live
        var setCookieDomain = 'ulster.ac.uk';
        var setCookiePath = '/';
        //Test
        //var setCookieDomain = 'localhost';
        //var setCookiePath = '/ulster-frontend/public/';
        if (consentCookie) {
            jQuery("#uls_cc").remove();
            //debug
            //console.log('cookie n');
        } else {
            jQuery('head').append(cookieCSS);
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
//init ulsterCookieConsent
jQuery(document).ready(function() {
    jQuery('body').ulsterCookieConsent();
});
