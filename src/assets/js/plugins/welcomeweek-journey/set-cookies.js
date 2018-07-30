function getParam(param) {
  var pageURL = window.location.search.substring(1);
  var urlParams = pageURL.split('&');
  for (var i = 0; i < urlParams.length; i++) {
      var paramName = urlParams[i].split('=');
      if (paramName[0] == param)
      {
          return paramName[1];
      }
  }
}

function welcomeWeekPersonCookie(personid, fname, sname, reslife, international) {
  var cookie = jQuery.cookie('uls_welcome_week_u');
  var setCookieExpiry = 800;
  //Live
  //var setCookieDomain = 'ulster.ac.uk';
  //var setCookiePath = '/';
  //Test
  var setCookieDomain = 'localhost';
  var setCookiePath = '';
  if (cookie) {
    //update cookie
    jQuery.removeCookie('uls_welcome_week_u', {
        path: setCookiePath
    });
  }
  jQuery.cookie.raw = true;
  jQuery.cookie('uls_welcome_week_u', [personid, fname, sname, reslife, international], {
      expires: setCookieExpiry,
      path: setCookiePath,
      domain: setCookieDomain
  });
}

function welcomeWeekCourseCookie(url) {
  var cookie = jQuery.cookie('uls_welcome_week_c');
  var setCookieExpiry = 800;
  //Live
  //var setCookieDomain = 'ulster.ac.uk';
  //var setCookiePath = '/';
  //Test
  var setCookieDomain = 'localhost';
  var setCookiePath = '';
  if (cookie) {
    //update cookie
    jQuery.removeCookie('uls_welcome_week_c', {
        path: setCookiePath
    });
  }
  jQuery.cookie.raw = true;
  jQuery.cookie('uls_welcome_week_c', url, {
      expires: setCookieExpiry,
      path: setCookiePath,
      domain: setCookieDomain
  });
}

jQuery(document).ready(function() {

  (function() {
    /*
     * global var's
     */
    var id = getParam('u');

    //set cookies
    if (id !== null || id !== '') {
      //set user cookie
      jQuery.getJSON('http://dct.ulster.ac.uk/welcomeweek/feeds/test.json', function(result) {
        var user = result.filter(function(item) {
          return item.id == id;
        });
        user.forEach(function(key, value) {
          var id = key.id;
          var fname = key.fname;
          var sname = key.sname;
          var reslife = key.reslife;
          var international = key.international;
          welcomeWeekPersonCookie(id, fname, sname, reslife, international);
        });
      });
      //set course cookie
      if (jQuery('#course-id').length !== -1) {
        var courseUrl = jQuery('#course-id').data('url');
        welcomeWeekCourseCookie(courseUrl);
      }
    }
  })();

});
