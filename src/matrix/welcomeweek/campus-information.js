var res = eval('(' + _REST.response.body + ')');
if (res) {
  function campusInformation() {
    var nested_campus_name = "%globals_get_campus%";
    for (i = 0; i < res.length; i++) {
      var campus_name = res[i].assetname;
      var output = '';
      if (nested_campus_name == campus_name) {
        output = '<div class="grid-x">';
        output += '<div class="cell large-12">';
        output += '<div class="p-t-30 p-r-30 p-b-30 p-medium-t-0 p-medium-l-20 p-medium-r-20 p-small-l-20 p-small-r-20">';
        output += '<h2 class="h1 bl m-b-0">' + campus_name + ' location info</h2>';
        output += '<p class="m-b-30"><a href="' + res[i].url + '" class="button clear bl p-l-0 m-b-0"><span class="fa fa-angle-right" aria-hidden="true"></span>&nbsp;&nbsp;Find out more about our ' + campus_name + '</a></p>';
        output += '<div class="grid-x">';
        output += '<div class="cell medium-4 large-4">';
        output += '<h3 class="h6">Address</h3>';
        output += res[i].address;
        output += '</div>';
        output += '<div class="cell medium-8 large-8">';
        output += '<h3 class="h6">Campus maps</h3>';
        output += '<div class="grid-x">';
        output += '<div class="cell small-6 large-6">';
        output += '<a href="' + res[i].google_map + '" target="_blank" class="thumbnail m-b-0">';
        output += '<img src="//cdn.ulster.ac.uk/home/ulster-frontend/beta/assets/img/google-map.png" alt="Google Map" width="160">';
        output += '</a><br>';
        output += '<a href="' + res[i].google_map + '" target="_blank" class="button clear bl p-l-0"><span class="fa fa-angle-right" aria-hidden="true"></span>&nbsp;&nbsp;Google Maps</a>';
        output += '</div>';
        output += '<div class="cell small-6 large-6">';
        output += '<a href="' + res[i].google_map_diagram + '" target="_blank" class="thumbnail m-b-0">';
        output += '<img src="//cdn.ulster.ac.uk/home/ulster-frontend/beta/assets/img/diagram-map.png" alt="Campus Map" width="160">';
        output += '</a><br>';
        output += '<a href="' + res[i].google_map_diagram + '" target="_blank" class="button clear bl p-l-0"><span class="fa fa-angle-right" aria-hidden="true"></span>&nbsp;&nbsp;Map Diagram</a>';
        output += '</div>';
        output += '</div>';
        output += '</div>';
        //if (res[i].ww_video_id !== '') {
        //  output += '<div class="cell large-12"><div class="responsive-embed"><iframe width="560" height="315" src="https://www.youtube.com/embed/' + res[i].ww_video_id + '?rel=0" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></div></div>';
        //}
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
