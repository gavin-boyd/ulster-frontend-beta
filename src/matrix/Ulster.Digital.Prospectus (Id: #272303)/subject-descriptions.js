jQuery(document).ready(function() {
  //dynamic json
  //var schoolAPI = 'https://www.ulster.ac.uk/digital-prospectus/_web_services/faculties-and-schools';
  //static json
  var schoolAPI = 'https://www.ulster.ac.uk/digital-prospectus/_web_services/static/8-10-18/faculties-and-schools';
  jQuery('#metadata_field_select_272290_').parent('td').parent('tr').css('display', 'none');
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
