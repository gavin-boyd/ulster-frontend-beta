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

      /*{
        "firm_offer": "%ds__firm_flag%",
        "ins": "%ds__ins_flag%",
        "declared_disability": "%ds__declared_disability%",
        "talented_athlete": "%ds__talented_athlete%",
        "first_name": "%ds__spriden_first_name^json_encode%"
      }*/

      //1. define what these are - done
      var data_firm_offer = u_cookie_array[0];
      var data_ins = u_cookie_array[1];
      var data_declared_disability = u_cookie_array[2];
      var data_talented_athlete = u_cookie_array[3];
      var data_first_name = u_cookie_array[4];
      var data_city = u_cookie_array[5];

      if (data_firm_offer == 'Y') {
        jQuery('.p-firm-offer').each(function() {
          jQuery(this).show();
        });

        jQuery('.p-firm-offer-hidden').each(function() {
          jQuery(this).hide();
        });
      }

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
      jQuery('.p-city').each(function() {
        jQuery(this).hide();
      });

      //set cookies
      if (jQuery('#uls-lanyards').data('url')) {
        if (jQuery.cookie('uls_lyrd')) {
          var cookie = jQuery.cookie('uls_lyrd');
          cookie = cookie.split(',');
          personalisation(cookie);
        } else {
          //debug
          //console.log('cookie not set, get data from database.');
          //set user cookie
          jQuery.ajax({
            url: jQuery('#uls-lanyards').data('url'),
            dataType: 'json',
            success: function(data) {
              //debug
              //console.log( "SUCCESS:  " + data );
              data.forEach(function(key, value) {
                var data_firm_offer = key.firm_offer;
                var data_ins = key.ins;
                var data_declared_disability = key.declared_disability;
                var data_talented_athlete = key.talented_athlete;
                var data_first_name = key.first_name;
                var data_city = key.city;
                //debug
                personalisationCookie(data_firm_offer, data_ins, data_declared_disability, data_talented_athlete, data_first_name, data_city);
                if (jQuery.cookie('uls_lyrd')) {
                  var cookie = jQuery.cookie('uls_lyrd');
                  cookie = cookie.split(',');
                  personalisation(cookie);
                } else {
                  var values_array = [data_firm_offer, data_ins, data_declared_disability, data_talented_athlete, data_first_name, data_city];
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
      } else {
        if (jQuery.cookie('uls_lyrd')) {
          //debug
          //console.log('cookie found, get data from cookie.');
          var cookie = jQuery.cookie('uls_lyrd');
          cookie = cookie.split(',');
          personalisation(cookie);
        }
      }
    })();
  });
}
export {lanyardsPersonalisation};
