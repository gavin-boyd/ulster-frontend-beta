jQuery(document).ready(function() {
  jQuery(document).ready(function () {
    if(window.location.href.indexOf("welcomeweek") > -1) {
      var setCookieExpiry = 800;
      var setCookieDomain = 'ulster.ac.uk';
      var setCookiePath = '/';
      var cookies = jQuery.cookie();
      for(var cookie in cookies) {
        jQuery.removeCookie(cookie, {
            path: setCookiePath,
            domain: setCookieDomain
        });
      }
      jQuery('.pagination a').click(function() {
        for(var cookie in cookies) {
          jQuery.removeCookie(cookie, {
              path: setCookiePath,
              domain: setCookieDomain
          });
        }
      });
    }
  });
});
