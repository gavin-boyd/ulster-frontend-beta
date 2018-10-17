//form submit
jQuery(document).ready(function() {
  //add jquery validate to the form
  jQuery("#page_asset_builder_272204").validate();
  //remove onsubmit from form
  jQuery('#page_asset_builder_272204').attr('onsubmit', '');
  function processForm(e) {
    e.preventDefault();
    var valid = jQuery("#page_asset_builder_272204").valid();
    if (valid === true) {
      jQuery('body').prepend('<div id="loading" style="width:100%; height:100%; position:fixed; background: rgba(0,0,0,.8); z-index:9999; display:table;"><div style="display:table-cell;vertical-align:middle;text-align:center;"><img src="//cdn.ulster.ac.uk/home/ulster-frontend/beta/assets/img/cool-preloader.gif" alt="Loading" /><p style="color:#fff;" id="loading-text">Creating your prospectus</p></div></div>');
      jQuery.ajax({
          url: '%globals_asset_url%',
          type: 'POST',
          data: jQuery(this).serialize(),
          success: function(result) {
            //debug
            //console.log('Success!');
            var html = result;
            var id = jQuery(html).find('#uls_assetid').text();
            var url = jQuery(html).find('#uls_asseturl').text();
            //debug
            //console.log('Assetid: ' + id);
            //console.log('Asset url: ' + url);
            //jQuery('#loading').remove();
            jQuery('#loading-text').text('All Done. Loading your prospectus');
            window.location.replace(url);
          },
          error: function(errorThrown){
            //console.log('Error!');
            jQuery('#loading').remove();
          }
      });
    }
  }
  jQuery('#page_asset_builder_272204').submit(processForm);
});
//active js
jQuery(document).ready(function() {
  jQuery('#subjects input:radio').change(function() {
    jQuery('label').removeClass('active');
    jQuery(this).next('label').addClass('active');
  });
});
//counter js
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
            if (valid === true) {
              //console.log('form is valid');
              jQuery('#page_asset_builder_272204').submit();
              jQuery('button[type=submit], input[type=submit]').prop('disabled',true);
              jQuery('button[type=submit], input[type=submit]').addClass('disabled');
              jQuery(this).addClass('disabled');
            } else {
              jQuery("html,body").animate({
                  scrollTop: jQuery("#page_asset_builder_272204").offset().top
              }, "500");
              return false;
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
//school and faculty inputs auto
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
      //console.log(selected);
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
//school description js
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
//tel input
jQuery(document).ready(function() {
  jQuery('input.phone').each(function() {
    var options = {
        'utilsScript': '//cdn.ulster.ac.uk/home/ulster-frontend/beta/assets/js/utils.js?v=1.2',
        'formatOnDisplay': 'true',
        'hiddenInput': 'metadata_field_text_272286_value'
    };
    jQuery(this).intlTelInput(options);
  });
});
