function initPersonButtons() {
  jQuery('a.uls-select-person').each(function() {
    jQuery(this).click(function(e) {
        e.preventDefault();
        var name = decodeURIComponent(jQuery(this).data('name'));
        var email = decodeURIComponent(jQuery(this).data('email'));
        var uid = decodeURIComponent(jQuery(this).data('uid'));
        var department = decodeURIComponent(jQuery(this).data('department'));
        var job = decodeURIComponent(jQuery(this).data('job'));
        jQuery("input.uls-autofill-name").val(name);
        jQuery("input.uls-autofill-email").val(email);
        jQuery("input.uls-autofill-uid").val(uid);
        jQuery("input.uls-autofill-department").val(department);
        jQuery("input.uls-autofill-job").val(job);
        jQuery('html, body').animate({scrollTop: $('#employeedetails').offset().top}, 'slow');
    });
  });
}
initPersonButtons();
jQuery('#person-search').submit(function(e) {
  jQuery("#results").load("%globals_asset_url:590161%?query=" + encodeURIComponent(jQuery("#person-query").val()), function( response, status, xhr ) {initPersonButtons();});
  e.preventDefault();
});
