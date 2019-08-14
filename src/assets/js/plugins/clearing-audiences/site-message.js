jQuery(document).ready(function() {

  /* localhost debug
  console.log(cookie);
  console.log('show default banner');
  addDefaultBanner(
    data[0].default_title,
    data[0].default_sub_title,
    data[0].default_cta_text,
    'https://www.ulster.ac.uk/clearing',
    'bg-core-blue'
  );*/

  var cookie = jQuery.cookie('uls_clearing_a');
  cookie = String(cookie);
  var api = 'https://www.ulster.ac.uk/clearing/_web_services/clearing-banner/_nocache';
  //var api = 'http://localhost/clearing-banner.json';

  //default message
  jQuery.ajax({
    dataType: "json",
    url: api,
    success: function(data) {
      if (data[0].default_display == 'y') {
        if (cookie !== 'gb') {
          if (cookie !== 'nieu') {
            if (cookie !== 'global') {
              //console.log(cookie);
              //console.log('show default banner');
              addDefaultBanner(
                data[0].default_title,
                data[0].default_sub_title,
                data[0].default_cta_text,
                'https://www.ulster.ac.uk/clearing',
                'bg-core-blue'
              );
            }
          }
        }
      }
    }
  });

  if (cookie) {
    //gb
    if (cookie == 'gb') {
      jQuery.ajax({
        dataType: "json",
        url: api,
        success: function(data) {
          if (data[0].gb_display == 'y') {
            addBanner(
              data[0].gb_title,
              data[0].gb_sub_title,
              data[0].gb_phone,
              data[0].gb_phone_text,
              'https://www.ulster.ac.uk/clearing/gb',
              data[0].gb_colour,
              'gb-banner-link',
              'gb-banner-call',
              'tel'
            );
          }
        }
      });
    }
    //nieu
    if (cookie == 'nieu') {
      jQuery.ajax({
        dataType: "json",
        url: api,
        success: function(data) {
          if (data[0].nieu_display == 'y') {
            addBanner(
              data[0].nieu_title,
              data[0].nieu_sub_title,
              data[0].nieu_phone,
              data[0].nieu_phone_text,
              'https://www.ulster.ac.uk/clearing/ni-eu',
              data[0].nieu_colour,
              'ni-eu-banner-link',
              'ni-eu-banner-call',
              'tel'
            );
          }
        }
      });
    }
    //global
    if (cookie == 'global') {
      jQuery.ajax({
        dataType: "json",
        url: api,
        success: function(data) {
          if (data[0].global_display == 'y') {
            addBanner(
              data[0].global_title,
              data[0].global_sub_title,
              data[0].global_phone,
              data[0].global_phone_text,
              'https://www.ulster.ac.uk/clearing/international',
              data[0].global_colour,
              'global-banner-link',
              'global-banner-call',
              'link'
            );
          }
        }
      });
    }
  }

  function addBanner(title, subtitle, phone, phonetext, url, colour, courseBtnID, callBtnID, buttonType) {
    var display = jQuery.cookie('uls_clearing_d');
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
    var html = '<div class="' + colour + ' p-t-10 p-b-10 shadow clearing-promo' + hideClass + '">' +
    '<div class="grid-container">' +
    '<div class="grid-x">' +
    '<div class="cell small-11 medium-11 large-5 p-t-5 m-small-b-10 small-order-1 medium-order-1 large-order-1">' +
    '<p class="m-b-0">' +
    '<span class="h2 text-white"><span class="fas fa-bell shake" aria-hidden="true"></span></span>' +
    '&nbsp;&nbsp;<span class="bl h2 text-white">' + title + '</span>' +
    '<span class="text-white m-l-10">' + subtitle + '</span></p>' +
    '</div>' +
    '<div class="cell small-12 medium-6 large-3 small-order-3 medium-order-3 large-order-2">' +
    '<div class="p-r-10 p-small-r-0">';
    if (buttonType == 'tel') {
      html += '<a href="tel:' + phone + '" class="button rounded expanded m-b-0 bl m-medium-t-10 m-small-b-10" id="' + callBtnID + '">' +
          '<span class="fas fa-phone-alt" aria-hidden="true"></span>&nbsp;&nbsp;' + phonetext + '</a>';
    }
    if (buttonType == 'link') {
      html += '<a href="' + phone + '" class="button rounded expanded m-b-0 bl m-medium-t-10 m-small-b-10">' +
          '<span class="fas fa-phone-alt" aria-hidden="true"></span>&nbsp;&nbsp;' + phonetext + '</a>';
    }
    html += '</div></div>' +
    '<div class="cell small-12 medium-6 large-3 small-order-4 medium-order-4 large-order-3">' +
    '<div class="">' +
    '<a href="' + url + '" class="button rounded expanded m-b-0 m-medium-t-10 bl" id="' + courseBtnID + '">View courses and apply&nbsp;&nbsp;<span class="fas fa-angle-right" aria-hidden="true"></span></a>' +
    '</div>' +
    '</div>' +
    '<div class="cell small-1 medium-1 large-1 text-right white-text small-order-2 medium-order-2 large-order-4">' +
    '<div class="">' +
    '<a href="#" class="button clear m-b-0 m-small-b-10" id="dismiss-clearing-banner"><span class="fas fa-times-circle" aria-hidden="true"></span></a>' +
    '</div>' +
    '</div></div></div></div>';
    jQuery('body').prepend(html);
    initClearingDismiss();
  }

  function addDefaultBanner(title, subtitle, cta, url, colour) {
    var display = jQuery.cookie('uls_clearing_d');
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
    var html = '<div class="' + colour + ' p-t-10 p-b-10 shadow clearing-promo' + hideClass + '">' +
    '<div class="grid-container">' +
    '<div class="grid-x">' +
    '<div class="cell small-11 medium-11 large-7 p-t-5 m-small-b-10 small-order-1 medium-order-1 large-order-1">' +
    '<p class="m-b-0">' +
    '<span class="h2 text-white"><span class="fas fa-bell shake" aria-hidden="true"></span></span>' +
    '&nbsp;&nbsp;<span class="bl h2 text-white">' + title + '</span>' +
    '<span class="text-white m-l-10">' + subtitle + '</span></p>' +
    '</div>' +
    '<div class="cell small-12 medium-12 large-4 small-order-3 medium-order-3 large-order-2">' +
    '<div class="">' +
    '<a href="' + url + '" class="button rounded expanded m-b-0 m-medium-t-10 bl" id="default-banner-link">' + cta + '&nbsp;&nbsp;<span class="fas fa-angle-right" aria-hidden="true"></span></a>' +
    '</div>' +
    '</div>' +
    '<div class="cell small-1 medium-1 large-1 text-right white-text small-order-2 medium-order-2 large-order-4">' +
    '<div class="">' +
    '<a href="#" class="button clear m-b-0 m-small-b-10" id="dismiss-clearing-banner"><span class="fas fa-times-circle" aria-hidden="true"></span></a>' +
    '</div>' +
    '</div></div></div></div><style>.with-top-promo{margin-top:80px;}</style>';
    jQuery('body').prepend(html);
    initClearingDismiss();
  }

  function initClearingDismiss() {
    //init dismiss button
    if (jQuery('#dismiss-clearing-banner').length > 0 ) {
      const setCookieExpiry = 800;
      const setCookieDomain = 'ulster.ac.uk';
      //const setCookieDomain = 'localhost';
      const setCookiePath = '/';
      jQuery('#dismiss-clearing-banner').click(function(e) {
        e.preventDefault();
        jQuery('.clearing-promo').hide();
        var cookie = jQuery.cookie('uls_clearing_d');
        if (cookie) {
          jQuery.removeCookie('uls_clearing_d', {
              path: setCookiePath
          });
        }
        jQuery.cookie.raw = true;
        jQuery.cookie('uls_clearing_d', 'n', {
            expires: setCookieExpiry,
            path: setCookiePath,
            domain: setCookieDomain
        });
      });
    }
  }
});
