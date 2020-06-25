jQuery(document).ready(function() {
  if (jQuery('a[data-addclass]').length > 0) {
    jQuery('a[data-addclass]').each(function() {
      jQuery(this).click(function() {
        var theClass = jQuery(this).data('addclass');
        if (jQuery(this).hasClass(theClass)) {
          jQuery(this).removeClass(theClass);
        } else {
          jQuery(this).addClass(theClass);
        }
      });
    });
  }
  /*if (jQuery('a[data-closeclass]').length > 0) {
    jQuery('a[data-closeclass]').each(function() {
      jQuery(this).click(function() {
        var activeClass = jQuery(this).data('addclass');
        var theClass = jQuery(this).data('closeclass');
        jQuery('.' + closeclass).hide();
      });
    });
  }*/
});
