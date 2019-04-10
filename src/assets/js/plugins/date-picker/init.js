jQuery(document).ready(function() {
  if (jQuery('.datepicker').length !== 0) {
    var picker = jQuery('.datepicker').pickadate({
        format: 'ddmmmyyyy',
        selectMonths: true
    });
    jQuery('.datepicker').pickadate();
  }
});
