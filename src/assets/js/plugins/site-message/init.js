jQuery(document).ready(function() {

  function addBanner(title, subtitle, href, btntxt, url, colour, btnID, icon) {
    var display = jQuery.cookie('uls_site_msg_d');
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
    var html = '<div class="' + colour + ' p-t-10 p-b-10 shadow site-promo' + hideClass + '">' +
    '<div class="grid-container">' +
      '<div class="grid-x">' +
        '<div class="cell large-7 p-t-5">' +
          '<p class="m-b-0">' +
            '<span class="h2 text-white"><span class="' + icon + '" aria-hidden="true"></span><span class="show-for-sr">Important message</span></span>' +
            '&nbsp;&nbsp;<span class="bl h2 text-white">' + title + '</span>' +
            '<span class="text-white m-l-10">' + subtitle + '</span>' +
          '</p>' +
        '</div>' +
        '<div class="cell large-4">' +
          '<div class="p-r-10 p-small-r-0">' +
            '<a href="' + href + '" class="button rounded expanded m-b-0 bl m-medium-t-10 m-small-b-10" id="' + btnID + '">' +
              '<span class="fa fa-dismiss" aria-hidden="true"></span>&nbsp;&nbsp;' + btntxt + '</a>' +
          '</div>' +
        '</div>' +
        '<div class="cell large-1 text-center">' +
          '<a href="#" class="button clear text-white m-b-0 m-small-b-10" id="dismiss"><span class="fas fa-times-circle" aria-hidden="true"></span><span class="show-for-sr">Dismiss this message</span></a>' +
        '</div>' +
      '</div>' +
    '</div>';
    jQuery('body').prepend(html);
    initSiteMsgDismiss();
  }

  function initSiteMsgDismiss() {
    //init dismiss button
    /*if (jQuery('#dismiss').length > 0 ) {
      const setCookieExpiry = 800;
      //const setCookieDomain = 'ulster.ac.uk';
      const setCookieDomain = 'localhost';
      const setCookiePath = '/';
      jQuery('#dismiss').click(function(e) {
        e.preventDefault();
        jQuery('.site-promo').hide();
        var cookie = jQuery.cookie('uls_site_msg_d');
        if (cookie) {
          jQuery.removeCookie('uls_site_msg_d', {
              path: setCookiePath
          });
        }
        jQuery.cookie.raw = true;
        jQuery.cookie('uls_site_msg_d', 'n', {
            expires: setCookieExpiry,
            path: setCookiePath,
            domain: setCookieDomain
        });
      });
    }*/
  }

  addBanner(
    'Message Title',
    'Subtitle',
    'https://www.ulster.ac.uk',
    'Tell us about your campus&nbsp;&nbsp<span class="fa fa-angle-right" aria-hidden="true"></span>',
    'https://www.ulster.ac.uk',
    'bg-core-blue',
    'faces-uu',
    'fas fa-bell shake'
  );

});
