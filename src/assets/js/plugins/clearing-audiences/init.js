const setCookieExpiry = 800;
const setCookieDomain = 'ulster.ac.uk';
const setCookiePath = '/';
function setAudienceCookie() {
  if (jQuery('#uls-audience').length > 0 ) {
    var audience = jQuery('#uls-audience').attr('data-audience');
    var cookie = jQuery.cookie('uls_clearing_a');
    var dismissCookie = jQuery.cookie('uls_clearing_d');
    if (cookie) {
      jQuery.removeCookie('uls_clearing_a', {
          path: setCookiePath
      });
    }
    jQuery.cookie.raw = true;
    jQuery.cookie('uls_clearing_a', audience, {
        expires: setCookieExpiry,
        path: setCookiePath,
        domain: setCookieDomain
    });
    if (dismissCookie) {
      jQuery.removeCookie('uls_clearing_d', {
          path: setCookiePath
      });
    }
    jQuery.cookie.raw = true;
    jQuery.cookie('uls_clearing_d', 'y', {
        expires: setCookieExpiry,
        path: setCookiePath,
        domain: setCookieDomain
    });
  }
}
//init
jQuery(document).ready(function() {
  setAudienceCookie();
});
