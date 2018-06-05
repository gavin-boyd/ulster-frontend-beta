jQuery(document).ready(function() {
  /*function convertToSlug(Text) {
      return Text
          .toLowerCase()
          .replace(/[^\w ]+/g,'')
          .replace(/ +/g,'-')
          ;
  }*/
  var urlPartOne = '//ulster.funnelback.co.uk/s/search.json?collection=ulster-dev&profile=_default';
  var data;
  var success;
  /*jQuery('#selections label').each(function() {
    jQuery(this).attr('id', 'id-' + convertToSlug(jQuery(this).text()));
  });*/
  jQuery('#selections input:radio').change(function() {
    var urlPartTwo = '';
    var labelHTML = '<ul class="angle-right">';
    jQuery('#selections input:radio').each(function() {
      if (jQuery(this).prop('checked')) {
        var value = jQuery(this).val();
        if (value !== '') {
          var newValue = value.replace('Department of ', '');
          newValue = newValue.replace('The Business Institute', 'Business');
          newValue = newValue.replace('School of ', '');
          newValue = newValue.replace('Belfast ', '');
          labelHTML += '<li>' + newValue + '</li>';
        }
        if (value == 'All campuses' || value == 'Full-time and Part-time') {
          value = '';
        }
        var name = jQuery(this).attr('name');
        var param;
        if (value) {
          value = value.replace(/\s/g, '+');
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
      //console.log(urlPartOne + urlPartTwo);
      var total = data['response']['resultPacket']['resultsSummary']['totalMatching'];
      var message = '';
      if (total == 1) {
        var coursesLabel = 'course';
      } else {
        var coursesLabel = 'courses';
      }
      if (total == 0) {
        message = '<p class="callout warning" id="uls_validation">Please refine your search, try changing either type, attendance or campus.</p>';
      }
      var cta = '<p><a href="#" id="build" class="button large expanded"><i class="fa fa-wrench" aria-hidden="true"></i>&nbsp;&nbsp;Build my prospectus</a></p>';
      jQuery('#course-counter').html('<div class="card bordered radius shadow card-section"' +
        '<p>We found</p>' +
        '<div class="stat">' + total + ' <small>' + coursesLabel + '</small></div><br><p>Matching your selections:</p>' +
        labelHTML +
        message +
        cta +
        '</div>');
      //add click event to build button
      if (total == 0) {
        jQuery('#build').addClass('uls-disabled');
        jQuery('#build').click(function(e) {
          e.preventDefault();
          jQuery('#uls_validation').css('border', '2px solid red');
        })
      } else {
        jQuery('#uls_validation').remove();
        jQuery('#build').removeClass('uls-disabled');
        jQuery('#build').click(function(e) {
          e.preventDefault();
          //console.log('submit!');
          var valid = jQuery("#page_asset_builder_272204").valid();
          if (jQuery(this).hasClass('uls-disabled')) {
          } else {
            jQuery('#page_asset_builder_272204').submit();
            if (valid === true) {
              //console.log('form is valid');
              jQuery('#page_asset_builder_272204').submit();
              jQuery('button[type=submit], input[type=submit]').prop('disabled',true);
              jQuery('button[type=submit], input[type=submit]').addClass('disabled');
              jQuery(this).addClass('disabled');
            }
          }
        });
      }
      //check for active facets
      /*var optionsArray = [];
      var facets = data['response']['facets'];
      jQuery.each(facets, function(a) {
        var categories = facets[a].categories;
        jQuery.each(categories, function(b) {
          var values = categories[b].values;
          jQuery.each(values, function(c) {
            var dataTotal = values[c].count;
            var dataLabel = values[c].label;
            var dataID = convertToSlug(dataLabel);
            jQuery('#id-' + dataID).append('<span class="total">' + dataTotal + '</span>');
          });
        });
      });*/
    }
  });
});
