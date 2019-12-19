var res = eval('(' + _REST.response.body + ')');
var country_code = "%globals_asset_metadata_Content.Tagging.Country_key%";
var output = '';
var flagArray = [];
var counter = 0;
if (res) {
  for (i = 0; i < res.length; i++) {
    var testimonial_country_code = res[i].tag_country;
    var testimonial_country_code_array = testimonial_country_code.split(',');
    for (x = 0; x < testimonial_country_code_array.length; x++) {
      var testimonial_code = testimonial_country_code_array[x];
      testimonial_code = String(testimonial_code);
      if (country_code == testimonial_code) {
        var flag = true;
        flagArray.push('true');
      } else {
        var flag = false;
        flagArray.push('false');
      }
      if (flag === true && counter < 6) {
        var type = res[i].type;
        if (type !== '') {
          type = '(' + type + ')';
        }
        output += '<div class="testimonials">';
          output += '<div class="featured-testimonials-section">';
            output += '<div class="testimonial" data-eqalizer>';
              output += '<div class="grid-x grid-margin-x m-b-30">';
                output += '<div class="cell small-4 medium-4 large-4">';
                if (res[i].image !== '') {
                  output += '<img src="' + res[i].image + '" alt="" class="thumbnail" />';
                } else {
                  output += '<img src="https://www.ulster.ac.uk/__data/assets/image/0020/452162/quote-holder.jpg" alt="" class="thumbnail" />';
                }
                output += '</div>';
                output += '<div class="cell small-8 medium-8 large-8" data-equalizer-watch="true">';
                output += '<div class="">';
                  output += '<p class="bl text-deep-blue m-b-5">' + res[i].forename + ' ' + res[i].surname + ' - ' + res[i].course_name + type + '</p>';
                  output += res[i].quote
                output += '</div>';
                if (res[i].video !== '') {
                  output += '<p class="m-b-0 m-t-20"><a data-fancybox href="https://www.youtube.com/watch?v=' + res[i].video + '" class="bl">Watch Video&nbsp;&nbsp;<span class="fas fa-play" aria-hidden="true"></span></a></p>';
                }
              output += '</div>';
            output += '</div>';
          output += '</div>';
        output += '</div>';
        output += '</div>';
        counter++;
      }
    }
  }
  if (flagArray.indexOf('true') > -1) {
    print('<h2 class="h1">What our students from %globals_asset_name% say</h2>');
  }
  print(output);
  if (flagArray.indexOf('true') > -1) {
    print('<hr>');
  }
}
