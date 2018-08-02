const ww_setCookieExpiry = 800;
//Live
////const ww_setCookieDomain = 'ulster.ac.uk';
////const ww_setCookiePath = '/';
////const ww_api = 'https://www.ulster.ac.uk/welcomeweek/_web_services/user';
//Test
const ww_setCookieDomain = 'localhost';
const ww_setCookiePath = '';
const ww_api = 'http://dct.ulster.ac.uk/welcomeweek/feeds/test.json';

function welcomeWeekUserActions(user_cookie) {
  //events logic

  //debug
  jQuery('#debug-user h1 span').text(jQuery.cookie('uls_welcome_week_u'));
  jQuery('#debug-course h1 span').text(jQuery.cookie('uls_welcome_week_c'));

  //cookie varsfor user
  var u_cookie = user_cookie;

  //user cookie conditionals (events)
  if (u_cookie) {
    //var u_cookie_array = u_cookie.split(',');
    var u_cookie_array = u_cookie;
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
  if (cookie) {
    //update cookie
    jQuery.removeCookie('uls_welcome_week_u', {
        path: ww_setCookiePath
    });
  }
  jQuery.cookie.raw = true;
  jQuery.cookie('uls_welcome_week_u', [personid, fname, sname, reslife, international], {
      expires: ww_setCookieExpiry,
      path: ww_setCookiePath,
      domain: ww_setCookieDomain
  });
}

function welcomeWeekCourseCookie(url) {
  var cookie = jQuery.cookie('uls_welcome_week_c');
  if (cookie) {
    //update cookie
    jQuery.removeCookie('uls_welcome_week_c', {
        path: ww_setCookiePath
    });
  }
  jQuery.cookie.raw = true;
  jQuery.cookie('uls_welcome_week_c', url, {
      expires: ww_setCookieExpiry,
      path: ww_setCookiePath,
      domain: ww_setCookieDomain
  });
}

jQuery(document).ready(function() {

  (function() {
    /*
     * global var's
     */
    var id = getParam('u');

    //on load

    //on load hide all reslife and international events
    jQuery('.reslife').each(function() {
      jQuery(this).hide();
    });
    jQuery('.international').each(function() {
      jQuery(this).hide();
    });

    //onload hide all reslife and international by default
    jQuery('.reslife').each(function() {
      jQuery(this).hide();
    });
    jQuery('.international').each(function() {
      jQuery(this).hide();
    });

    //set cookies
    if (id !== null || id !== '') {
      //set user cookie
      jQuery.getJSON(ww_api, function(result) {
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
          if (jQuery.cookie('uls_welcome_week_u')) {
            var cookie = jQuery.cookie('uls_welcome_week_u');
            cookie = cookie.split(',');
            welcomeWeekUserActions(cookie);
          } else {
            var values_array = [id, fname, sname, reslife, international];
            welcomeWeekUserActions(values_array);
          }
        });
      });
    }

    //if course cookie is present the display button
    if (jQuery.cookie('uls_welcome_week_c')) {
      jQuery('#app-toolbar-options').append('<a href="' + jQuery.cookie('uls_welcome_week_c') + '" class="button large expanded rounded no-margin-bottom shadow" id="back-to-course"><i class="fa fa-graduation-cap" aria-hidden="true"></i>&nbsp;&nbsp;View my course</a>');

      //debug
      console.log('show course button');
      console.log('show toolbar');
    } else {
      jQuery('#back-to-course').remove();
      //debug
      console.log('hide course button');
    }
    if (jQuery('#course-id').length > 0) {
      //remove back to course button on course pages
      jQuery('#back-to-course').remove();
      //debug
      console.log('hide course button because this is a course page');
      //set course cookie
      var courseUrl = jQuery('#course-id').data('url');
      welcomeWeekCourseCookie(courseUrl);
    }

    //debug
    if (jQuery.cookie('uls_welcome_week_u')) {
      console.log('user cookie is present');
      console.log(jQuery.cookie('uls_welcome_week_u'));
    } else {
      console.log('user cookie not found');
    }
  })();

});
