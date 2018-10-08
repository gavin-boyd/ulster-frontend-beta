var res = eval('(' + _REST.response.body + ')');
var country_code = "%globals_asset_metadata_Ulster.Capture.Country_key%";
var flag = false;
var flagArray = [];
var flagArrayTwo = [];
var output = '';
var output_two = '';
if (res) {
  for (i = 0; i < res.length; i++) {
    var testimonial_country_code = res[i].tag_country;
    var testimonial_country_code_array = testimonial_country_code.split(',');
    for (x = 0; x < testimonial_country_code_array.length; x++) {
      var testimonial_code = testimonial_country_code_array[x];
      testimonial_code = String(testimonial_code);
      if (country_code == testimonial_code) {
        flag = true;
        flagArray.push('true');
      } else {
        flag = false;
        flagArray.push('false');
      }
      if (flag === true) {
        output += '<div class="testimonials">';
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
  //if no country found list by school
  var department = "%globals_asset_metadata_Ulster.Capture.School%";
  if (flagArray.indexOf('true') > -1) {
    print('<section data-magellan-target="section-5" id="section-5"><div class="cover-background" style="background-image:url(https://www.ulster.ac.uk/__data/assets/image/0005/264722/7132.jpg);"><div class="bg-purple-trans p-t-30 p-b-30"><div class="grid-container"><div class="grid-x grid-padding-x"><div class="cell small-12 medium-12 large-12">');
    print('<div class="white-text"><h2 class="h1 separator-left m-b-30">What our students from %globals_asset_metadata_Ulster.Capture.Country_value% say</h2></div>');
    print(output);
    print('</div></div></div></div></div></section>');
  } else {
    for (i = 0; i < res.length; i++) {
      var testimonial_department = res[i].tag_faculty_school;
      if (testimonial_department.indexOf('; ') !== -1) {
        var testimonial_department_array = testimonial_department.split('; ');
      } else {
        var testimonial_department_array = [testimonial_department];
      }
      for (u = 0; u < testimonial_department_array.length; u++) {
        var department_code = testimonial_department_array[u];
        department_code = String(department_code);
        if (department == department_code) {
          flagArrayTwo.push('true');
          output_two += '<div class="testimonials">';
            output_two += '<div class="featured-testimonials-section">';
              output_two += '<div class="testimonial" data-eqalizer>';
                output_two += '<div class="grid-x">';
                  if (res[i].image !== '') {
                    output_two += '<div class="cell medium-6 large-6 cover-background no-margin-bottom shadow" style="background-image:url(' + res[i].image + ')" data-equalizer-watch="true">';
                    output_two += '&nbsp;</div>';
                    output_two += '<div class="cell medium-6 large-6 off-white-bg card-section shadow" data-equalizer-watch="true">';
                  } else {
                    output_two += '<div class="cell medium-12 large-12 off-white-bg card-section shadow" data-equalizer-watch="true">';
                  }
                  output_two += '<br>';
                  output_two += '<div class="featured-testimonials-quotation">';
                    output_two += res[i].quote
                    output_two += '<cite>' + res[i].forename + ' ' + res[i].surname + ' - ' + res[i].course_name + ' (' + res[i].type + ')</cite>';
                  output_two += '</div>';
                  output_two += '<br>';
                  if (res[i].video !== '') {
                    output_two += '<a data-fancybox href="https://www.youtube.com/watch?v=' + res[i].video + '" class="button large expanded hollow rounded no-margin-bottom">Watch Video</a>';
                  }
                output_two += '</div>';
              output_two += '</div>';
            output_two += '</div>';
          output_two += '</div>';
          output_two += '</div><br>';
        }
      }
    }
    if (flagArrayTwo.indexOf('true') > -1) {
      print('<section data-magellan-target="section-5" id="section-5"><div class="cover-background" style="background-image:url(https://www.ulster.ac.uk/__data/assets/image/0005/264722/7132.jpg);"><div class="bg-purple-trans p-t-30 p-b-30"><div class="grid-container"><div class="grid-x grid-padding-x"><div class="cell small-12 medium-12 large-12">');
      print('<div class="white-text"><h2 class="h1 separator-left m-b-30">What our students say</h2></div>');
      print(output_two);
      print('</div></div></div></div></div></section>');
    }
  }
}
