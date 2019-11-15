function ulsFBGeoCookie() {
  var geoCookie = jQuery.cookie('uls_fb_co');
  if (geoCookie) {
  } else {
    const ww_setCookieExpiry = 800;
    const ww_setCookieDomain = 'ulster.ac.uk';
    const ww_setCookiePath = '/';
    var geoAPI = 'https://ulster.funnelback.co.uk/s/search.json?collection=ulster-geo&query=&profile=_default';
    jQuery.getJSON(geoAPI, function(data) {
      var setCookieExpiry = ww_setCookieExpiry;
      var setCookieDomain = ww_setCookieDomain;
      var setCookiePath = ww_setCookiePath;
      var country_code = data['question']['location']['countryCode'];
      //set cookie
      jQuery.cookie.raw = true;
      jQuery.cookie('uls_fb_co', country_code);
    }).fail(function(jqXHR, textStatus, errorThrown) {
      //DEBUG
      //console.log("error");
      //console.log(jqXHR.status);
    });
  }
}
//init
ulsFBGeoCookie();
