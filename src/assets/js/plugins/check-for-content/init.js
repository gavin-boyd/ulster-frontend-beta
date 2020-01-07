function checkForContent() {
  jQuery(document).ready(function() {
    if (jQuery('.js-check-for-content').length > 0) {
      jQuery('.js-check-for-content').each(function() {
        if (jQuery(this).children().length == 0) {
          jQuery(this).hide();
        }
      });
    }
  });
}
checkForContent();
