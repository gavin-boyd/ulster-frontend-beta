/* programme lookup */
function fillField(data, selector, type) {
  if (data !== '' || data !== null) {
    if (jQuery(selector).length > 0) {
      if (jQuery(selector).val() == '') {
        if (type == 'text') {
          jQuery(selector).val(data);
        }
      }
      if (type == 'select') {
        jQuery(selector).val(data);
      }
      if (type == 'radio') {
        if (selector == '.uls-autofill-coursemode') {
          var options = {
            "Full-time": "0",
            "Part-time": "1"
          };
        }
        if (selector == '.uls-autofill-coursecampus') {
          var options = {
            "Belfast": "0",
            "Coleraine": "1",
            "Jordanstown": "2",
            "Magee": "3"
          };
        }
        if (selector == '.uls-autofill-coursefaculty') {
          if (data.toLowerCase().indexOf("art") != -1) {
            data = "AHSS";
          } else if (data.toLowerCase().indexOf("computing") != -1) {
            data = "CEBE";
          } else if (data.toLowerCase().indexOf("life") != -1) {
            data = "LHS";
          } else if (data.toLowerCase().indexOf("ulster") != -1) {
            data = "UUBS";
          } else { }
          var options = {
            "AHSS": "0",
            "CEBE": "1",
            "LHS": "2",
            "UUBS": "3"
          };
        }
        jQuery(selector).each(function() {
          if (jQuery(this).val() == options[data]) {
            jQuery(this).click();
          }
        });
      }
    }
  }
}
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
        fillField(mode, '.uls-autofill-coursemode', 'radio');
        fillField(campus, '.uls-autofill-coursecampus', 'radio');
        fillField(faculty, '.uls-autofill-coursefaculty', 'radio');
        jQuery('html, body').animate({scrollTop: $('#programmedetails').offset().top}, 'slow');
    });
  });
}
if (jQuery('#uls-programme-lookup').length > 0) {
  initProgrammeButtons();
  jQuery('#programme-search').submit(function(e) {
    jQuery("#results").load("https://www.ulster.ac.uk/programmes/_web_services/lookup?query=" + encodeURIComponent(jQuery("#programme-query").val()), function( response, status, xhr ) {initProgrammeButtons();});
    e.preventDefault();
  });
}
