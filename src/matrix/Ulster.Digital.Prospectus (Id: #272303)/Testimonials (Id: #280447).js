var res = eval('(' + _REST.response.body + ')');
//var country_code = "%globals_asset_metadata_Ulster.Capture.Country^escapequotes%";
var output = '';
if (res) {
output += '<div class="orbit bordered shadow" role="region" data-orbit data-auto-play="false">';
  output += '<div class="orbit-wrapper">';
    output += '<div class="orbit-controls">';
      output += '<button class="orbit-previous button secondary"><span class="show-for-sr">Previous Slide</span>&#9664;&#xFE0E;</button>';
      output += '<button class="orbit-next button secondary"><span class="show-for-sr">Next Slide</span>&#9654;&#xFE0E;</button>';
    output += '</div>';
    output += '<ul class="orbit-container">';
    for (i = 0; i < res.length; i++) {
        //var agent_country_code = res[i].country_code;
        //if (country_code == agent_country_code) {

        output += '<li class="orbit-slide">';
          output += '<div class="grid-x">';
            output += '<div class="cell large-1 large-offset-1">';
              output += '<div class="card-section text-center h1">';
                output += '<i class="fa fa-quote-left" aria-hidden="true"></i>';
              output += '</div>';
            output += '</div>';
            output += '<div class="cell large-9">';
              output += '<div class="card-section">';
                output += res[i].quote
                output += '<cite>' + res[i].forename + ' ' + res[i].surname + ' - ' + res[i].course_name + ' (' + res[i].type + ')</cite>';
              output += '</div>';
            output += '</div>';
          output += '</div>';
        output += '</li>';



        //}
    }
    print(output);
    output += '</ul>';
    output += '</div>';
    output += '</div>';
    output += '<br><br>';
}
