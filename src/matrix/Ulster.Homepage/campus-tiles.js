var res = eval('(' + _REST.response.body + ')');
if (res) {
  function outputCampusPanels() {
    var output = '';
    for (i = 0; i < res.length; i++) {
      var assetname = res[i].assetname;
      var image = res[i].image;
      var description = res[i].description;
      var url = res[i].url;
      //output
      output += '<div class="cell small-12 medium-3 large-3">';
        output += '<div class="border-separator">';
          output += '<div class="grid-x">';
            output += '<div class="cell small-6 medium-12 large-12">';
              output += '<a href="' + url + '" class="display-block m-b-10 m-small-b-0">';
                output += '<img class="hqy-lazy" src="https://cdn.ulster.ac.uk/home/ulster-frontend/img/blank.gif" data-src="' + image + '" />';
              output += '</a>';
            output += '</div>';
            output += '<div class="cell small-6 medium-12 large-12">';
              output += '<h2 class="h3 m-b-0"><a href="' + url + '">' + assetname + '</a></h2>';
              output += '<p>' +  description + '</p>';
              output += '<a href="' + url + '" class="bl">Find out more&nbsp;<span class="fas fa-angle-right"></span></a>';
            output += '</div>';
          output += '</div>';
        output += '</div>';
      output += '</div>';
    }
    print(output);
  }
  outputCampusPanels();
}
