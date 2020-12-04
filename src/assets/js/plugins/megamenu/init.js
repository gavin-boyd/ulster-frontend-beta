function megaMenuInit () {
  jQuery(document).ready(function() {
    jQuery('.mega-menu-link').click(function(e) {
      e.preventDefault();
    });
  });

  //setup mobile search menu
  jQuery(document).ready(function() {
    if (jQuery('#global-search-form').length != 0) {
      jQuery('#global-search-form').clone().appendTo('#mobileSearch');
    }
  });
}
export {megaMenuInit};
