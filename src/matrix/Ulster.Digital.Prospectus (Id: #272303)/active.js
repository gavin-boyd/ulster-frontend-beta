jQuery(document).ready(function() {
  jQuery('#subjects input:radio').change(function() {
    jQuery('label').removeClass('active');
    jQuery(this).next('label').addClass('active');
  });
});