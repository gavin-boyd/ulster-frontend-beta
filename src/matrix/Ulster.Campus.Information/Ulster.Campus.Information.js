var res = eval('(' + _REST.response.body + ')');
if (res) {
  function campusInformation() {
    var nested_campus_name = "%globals_get_campus%";
    for (i = 0; i < res.length; i++) {
      var campus_name = res[i].assetname;
      var output = '';
      if (nested_campus_name == campus_name) {
        output = '<div class="grid-x grid-padding-y">';
        output += '<div class="cell large-12">';
        output += '<hr>';
        output += '<h2 class="h3 bl"><span class="fa fa-map-marker"></span>&nbsp;&nbsp;' + campus_name + ' location info</h2>';
        output += '</div>';
        output += '<div class="cell large-4">';
        output += '<h3 class="h6">Address</h3>';
        output += res[i].address;
        output += '</div>';
        output += '<div class="cell large-8">';
        output += '<h3 class="h6">Campus maps</h3>';
        output += '<div class="grid-x">';
        output += '<div class="cell small-6 large-6">';
        output += '<a href="' + res[i].google_map + '" target="_blank" class="thumbnail">';
        output += '<img src="//cdn.ulster.ac.uk/home/ulster-frontend/beta/assets/img/google-map.png" alt="Google Map">';
        output += '</a>';
        output += '<a href="' + res[i].google_map + '" target="_blank" class="button">Google Maps</a>';
        output += '</div>';
        output += '<div class="cell small-6 large-6">';
        output += '<a href="' + res[i].google_map_diagram + '" target="_blank" class="thumbnail">';
        output += '<img src="//cdn.ulster.ac.uk/home/ulster-frontend/beta/assets/img/diagram-map.png" alt="Campus Map">';
        output += '</a>';
        output += '<a href="' + res[i].google_map_diagram + '" target="_blank" class="button">Map Diagram</a>';
        output += '</div>';
        output += '</div>';
        output += '</div>';
        output += '</div>';
      }
      print(output);
    }
  }
  campusInformation();
}
