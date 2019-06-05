jQuery(document).ready(function() {
  if (jQuery('.people-list').length > 0) {
    jQuery('.people-list').each(function() {
      jQuery(this).children('hr').last().hide();
    });
  }
});
