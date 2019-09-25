function initMobileSideNav() {
  var active = jQuery('.uls-side').find('li.is-active');
  if (active.children('ul.menu').length > 0) {
    active.clone().appendTo('#uls-mobile-side-container');
    if (jQuery('#uls-mobile-side-container-show li.is-active').length > 1) {
      jQuery('#uls-mobile-side-container-show > ul > li.is-active').last().hide();
    }
  } else {
    jQuery('#uls-mobile-side-button').hide();
  }
  jQuery('#uls-mobile-side-button a').click(function() {
    var icon = jQuery('#uls-mobile-side-button a span');
    if(icon.hasClass('fa-angle-down')) {
      icon.removeClass('fa-angle-down');
      icon.addClass('fa-angle-up');
    } else {
      icon.removeClass('fa-angle-up');
      icon.addClass('fa-angle-down');
    }
  });
}
initMobileSideNav();