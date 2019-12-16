jQuery(document).ready(function() {

  var api = 'https://www.ulster.ac.uk/_web_services/site-message/graduation-stream/_nocache';
  //var api = 'http://localhost:8888/graduation-stream.json';


  //default message
  jQuery.ajax({
    dataType: "json",
    url: api,
    success: function(data) {
      if (data[0].display == 'True') {
        addBanner(
          data[0].title,
          data[0].subtitle,
          data[0].titleicon,
          data[0].backgroundcolourclass,
          '1',
          data[0].buttontext,
          data[0].buttonurl,
          'site-message-grad-stream',
          'button success',
          data[0].buttonicon,
          '',
          '',
          '',
          ''
        );
        //// DEBUG:
        //console.log('show banner');
      }
    },
    error: function(error){
      //console.log(error);
    }
  });

  function addBanner(
    mainTitle,
    mainSubTitle,
    mainIcon,
    mainColour,
    mainCTAS,
    btnOneTxt,
    btnOneUrl,
    btnOneID,
    btnOneClass,
    btnOneIcon,
    btnTwoTxt,
    btnTwoUrl,
    btnTwoID,
    btnTwoClass
  ) {
    var display = jQuery.cookie('uls_site_msg_grad_d');
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
    var ctasHtml = '';

    if (mainCTAS == '1') {
      ctasHtml = '<a href="' + btnOneUrl + '" class="' + btnOneClass + ' p-small-l-10 p-small-r-10 p-small-t-5 p-small-b-5 m-b-0 m-small-l-10 shadow" id="' + btnOneID + '">' + btnOneTxt + '&nbsp;&nbsp;<span class="' + btnOneIcon + '" aria-hidden="true"></span></a>';
    }

    if (mainCTAS == '2') {
      ctasHtml = '<a href="' + btnOneUrl + '" class="button m-b-0 m-r-10" id="' + btnOneID + '">' + btnOneTxt + '</a>' +
                 '<a href="' + btnTwoUrl + '" class="button m-b-0" id="' + btnTwoID + '">' + btnTwoTxt + '</a>';
    }

    var html = '<div class="' + mainColour + ' p-t-10 p-b-10 shadow site-promo' + hideClass + '">' +
    '<div class="grid-container">' +
      '<div class="grid-x">' +
        '<div class="cell small-11 medium-9 large-10">' +
          '<p class="m-b-0 m-r-10 m-small-r-0 ">' +
            '<span class="h2 text-white m-r-10 hide-for-small-only"><span class="' + mainIcon + '" aria-hidden="true"></span><span class="show-for-sr">Important message</span></span>' +
            '<span class="bl h2 text-white">' + mainTitle + '</span>' +
            '<span class="text-white m-l-10 hide-for-small-only m-r-10">' + mainSubTitle + '</span>' +
            ctasHtml +
          '</p>' +
        '</div>' +
        '<div class="cell small-1 medium-3 large-2 text-right">' +
          '<a href="#" class="bl text-white hollow m-b-0 p-t-10 p-small-t-5 display-block" id="dismiss"><span class="fad fa-times-circle m-r-5" aria-hidden="true"></span><span class="hide-for-small-only">Dismiss</span><span class="show-for-sr"> this message</span></a>' +
        '</div>' +
      '</div>' +
    '</div>';
    jQuery('body').prepend(html);
    initSiteMsgDismiss();
  }

  function initSiteMsgDismiss() {
    //init dismiss button
    if (jQuery('#dismiss').length > 0 ) {
      const setCookieExpiry = 800;
      const setCookieDomain = 'ulster.ac.uk';
      //const setCookieDomain = 'localhost';
      const setCookiePath = '/';
      jQuery('#dismiss').click(function(e) {
        e.preventDefault();
        jQuery('.site-promo').hide();
        var cookie = jQuery.cookie('uls_site_msg_grad_d');
        if (cookie) {
          jQuery.removeCookie('uls_site_msg_grad_d', {
              path: setCookiePath
          });
        }
        jQuery.cookie.raw = true;
        jQuery.cookie('uls_site_msg_grad_d', 'n', {
            expires: setCookieExpiry,
            path: setCookiePath,
            domain: setCookieDomain
        });
      });
    }
  }
});
