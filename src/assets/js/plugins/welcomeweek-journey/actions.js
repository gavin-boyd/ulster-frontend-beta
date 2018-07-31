function welcomeWeekUserActions(user_cookie) {
  //events logic

  //on load hide all reslife and international events
  jQuery('.reslife').each(function() {
    jQuery(this).hide();
  });
  jQuery('.international').each(function() {
    jQuery(this).hide();
  });

  //cookie varsfor user
  var u_cookie = user_cookie;

  //user cookie conditionals (events)
  if (u_cookie) {
    var u_cookie_array = u_cookie.split(',');
    var reslife = u_cookie_array[3];
    var international = u_cookie_array[4];

    //debug
    console.log('Reslife: ' + reslife);
    console.log('International: ' + international);

    if (reslife == 1) {
      //debug
      console.log('show reslife events');

      jQuery('.reslife').each(function() {
        jQuery(this).show();
      });
    }

    if (reslife == 1) {
      //debug
      console.log('hide for reslife');

      jQuery('.reslife').each(function() {
        jQuery(this).show();
      });

      jQuery('.reslife-hidden').each(function() {
        jQuery(this).hide();
      });
    }

    if (international == 1) {
      //debug
      console.log('show international events');

      jQuery('.international').each(function() {
        jQuery(this).show();
      });

      jQuery('.international-hidden').each(function() {
        jQuery(this).hide();
      });
    }
  }
}
