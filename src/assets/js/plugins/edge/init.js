jQuery(document).ready(function() {
  var api = 'https://www.ulster.ac.uk/employability/_web_services/edge/_nocache';
  jQuery.ajax({
    dataType: "json",
    url: api,
    success: function(data) {
      if (data[0].ed_registered == 'true') {
        if (data[0].ed_achievements !== '') {
          jQuery('#edge-output').append('<ul>' + data[0].ed_achievements + '</ul>');
        }
      }
    },
    error: function(error){
      //console.log(error);
    }
  });
});
