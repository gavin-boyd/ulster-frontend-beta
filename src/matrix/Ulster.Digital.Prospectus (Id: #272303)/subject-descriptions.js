jQuery(document).ready(function() {
  var schoolAPI = 'https://www.ulster.ac.uk/digital-prospectus/_web_services/faculties-and-schools';
  jQuery.getJSON(schoolAPI, success);
  function success(data) {
    jQuery('#selections label').each(function() {
      var output = '';
      var text = jQuery(this).html();
      var inputValue = jQuery(this).prev('input:radio').val();
      jQuery.each(data, function(index) {
        if (data[index].school_name == inputValue) {
          var schoolDescription = data[index].school_description;
          output = '<span class="h3">' + text + '</span><br><span>' + schoolDescription + '</span>';
        }
      });
      jQuery(this).html(output);
    });
  }
});
