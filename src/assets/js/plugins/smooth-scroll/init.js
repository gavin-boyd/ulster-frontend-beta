jQuery(document).ready(function() {
  jQuery('.course-tab').click(function() {
    jQuery("html, body").animate({ scrollTop: jQuery('#course-content').offset().top - 100 }, 500);
  });
});
