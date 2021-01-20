function ulsSelectedRadios() {
  jQuery(document).ready(function() {
    jQuery("form.application-form input[type=radio]").each(function() {
      if (jQuery(this).is(":checked")) {
        jQuery(this).parent('li').css("background", "#005ea5");
        jQuery(this).next('label').css("color", "#fff");
      }
    });
    jQuery("form.application-form input[type=radio]").change(function() {
      var name = jQuery(this).attr('name');
      var type = jQuery(this).attr('type');
      jQuery('form.application-form input[name="' + name + '"]').parent('li').css("background", "#eee");
      jQuery('form.application-form input[name="' + name + '"]').next('label').css("color", "#0b0c0c");
      if (jQuery(this).is(":checked")) {
        jQuery(this).parent('li').css("background", "#005ea5");
        jQuery(this).next('label').css("color", "#fff");
      }
    });
  });
}
