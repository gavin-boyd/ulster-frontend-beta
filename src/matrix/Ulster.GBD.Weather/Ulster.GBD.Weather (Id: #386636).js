var res = eval('(' + _REST.response.body + ')');
if (res) {
  function outputWeather() {
    var output = '';
    for (i = 0; i < res.length; i++) {
      var image = res[i].image_url;
      var title = res[i].title;
      var link = res[i].link;
      var desc = res[i].description;
      output += '<div class="bordered radius p-l-20 p-t-20 p-r-20 p-b-20">';
      output += '<div class="grid-x grid-padding-x">';
      output += '<div class="cell small-12 medium-2 large-2 text-center">';
      output += '<img src="' + image + '" alt="' + title + '" width="67" />';
      output += '</div>';
      output += '<div class="cell small-12 medium-10 large-10">';
      output += '<h3 class="bl">' + title + '</h3>';
      output += '<p class="m-b-0"><a href="' + link + '" target="_blank">View on BBC Weather&nbsp;<span class="fa fa-external-link" aria-hidden="true"></span></a></p>';
      output += '</div>';
      output += '</div>';
      output += '</div>';
    }
    print(output);
  }
  outputWeather();
}
