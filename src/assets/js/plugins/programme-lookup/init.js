function initProgrammeButtons() {
  jQuery('a.uls-select-programme').each(function() {
    jQuery(this).click(function(e) {
        e.preventDefault();
        var course_title = decodeURIComponent(jQuery(this).data('coursetitle'));
        var uid = decodeURIComponent(jQuery(this).data('uid'));
        var campus = decodeURIComponent(jQuery(this).data('campus'));
        var faculty = decodeURIComponent(jQuery(this).data('faculty'));
        var mode = decodeURIComponent(jQuery(this).data('mode'));
        jQuery("input.uls-autofill-coursetitle").val(course_title);
        jQuery("input.uls-autofill-courseuid").val(uid);
        jQuery("input.uls-autofill-coursecampus").val(campus);
        jQuery("input.uls-autofill-coursefaculty").val(faculty);
        jQuery("input.uls-autofill-coursemode").val(mode);
        jQuery('html, body').animate({scrollTop: $('#programmedetails').offset().top}, 'slow');
    });
  });
}
initPersonButtons();
jQuery('#programme-search').submit(function(e) {
  jQuery("#results").load("https://www.ulster.ac.uk/programmes/_web_services/lookup?query=" + encodeURIComponent(jQuery("#programme-query").val()), function( response, status, xhr ) {initProgrammeButtons();});
  e.preventDefault();
});
