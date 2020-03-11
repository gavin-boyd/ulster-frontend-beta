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
      output += '<div class="cell small-12 medium-6 large-6">';
        output += '<div class="shadow" data-area="true" data-area-url="' + url + '">';
          output += '<div class="grid-x">';
            output += '<div class="cell small-6 medium-12 large-6">';
              output += '<a href="' + url + '" class="display-block">';
                output += '<img class="hqy-lazy" src="https://cdn.ulster.ac.uk/home/ulster-frontend/img/blank.gif" data-src="' + image + '" alt="' + assetname +  ' image" />';
                output += '<span class="show-for-sr">' + assetname + ' information</span>';
              output += '</a>';
            output += '</div>';
            output += '<div class="cell small-6 medium-12 large-6">';
            output += '<div class="p-t-10 p-b-10 p-l-20 p-r-20 p-medium-l-20 p-medium-r-20 p-medium-b-20">';
              output += '<div data-equalizer-watch="true">';
                output += '<h2 class="h2 res-heading m-b-0"><a href="' + url + '">' + assetname + '</a></h2>';
                output += '<p>' +  description + '</p>';
              output += '</div>';
              output += '<a href="' + url + '" class="bl hide-for-small-only">Find out more&nbsp;<span class="fas fa-angle-right"></span></a>';
            output += '</div>';
          output += '</div>';
          output += '</div>';
        output += '</div>';
      output += '</div>';
    }
    print(output);
  }
  outputCampusPanels();
}
