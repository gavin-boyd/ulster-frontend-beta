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
          var schoolImage = data[index].school_image_url;
          output = '<span style="background:url(' + schoolImage + ') no-repeat 0 0; background-size:cover;"><span><span><strong>' + text + '</strong></span><br><span>' + schoolDescription + '</span></span></span>';
        }
      });
      jQuery(this).html(output);
    });
  }
});
