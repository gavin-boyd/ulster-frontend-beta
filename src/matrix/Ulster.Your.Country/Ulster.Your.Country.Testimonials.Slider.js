var res = eval('(' + _REST.response.body + ')');
var country_code = "%globals_asset_metadata_Content.Tagging.Country_key%";
var output = '';
var flagArray = [];
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
      if (flag === true) {
        var type = res[i].type;
        if (type !== '') {
          type = '(' + type + ')';
        }
        output += '<li class="orbit-slide"><div class="testimonials">';
          output += '<div class="featured-testimonials-section m-l-80 m-r-80 m-small-l-70 m-small-r-70">';
            output += '<div class="testimonial" data-eqalizer>';
              output += '<div class="grid-x grid-margin-x">';
                output += '<div class="cell small-12 medium-3 large-3">';
                if (res[i].image !== '') {
                  output += '<img src="' + res[i].image + '" alt="" class="thumbnail" />';
                } else {
                  output += '<img src="https://www.ulster.ac.uk/__data/assets/image/0020/452162/quote-holder.jpg" alt="" class="thumbnail" />';
                }
                output += '</div>';
                output += '<div class="cell small-12 medium-9 large-9" data-equalizer-watch="true">';
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
        output += '</div></li>';
      }
    }
  }
  if (flagArray.indexOf('true') > -1) {
    print('<div class="grid-container"><hr><h2 class="m-b-30">What our students from %globals_asset_name% say</h2>');
    print('<div class="orbit" role="region" aria-label="Student Testimonials" data-orbit data-auto-play="false"><div class="orbit-wrapper"><div class="orbit-controls"><button class="orbit-previous bg-core-blue"><span class="show-for-sr">Previous Slide</span>&#9664;&#xFE0E;</button><button class="orbit-next bg-core-blue"><span class="show-for-sr">Next Slide</span>&#9654;&#xFE0E;</button></div><ul class="orbit-container">');
  }
  print(output);
  if (flagArray.indexOf('true') > -1) {
    print('</ul></div><hr></div></div>');
  }
}
