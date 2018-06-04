jQuery(document).ready(function() {
  function sanitize(str) {
    var output = str.replace('&amp;', '&');
    return output;
  }
  var schoolAPI = 'https://www.ulster.ac.uk/digital-prospectus/_web_services/static/4-6-18/faculties-and-schools';
  jQuery.getJSON(schoolAPI, success);
  function success(data) {
    jQuery('input:radio').change(function() {
      jQuery('#metadata_field_text_281873_value').val();
      var selected = jQuery(this).val();
      console.log(selected);
      jQuery.each(data, function(index) {
        if (data[index].school_name == selected) {
          var schoolOutput = sanitize(data[index].school_name);
          var facultyOutput = sanitize(data[index].faculty_name);
          jQuery('#metadata_field_text_281873_value').val(schoolOutput);
          jQuery('#metadata_field_text_281874_value').val(facultyOutput);
        }
      });
    });
  }
});
