var res = eval('(' + _REST.response.body + ')');
var country = "%globals_asset_metadata_Ulster.Capture.Country%";
var output = '';
if (res) {
    for (i = 0; i < res.length; i++) {
        var country_code = res[i].cca2;
        if (country == country_code) {
          var capital_city = res[i].capital;
          output += '<div class="cell medium-6">';
          output += '<iframe ' +
                    'width="600" ' +
                    'height="450" ' +
                    'frameborder="0" style="border:0" ' +
                    'src="https://www.google.com/maps/embed/v1/directions?key=AIzaSyD7oMxxt8TeWQIvmbu9mPmTEefkYF1Bp80&origin=' + capital_city + '&destination=Belfast&mode=flying" allowfullscreen>' +
                    '</iframe>';
          output += '<br><p><a href="https://www.ulster.ac.uk/digital-prospectus/_web_services/country" class="button large" target="_blank"><i class="fa fa-code" aria-hidden="true"></i> View Country API</a></p>';
          output += '</div>';
        }
    }
    print(output);
}
