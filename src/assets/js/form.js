require('./app');
require('./plugins/intl-tel-input/init');
require('./plugins/form-dependent-selections/init');
require('./plugins/stafflookup/init');
require('./plugins/staff-lookup-v2/init');
require('./plugins/studentlookup/init');
require('./plugins/programme-lookup/init');
//prettyCheckable
require('./plugins/prettycheckable/init-checkboxes');
import flatpickr from "flatpickr";
jQuery(document).ready(function() {
  flatpickr(".uls-datepicker");
});
//init tel inputs
jQuery(document).ready(function() {
  jQuery('form.application-form input[type=tel]').each(function() {
    if (jQuery(this).data('country')) {
      var initialCountry = jQuery(this).data('country');
    } else {
      var initialCountry = 'gb';
    }
    var initialCountry = jQuery(this).data('country');
    //options
    // allowDropdown: false,
    // autoHideDialCode: false,
    // autoPlaceholder: "off",
    // dropdownContainer: "body",
    // excludeCountries: ["us"],
    // formatOnDisplay: false,
    // geoIpLookup: function(callback) {
    //   $.get("http://ipinfo.io", function() {}, "jsonp").always(function(resp) {
    //     var countryCode = (resp && resp.country) ? resp.country : "";
    //     callback(countryCode);
    //   });
    // },
    // hiddenInput: "full_number",
    // initialCountry: "auto",
    // localizedCountries: { 'de': 'Deutschland' },
    // nationalMode: false,
    // onlyCountries: ['us', 'gb', 'ch', 'ca', 'do'],
    // placeholderNumberType: "MOBILE",
    // preferredCountries: ['cn', 'jp'],
    // separateDialCode: true,
    var options = {
        'utilsScript': '//cdn.ulster.ac.uk/home/ulster-frontend/beta/assets/js/utils.js?v=1.2',
        'formatOnDisplay': true,
        'autoHideDialCode': false,
        'initialCountry': initialCountry,
        'separateDialCode': true
    };
    jQuery(this).intlTelInput(options);
  });

  jQuery("form.application-form").submit(function(e) {
    //e.preventDefault();
    jQuery('input[type=tel]').each(function() {
      var telnumber = jQuery(this).intlTelInput("getNumber", intlTelInputUtils.numberFormat.E164);
      if (jQuery(this).val() !== '') {
        jQuery(this).val(telnumber);
      }
    });
  });
});
