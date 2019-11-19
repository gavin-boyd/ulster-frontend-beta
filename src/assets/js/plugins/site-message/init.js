jQuery(document).ready(function() {

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
    btnTwoTxt,
    btnTwoUrl,
    btnTwoID,
    btnTwoClass
  ) {
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
    var ctasHtml = '';

    if (mainCTAS == '2') {
      ctasHtml = '<a href="' + btnOneUrl + '" class="button m-b-0 m-r-10" id="' + btnOneID + '">' + btnOneTxt + '</a>' +
                 '<a href="' + btnTwoUrl + '" class="button m-b-0" id="' + btnTwoID + '">' + btnTwoTxt + '</a>';
    }

    if (mainCTAS == '1') {
      ctasHtml = '<a href="' + btnOneUrl + '" class="button m-b-0 m-r-10" id="' + btnOneID + '">' + btnOneTxt + '</a>';
    }

    var html = '<div class="' + mainColour + ' p-t-10 p-b-10 shadow site-promo' + hideClass + '">' +
    '<div class="grid-container">' +
      '<div class="grid-x grid-margin-x">' +
        '<div class="cell small-9 medium-9 large-10">' +
          '<p class="m-b-0 m-small-b-10 p-t-5 m-r-10 m-small-r-0 flt-l flt-small-n">' +
            '<span class="h2 text-white m-r-10"><span class="' + mainIcon + '" aria-hidden="true"></span><span class="show-for-sr">Important message</span></span>' +
            '<span class="bl h2 text-white">' + mainTitle + '</span>' +
            '<span class="text-white m-l-10">' + mainSubTitle + '</span>' +
          '</p>' + ctasHtml +
        '</div>' +
        '<div class="cell small-3 medium-3 large-2 text-right">' +
          '<a href="#" class="bl text-white hollow m-b-0 p-t-10 p-small-t-5 display-block" id="dismiss"><span class="fad fa-times-circle m-r-5" aria-hidden="true"></span>Dismiss<span class="show-for-sr"> this message</span></a>' +
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
    }
  }

////Main
//mainTitle,
//mainSubTitle,
//mainIcon,
//mainColour

////Button One
//btnOneTxt,
//btnOneUrl,
//btnOneID,
//btnOneClass

//init
addBanner(
  //main
  'Industrial Action ',
  'Minimising disruption on campus',
  'fad fa-info-circle',
  'bg-core-blue',
  '1',
  //btn One
  'Find out more&nbsp;&nbsp<span class="fa fa-angle-right" aria-hidden="true"></span>',
  'https://www.ulster.ac.uk/update',
  'inds-ind-act',
  'button success'
);

});
