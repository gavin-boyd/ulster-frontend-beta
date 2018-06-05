jQuery(document).ready(function() {
  var schoolAPI = 'https://www.ulster.ac.uk/digital-prospectus/_web_services/faculties-and-schools';
  //var schoolAPI = 'https://www.ulster.ac.uk/digital-prospectus/_web_services/static/4-6-18/faculties-and-schools';
  jQuery.getJSON(schoolAPI, success);
  function success(data) {
    jQuery('#subjects label').each(function() {
      var output = '';
      var text = jQuery(this).html();
      var inputValue = jQuery(this).prev('input:radio').val();
      jQuery.each(data, function(index) {
        if (data[index].school_name == inputValue) {
          var schoolDescription = data[index].school_description;
          output = '<span><strong>' + text + '</strong></span><br><span>' + schoolDescription + '</span>';
        }
      });
      jQuery(this).html(output);
    });
  }
});
