jQuery(document).ready(function() {
  if (jQuery('ul.breadcrumbs').length > 0 && jQuery('.standard-page-image').length > 0) {
    jQuery('ul.breadcrumbs').parent().addClass('spi-breadcrumb');
    jQuery('ul.breadcrumbs').parent('nav').parent('div').addClass('overlay');
  }
});
