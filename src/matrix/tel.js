jQuery(document).ready(function() {
  jQuery('input.phone').each(function() {
    var options = {
        'utilsScript': '//cdn.ulster.ac.uk/home/ulster-frontend/beta/assets/js/utils.js?v=1.2',
        'formatOnDisplay': 'true',
        'hiddenInput': 'metadata_field_text_272286_value'
    };
    jQuery(this).intlTelInput(options);
  });
});
