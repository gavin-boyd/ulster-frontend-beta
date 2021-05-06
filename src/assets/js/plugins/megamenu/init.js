function ulsMegaMenuInit() {
  jQuery(document).ready(function() {
    jQuery('.mega-menu-link').click(function(e) {
      e.preventDefault();
    });
  });
  //setup mobile search menu
  jQuery(document).ready(function() {
    if (jQuery('#global-search-form').length != 0) {
      jQuery('#global-search-form').clone().appendTo('#mobileSearch');
      jQuery('#mobileSearch #global-search-form').attr('id', 'global-search-form-mobile');
      jQuery('#mobileSearch .input-group-field').attr('id', 'global-search-mobile');

    }
  });
}
export {ulsMegaMenuInit};
