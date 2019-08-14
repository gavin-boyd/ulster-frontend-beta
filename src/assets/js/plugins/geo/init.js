//init geo personalisation
// uses https://ipapi.co/json/ to perform geo lookup to json function
function ulsGeoCookie() {
  var geoCookie = jQuery.cookie('uls_co');

  if (geoCookie) {
    //geo goodness
    //console.log('geo set!');
    //debug
    /*if (jQuery('#debug-geo').length > 0) {
      jQuery('#debug-geo').html('<p>Country code: ' + jQuery.cookie('uls_co') + '</p>');
    }*/
  } else {
    //debug
    //console.log('geo not set!');

    //contants
    const ww_setCookieExpiry = 800;
    //Live
    const ww_setCookieDomain = 'ulster.ac.uk';
    const ww_setCookiePath = '/';
    //Staging
    ////const ww_setCookieDomain = 'localhost:8000';
    ////const ww_setCookiePath = '/';

    var geoAPI = 'https://ipapi.co/json/';

    jQuery.getJSON(geoAPI, function(data) {
      //debug
      //console.log(JSON.stringify(data,null,2));
      //console.log('success');

      //success
      var setCookieExpiry = ww_setCookieExpiry;
      var setCookieDomain = ww_setCookieDomain;
      var setCookiePath = ww_setCookiePath;

      var country_code = data['country'];

      //set cookie
      jQuery.cookie.raw = true;
      jQuery.cookie('uls_co', country_code);

      //debug
      /*if (jQuery('#debug-geo').length > 0) {
        jQuery('#debug-geo').html('<p>Country code: ' + jQuery.cookie('uls_co') + '</p>');
      }*/

      //reload to perform server side persona logic
      //location.reload();

    }).fail(function(jqXHR, textStatus, errorThrown) {
      //DEBUG
      //console.log("error");
      //console.log(jqXHR.status);
    });
  }
}
//init
ulsGeoCookie();
