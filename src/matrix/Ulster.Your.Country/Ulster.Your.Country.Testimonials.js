var res = eval('(' + _REST.response.body + ')');
var country_code = "%globals_asset_metadata_Content.Tagging.Country_key%";
if (res) {
  var output = '';
  for (i = 0; i < res.length; i++) {
    var testimonial_country_code = res[i].tag_country;
    if (testimonial_country_code.indexOf(',') !== -1) {
      var testimonial_country_code_array = testimonial_country_code.split(',');
    } else {
      var testimonial_country_code_array = testimonial_country_code;
    }
    for (x = 0; x < testimonial_country_code_array.length; x++) {
      var testimonial_code = testimonial_country_code_array[x];
      testimonial_code = String(testimonial_code);
      if (country_code == testimonial_code) {
        var flag = true;
      } else {
        var flag = false;
      }
      if (flag === true) {
        output += '<div class="m-t-30 testimonials">';
          output += '<div class="featured-testimonials-section">';
            output += '<div class="testimonial" data-eqalizer>';
              output += '<div class="grid-x">';
                if (res[i].image !== '') {
                  output += '<div class="cell medium-6 large-6 cover-background no-margin-bottom shadow" style="background-image:url(' + res[i].image + ')" data-equalizer-watch="true">';
                  output += '&nbsp;</div>';
                  output += '<div class="cell medium-6 large-6 off-white-bg card-section shadow" data-equalizer-watch="true">';
                } else {
                  output += '<div class="cell medium-12 large-12 off-white-bg card-section shadow" data-equalizer-watch="true">';
                }
                output += '<br>';
                output += '<div class="featured-testimonials-quotation">';
                  output += res[i].quote
                  output += '<cite>' + res[i].forename + ' ' + res[i].surname + ' - ' + res[i].course_name + ' (' + res[i].type + ')</cite>';
                output += '</div>';
                output += '<br>';
                if (res[i].video !== '') {
                  output += '<a data-fancybox href="https://www.youtube.com/watch?v=' + res[i].video + '" class="button large expanded hollow rounded no-margin-bottom">Watch Video</a>';
                }
              output += '</div>';
            output += '</div>';
          output += '</div>';
        output += '</div>';
        output += '</div><br>';
      }
    }
  }
  print(output);
}
