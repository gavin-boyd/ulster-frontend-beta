var res = eval('(' + _REST.response.body + ')');
if (res) {
  function campusImage() {
    var nested_campus_name = "%globals_get_campus%";
    for (i = 0; i < res.length; i++) {
      var campus_name = res[i].assetname;
      var output = '';
      if (nested_campus_name == campus_name) {
        output += '<div class="white-text cover-background" style="background-image:url(' + res[i].hero_background + ');">';
        output += '<div style="background-color:rgba(21,31,109,.8);" class="p-t-60 p-b-60 p-small-t-20 p-small-b-20">';
      }
      print(output);
    }
  }
  campusImage();
}
