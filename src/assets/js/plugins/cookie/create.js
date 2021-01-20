function ulsSetC(assetid, name, value) {
  const create_setCookieExpiry = 800;
  const create_setCookieDomain = 'ulster.ac.uk';
  const create_setCookiePath = '/';
  if (jQuery('.uls-setter').length > 0) {
    var cookie = jQuery.cookie(name);
    jQuery.cookie.raw = true;
    if (jQuery('.uls-setter').data('assetid') == assetid) {
      if (cookie) { } else {
        jQuery.cookie(name, value, {
            expires: create_setCookieExpiry,
            path: create_setCookiePath,
            domain: create_setCookieDomain
        });
      }
    }
  }
}
export {ulsSetC};
