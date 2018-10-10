function relatedCountryPages() {
  var country_names_string = "%globals_asset_metadata_Content.Tagging.Country_value%";
  var country_names_array = country_names_string.split('; ');
  var output = '';
  for (i = 0; i < country_names_array.length; i++) {
    var name = country_names_array[i];
    var url_name = name;
    url_name = url_name.toLowerCase();
    url_name = url_name.replace(/\s/g, '-');
    url_name = 'https://www.ulster.ac.uk/global/apply/your-country/' + url_name;
    output += '<a href="' + url_name + '">' + name + '</a><br>';
  }
  print(output);
}
relatedCountryPages();
