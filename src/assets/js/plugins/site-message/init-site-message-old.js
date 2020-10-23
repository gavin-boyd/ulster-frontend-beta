jQuery.fn.extend({
  ulsterSiteMessage: function(apiURL, domain) {
    var api = apiURL;

    //default message
    jQuery.ajax({
      dataType: "json",
      url: api,
      success: function(data) {
        if (data[0].display == 'True') {
          addBanner(
            data[0].markup
          );
          //// DEBUG:
          //console.log('show banner');
        }
      },
      error: function(error){
        //console.log(error);
      }
    });

    function addBanner(markup) {
      var display = jQuery.cookie('uls_site_msgf');
      var hideClass = '';
      if (display) {
        if (display == 'y') {
          hideClass = '';
          jQuery('head').append('<style>.with-top-promo{margin-top:80px;}</style>');
        }
        if (display == null) {
          hideClass = '';
          jQuery('head').append('<style>.with-top-promo{margin-top:80px;}</style>');
        }
        if (display == 'n') {
          hideClass = ' hide';
          jQuery('head').append('<style>.with-top-promo{margin-top:0 !important;}</style>');
        }
      }
      var html = markup;
      //markup should include close button.
      //<a href="#" class="bl text-white hollow m-b-0 p-t-10 p-small-t-5 display-block" id="dismiss"><span class="fad fa-times-circle m-r-5" aria-hidden="true"></span><span class="hide-for-small-only">Dismiss</span><span class="show-for-sr"> this message</span></a>
      jQuery('body').prepend('<div class="site-promo ' + hideClass + '">' + html + '</div>');
      initSiteMsgDismiss();
    }

    function initSiteMsgDismiss() {
      //init dismiss button
      if (jQuery('#dismiss').length > 0 ) {
        const setCookieExpiry = 800;
        const setCookieDomain = domain;
        //const setCookieDomain = 'localhost';
        const setCookiePath = '/';
        jQuery('#dismiss').click(function(e) {
          e.preventDefault();
          jQuery('.site-promo').hide();
          var cookie = jQuery.cookie('uls_site_msgf');
          if (cookie) {
            jQuery.removeCookie('uls_site_msgf', {
                path: setCookiePath
            });
          }
          jQuery.cookie.raw = true;
          jQuery.cookie('uls_site_msgf', 'n', {
              expires: setCookieExpiry,
              path: setCookiePath,
              domain: setCookieDomain
          });
        });
      }
    }
  }
});
