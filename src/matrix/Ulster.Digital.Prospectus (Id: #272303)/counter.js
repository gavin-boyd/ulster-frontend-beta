jQuery(document).ready(function() {
  var urlPartOne = '//ulster.funnelback.co.uk/s/search.json?collection=ulster-dev&profile=_default';
  var data;
  var success;
  jQuery('#selections input:radio').change(function(){
    var urlPartTwo = '';
    var labelHTML = '<ul class="angle-right">';
    jQuery('#selections input:radio').each(function() {
      if (jQuery(this).prop('checked')) {
        var value = jQuery(this).val();
        if (value !== '') {
          labelHTML += '<li>' + value + '</li>';
        }
        value = value.replace(/\s/g, '+');
        var name = jQuery(this).attr('name');
        var param;
        if (value) {
          if (name == 'metadata_field_select_272287') {
            param = '&f.Level|Y=';
          }
          if (name == 'metadata_field_select_272288') {
            if (value == 'Full-time') {
              param = '&f.Attendance|modeft=';
            }
            if (value == 'Part-time') {
              param = '&f.Attendance|modept=';
            }
          }
          if (name == 'metadata_field_select_272289') {
            param = '&f.Campus|campus=';
          }
          if (name == 'metadata_field_select_272290') {
            param = '&f.School|school=';
          }
          urlPartTwo += param + value;
        }
      }
    });
    labelHTML += '</ul>';
    jQuery.getJSON(urlPartOne + urlPartTwo, success);
    function success(data) {
      console.log(urlPartOne + urlPartTwo);
      var total = data['response']['resultPacket']['resultsSummary']['totalMatching'];
      if (total == 1) {
        var coursesLabel = 'course';
      } else {
        var coursesLabel = 'courses';
      }
      jQuery('#course-counter').html('<div class="card bordered radius shadow card-section"' +
        '<p>We found</p>' +
        '<div class="stat">' + total + ' <small>courses</small></div><br><p>Matching your selections:</p>' +
        labelHTML +
        '<p><a href="#" id="build" class="button large expanded"><i class="fa fa-wrench" aria-hidden="true"></i>&nbsp;&nbsp;Build my prospectus</a></p>' +
        '</div>');
    }
  });
});
