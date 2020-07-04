jQuery(document).ready(function() {
  if (jQuery('.uls-staff-lookup').length > 0) {
    //debug
    console.log('Init staff lookup plugin');

    //inputs
    var personName = jQuery('input.uls-staff-lookup[data-lookuptype="name"]');
    var personEmail = jQuery('input.uls-staff-lookup[data-lookuptype="email"]');
    var personUid = jQuery('input.uls-staff-lookup[data-lookuptype="uid"]');
    var personDepartment = jQuery('input.uls-staff-lookup[data-lookuptype="department"]');

    var apiURL = '';
  }
});
