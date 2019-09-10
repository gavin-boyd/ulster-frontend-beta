jQuery(document).ready(function() {
  //debug
  //console.log('init responsive content');
  //console.log(jQuery(window).width());
  if (jQuery('#event-share').length > 0) {
    if (jQuery(window).width() < 640) {
      jQuery('#event-share').detach().appendTo('#event-content');
      jQuery('#event-related').detach().appendTo('#event-content');
    }
  }
});
