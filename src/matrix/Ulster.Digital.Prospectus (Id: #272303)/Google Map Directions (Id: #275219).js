var res = eval('(' + _REST.response.body + ')');
var country = "%globals_asset_metadata_Ulster.Capture.Country%";
var campus = "%globals_asset_metadata_Ulster.Course.Campus%";
if (campus) {
  if (campus == 'Jordanstown') {
    campus = 'Ulster University Shore Road Newtownabbey Co. Antrim BT37 0QB';
  }
  if (campus == 'Coleraine') {
    campus = 'Ulster University Cromore Road Coleraine County Londonderry BT52 1SA';
  }
  if (campus == 'Magee') {
    campus = 'Ulster University Northland Road Derry~Londonderry County Londonderry BT48 7JL';
  }
  if (campus == 'Belfast') {
    campus = 'Ulster University York Street Belfast County Antrim BT15 1ED';
  }
} else {
  campus = 'Ulster University York Street Belfast County Antrim BT15 1ED';
}
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
                    'src="https://www.google.com/maps/embed/v1/directions?key=AIzaSyD7oMxxt8TeWQIvmbu9mPmTEefkYF1Bp80&origin=' + capital_city + '+' + country + '&destination=' + campus + '&mode=flying" allowfullscreen>' +
                    '</iframe>';
          output += '</div>';
        }
    }
    print(output);
}
