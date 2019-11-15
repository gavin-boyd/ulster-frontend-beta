jQuery(document).ready(function() {
  if (jQuery('#course-tabs').length > 0) {
    jQuery('#course-tabs').clone().appendTo('#mobile-content');
    jQuery('#mobile-content li a').click(function() {
      var id = jQuery(this).attr('href').replace('#', '');
      jQuery('#course-tabs').foundation('_collapse');
      jQuery('#mobile-content li a').attr('aria-selected', 'false');
      jQuery('#mobile-content li').removeClass('is-active');
      jQuery('#course-tabs').foundation('_handleTabChange', jQuery(this).parent('li'), true);
      jQuery('#course-tabs').foundation('selectTab', id, true);
      jQuery('.fancybox-close-small').click();
      jQuery('html, body').animate({scrollTop: jQuery('#course-content').offset().top}, 1000);
      return false;
    });
  }
});
