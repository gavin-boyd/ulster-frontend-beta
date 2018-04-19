var res = eval('(' + _REST.response.body + ')');
var school = "%globals_asset_metadata_Ulster.Course.Subject%";
var output = '';
if (res) {
    for (i = 0; i < res.length; i++) {
        var school_name = res[i].school_name;
        if (school_name == school) {
          var faculty_name = res[i].faculty_name;
          output += '<div class="grid-x grid-padding-x">';
          output += '<div class="cell large-4">';
          output += '<a href="%globals_asset_assetid:' + res[i].faculty_asset_id + '^as_asset:asset_url%" class="thumbnail">';
          output += '<img src="%globals_asset_assetid:' + res[i].faculty_asset_id + '^as_asset:asset_thumbnail_v_thumb-newsletter_url%" alt="' + res[i].faculty_name + '">';
          output += '</a>';
          output += '</div>';
          output += '<div class="cell large-8">';
          output += '<h2 class="h1"><a href="%globals_asset_assetid:' + res[i].faculty_asset_id + '^as_asset:asset_url%">' + res[i].faculty_name + '</a></h2>';
          output += '<p class="lead">%globals_asset_assetid:' + res[i].faculty_asset_id + '^as_asset:asset_metadata_Description%</p>';
          output += '<p><a href="%globals_asset_assetid:' + res[i].faculty_asset_id + '^as_asset:asset_url%" class="button large">Find out more</a></h2>';
          output += '<p>We have other schools within the faculty too...</p>';
          output += '<ul class="angle-right">';
          for (x = 0; x < res.length; x++) {
            if (res[x].faculty_name == faculty_name) {
              if (res[x].school_name !== school_name) {
                output += '<li><a href="%globals_asset_assetid:' + res[x].school_asset_id + '^as_asset:asset_url%">' + res[x].school_name + '</a></li>';
              }
            }
          }
          output += '</ul>';
          output += '</div>';
          output += '</div>';
        }
    }
    print(output);
}
