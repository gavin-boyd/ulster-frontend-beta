const ww_setCookieExpiry = 800;
const ww_setCookieDomain = 'ulster.ac.uk';
const ww_setCookiePath = '/';
const ww_api = jQuery('#uls-welcome-week').data('url');

function setCourseBtn(user_cookie) {
  var u_cookie = user_cookie;
  if (u_cookie) {
    var u_cookie_array = u_cookie;
    var courseURL = u_cookie_array[6];
    if (jQuery('#view-course-btn').length > 0) {
      jQuery('#view-course-btn').show();
      jQuery('#view-course-btn').attr('href', courseURL);
    }
  }
}

function welcomeWeekUserActions(user_cookie) {
  //events logic

  //cookie varsfor user
  var u_cookie = user_cookie;

  //user cookie conditionals (events)
  if (u_cookie) {
    var u_cookie_array = u_cookie;
    var fname = u_cookie_array[0];
    var reslife = u_cookie_array[2];
    var international = u_cookie_array[3];
    var documents = u_cookie_array[4];
    var photo = u_cookie_array[5];

    if (documents == 1) {
      jQuery('.documents').each(function() {
        jQuery(this).show();
      });

      jQuery('.documents-hidden').each(function() {
        jQuery(this).hide();
      });
    }

    if (photo == 1) {
      jQuery('.photo').each(function() {
        jQuery(this).show();
      });

      jQuery('.photo-hidden').each(function() {
        jQuery(this).hide();
      });
    }

    if (reslife == 1) {
      jQuery('.reslife').each(function() {
        jQuery(this).show();
      });

      jQuery('.reslife-hidden').each(function() {
        jQuery(this).hide();
      });
    }

    if (international == 1) {
      jQuery('.international').each(function() {
        jQuery(this).show();
      });

      jQuery('.international-hidden').each(function() {
        jQuery(this).hide();
      });
    }

    //set intro hell firstname message
    jQuery('#intro').text(' ' + fname);
  }
}

function welcomeWeekPersonCookie(fname, sname, reslife, international, documents, photo, course) {
  var cookie = jQuery.cookie('uls_welcome_week_us');
  if (cookie) {
    //update cookie
    jQuery.removeCookie('uls_welcome_week_us', {
        path: ww_setCookiePath
    });
  }
  jQuery.cookie.raw = true;
  jQuery.cookie('uls_welcome_week_us', [fname, sname, reslife, international, documents, photo, course], {
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
    //on load hide all reslife and international events
    jQuery('.reslife').each(function() {
      jQuery(this).hide();
    });
    jQuery('.international').each(function() {
      jQuery(this).hide();
    });
    jQuery('.documents').each(function() {
      jQuery(this).hide();
    });
    jQuery('.photo').each(function() {
      jQuery(this).hide();
    });

    //set cookies
    if (jQuery('#uls-welcome-week').data('url') !== '') {
      //set user cookie
      jQuery.getJSON(ww_api, function(result) {
        result.forEach(function(key, value) {
          var fname = key.firstname;
          var sname = key.lastname;
          var reslife = key.reslife;
          var international = key.international;
          var documents = key.docs;
          var photo = key.photo;
          var course = key.course;
          welcomeWeekPersonCookie(fname, sname, reslife, international, documents, photo, course);
          if (jQuery.cookie('uls_welcome_week_us')) {
            var cookie = jQuery.cookie('uls_welcome_week_us');
            cookie = cookie.split(',');
            welcomeWeekUserActions(cookie);
          } else {
            var values_array = [fname, sname, reslife, international, documents, photo, course];
            welcomeWeekUserActions(values_array);
          }
        });
      });
    }
    if (jQuery.cookie('uls_welcome_week_us')) {
      var cookie = jQuery.cookie('uls_welcome_week_us');
      cookie = cookie.split(',');
      setCourseBtn(cookie);
    }
  })();
});
