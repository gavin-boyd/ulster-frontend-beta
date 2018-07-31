function welcomeWeekUserActions(user_cookie) {
  //events logic

  //on load hide all reslife and international events
  jQuery('.reslife').each(function() {
    jQuery(this).hide();
  });
  jQuery('.international').each(function() {
    jQuery(this).hide();
  });

  //cookie varsfor user
  var u_cookie = user_cookie;

  //user cookie conditionals (events)
  if (u_cookie) {
    var u_cookie_array = u_cookie.split(',');
    var reslife = u_cookie_array[3];
    var international = u_cookie_array[4];

    //debug
    console.log('Reslife: ' + reslife);
    console.log('International: ' + international);

    if (reslife == 1) {
      //debug
      console.log('show reslife events');

      jQuery('.reslife').each(function() {
        jQuery(this).show();
      });
    }

    if (reslife == 1) {
      //debug
      console.log('hide for reslife');

      jQuery('.reslife').each(function() {
        jQuery(this).show();
      });

      jQuery('.reslife-hidden').each(function() {
        jQuery(this).hide();
      });
    }

    if (international == 1) {
      //debug
      console.log('show international events');

      jQuery('.international').each(function() {
        jQuery(this).show();
      });

      jQuery('.international-hidden').each(function() {
        jQuery(this).hide();
      });
    }
  }
}

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
  var setCookieDomain = 'ulster.ac.uk';
  var setCookiePath = '/';
  //Test
  //var setCookieDomain = 'localhost';
  //var setCookiePath = '';
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
  var setCookieDomain = 'ulster.ac.uk';
  var setCookiePath = '/';
  //Test
  //var setCookieDomain = 'localhost';
  //var setCookiePath = '';
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
      jQuery.getJSON('https://www.ulster.ac.uk/welcomeweek/_web_services/user', function(result) {
        var user = result.filter(function(item) {
          return item.id == id;
        });
        user.forEach(function(key, value) {
          var id = key.id;
          var fname = key.fname;
          var sname = key.sname;
          var reslife = key.reslife;
          var international = key.international;
          if (jQuery.cookie('uls_welcome_week_u')) {
            welcomeWeekUserActions(jQuery.cookie('uls_welcome_week_u'));
          } else {
            welcomeWeekUserActions([id, fname, sname, reslife, international]);
          }
        });
      });
      //set course cookie
      if (jQuery('#course-id').length > 0) {
        var courseUrl = jQuery('#course-id').data('url');
        welcomeWeekCourseCookie(courseUrl);
      }
    }
  })();

});
