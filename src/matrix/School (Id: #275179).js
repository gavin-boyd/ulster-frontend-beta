var res = eval('(' + _REST.response.body + ')');
var school = "%globals_asset_metadata_Ulster.Course.Subject%";
var output = '';
if (res) {
    for (i = 0; i < res.length; i++) {
        var school_name = res[i].school_name;
        if (school_name == school) {
          output += '<div class="grid-x grid-padding-x">';
          output += '<div class="cell large-4">';
          output += '<a href="%globals_asset_assetid:' + res[i].school_asset_id + '^as_asset:asset_url%" class="thumbnail">';
          output += '<img src="%globals_asset_assetid:' + res[i].school_asset_id + '^as_asset:asset_thumbnail_v_thumb-newsletter_url%" alt="' + res[i].school_name + '">';
          output += '</a>';
          output += '</div>';
          output += '<div class="cell large-8">';
          output += '<h2 class="h1"><a href="%globals_asset_assetid:' + res[i].school_asset_id + '^as_asset:asset_url%">' + res[i].school_name + '</a></h2>';
          output += '<p class="lead">%globals_asset_assetid:' + res[i].school_asset_id + '^as_asset:asset_metadata_Description%</p>';
          output += '<p><a href="%globals_asset_assetid:' + res[i].school_asset_id + '^as_asset:asset_url%" class="button large">Find out more&nbsp;&nbsp;<i class="fa fa-angle-right" aria-hidden="true"></i></a></h2>';
          output += '</div>';
          output += '</div>';
        }
    }
    print(output);
}
