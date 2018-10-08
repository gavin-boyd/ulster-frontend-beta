function relatedCountryPages() {
  var country_names_string = "%globals_asset_metadata_Content.Tagging.Country_value%";
  var country_names_array = country_names_string.split('; ');
  var output = '';
  for (i = 0; i < country_names_array.length; i++) {
    var name = country_names_array[i];
    var url_name = name;
    url_name = url_name.toLowerCase();
    url_name = url_name.replace(' ', '-');
    output += '<a href="' + url_name + '">' + name + '</a>';
  }
  print(output);
}
relatedCountryPages();
