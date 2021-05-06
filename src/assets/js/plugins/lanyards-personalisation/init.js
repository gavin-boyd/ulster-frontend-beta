function lanyardsPersonalisation() {
  //debug
  //console.log('fire lanyardsPersonalisation');

  const setCookieExpiry = 800;
  const setCookieDomain = 'ulster.ac.uk';
  ////const setCookieDomain = 'localhost';
  const setCookiePath = '/';

  function personalisation(user_cookie) {
    //debug
    //console.log('fire personalistion');

    //cookie varsfor user
    var u_cookie = user_cookie;

    //user cookie conditionals (events)
    if (u_cookie) {
      var u_cookie_array = u_cookie;
      /*
      "h": "",
      "first_name": "",
      "city": "",
      "declared_disability": "",
      "talented_athlete": "",
      "community_scholarship_available": ""
      */

      //1. define what these are - done
      var data_hash = u_cookie_array[0];
      var data_first_name = u_cookie_array[1];
      var data_city = u_cookie_array[2];
      var data_declared_disability = u_cookie_array[3];
      var data_talented_athlete = u_cookie_array[4];
      var data_ins = u_cookie_array[5];

      if (data_ins == 'Y') {
        jQuery('.p-ins').each(function() {
          jQuery(this).show();
        });

        jQuery('.p-ins-hidden').each(function() {
          jQuery(this).hide();
        });
      }

      if (data_declared_disability == 'Y') {
        jQuery('.p-dd').each(function() {
          jQuery(this).show();
        });

        jQuery('.p-dd-hidden').each(function() {
          jQuery(this).hide();
        });
      }

      if (data_talented_athlete == 'Y') {
        jQuery('.p-talented-athlete').each(function() {
          jQuery(this).show();
        });

        jQuery('.p-talented-athlete-hidden').each(function() {
          jQuery(this).hide();
        });
      }

      if (data_first_name !== '') {
        jQuery('.p-firstname').each(function() {
          jQuery(this).show();
        });
        jQuery('.p-text').each(function() {
          jQuery(this).show();
        });
        jQuery('.p-firstname').text(data_first_name);
      }

      if (data_city !== '') {
        jQuery('.p-city').each(function() {
          jQuery(this).show();
        });
        jQuery('.p-city-text').text(data_city);
      }
    }
  }

  function personalisationCookie(one, two, three, four, five, six) {
    var cookie = jQuery.cookie('uls_lyrd');
    if (cookie) {
      //update cookie
      jQuery.removeCookie('uls_lyrd', {
          path: setCookiePath
      });
    }
    jQuery.cookie.raw = true;
    jQuery.cookie('uls_lyrd', [one, two, three, four, five, six], {
        expires: setCookieExpiry,
        path: setCookiePath,
        domain: setCookieDomain
    });
    //debug
    //console.log('cookie set! ' + jQuery.cookie('uls_lyrd'));
  }

  //https://stackoverflow.com/questions/901115/how-can-i-get-query-string-values-in-javascript/901144#901144
  function getParameterByName(name, url = window.location.href) {
      name = name.replace(/[\[\]]/g, '\\$&');
      var regex = new RegExp('[?&]' + name + '(=([^&#]*)|&|#|$)'),
          results = regex.exec(url);
      if (!results) return null;
      if (!results[2]) return '';
      return decodeURIComponent(results[2].replace(/\+/g, ' '));
  }

  function cookieQuery() {
    //debug
    //console.log('cookie not set, get data from database.');
    //set user cookie
    jQuery.ajax({
      url: 'https://www.ulster.ac.uk/destinationulster/_web_services/res?q=' + getParameterByName('q') + '&r=' + getParameterByName('r'),
      dataType: 'json',
      success: function(data) {
        //debug
        //console.log( "SUCCESS:  " + data );
        console.log('q = ' + getParameterByName('q'));
        console.log('r = ' + getParameterByName('r'));
        data.forEach(function(key, value) {
          var data_hash = key.h;
          var data_ins = key.community_scholarship_available;
          var data_declared_disability = key.declared_disability;
          var data_talented_athlete = key.talented_athlete;
          var data_first_name = key.first_name;
          var data_city = key.city;
          //debug
          personalisationCookie(data_hash, data_first_name, data_city, data_declared_disability, data_talented_athlete, data_ins);
          if (jQuery.cookie('uls_lyrd')) {
            var cookie = jQuery.cookie('uls_lyrd');
            cookie = cookie.split(',');
            personalisation(cookie);
          } else {
            var values_array = [data_hash, data_first_name, data_city, data_declared_disability, data_talented_athlete, data_ins];
            personalisation(values_array);
          }
        });
      },
      error: function(xhr, status, error) {
        //debug
        //console.log('ajax error');
        //var errorMessage = xhr.status + ': ' + xhr.statusText
        //console.log('Error - ' + errorMessage);
        //console.log(error);
      }
    });
  }

  jQuery(document).ready(function() {

    (function() {
      //on load hide all reslife and international events
      jQuery('.p-firm-offer').each(function() {
        jQuery(this).hide();
      });
      jQuery('.p-ins').each(function() {
        jQuery(this).hide();
      });
      jQuery('.p-dd').each(function() {
        jQuery(this).hide();
      });
      jQuery('.p-talented-athlete').each(function() {
        jQuery(this).hide();
      });
      jQuery('.p-firstname').each(function() {
        jQuery(this).hide();
      });
      jQuery('.p-text').each(function() {
        jQuery(this).hide();
      });
      jQuery('.p-city').each(function() {
        jQuery(this).hide();
      });

      //set cookies
      var q = getParameterByName('q');
      var r = getParameterByName('r');
      if (q !== null && r !== null) {
        if (jQuery.cookie('uls_lyrd')) {
          var cookie = jQuery.cookie('uls_lyrd');
          cookie = cookie.split(',');
          var hash = getParameterByName('q');
          if (hash == cookie[0]) {
            //debug
            console.log('1 - read from cookie.');
            personalisation(cookie);
          } else {
            //debug
            console.log('2 - db and set new cookie.');
            cookieQuery();
          }
        } else {
          //debug
          console.log('2 - db and set new cookie.');
          cookieQuery();
        }
      } else {
        if (jQuery.cookie('uls_lyrd')) {
          //debug
          //console.log('cookie found, get data from cookie.');
          var cookie = jQuery.cookie('uls_lyrd');
          cookie = cookie.split(',');
          //debug
          console.log('4 - cookie.');
          personalisation(cookie);
        }
      }
    })();
  });
}
export {lanyardsPersonalisation};
