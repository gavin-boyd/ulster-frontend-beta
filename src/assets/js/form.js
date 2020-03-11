require('./app');
//require('./plugins/intl-tel-input/init');
require('./plugins/form-dependent-selections/init');

//init tel inputs
/*jQuery(document).ready(function() {
  jQuery('input[type=tel]').each(function() {
    var options = {
        'utilsScript': '//cdn.ulster.ac.uk/home/ulster-frontend/beta/assets/js/utils.js?v=1.2',
        'formatOnDisplay': true,
        'autoHideDialCode': false,
        'initialCountry': 'gb',
        'separateDialCode': true
    };
    jQuery(this).intlTelInput(options);
    var number = iti.getNumber();
    var extension = iti.getExtension();
  });
});*/
