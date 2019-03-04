var res = eval('(' + _REST.response.body + ')');
var school = "%globals_asset_metadata_Ulster.Course.Subject%";
if (res) {
    var output = '';
    for (i = 0; i < res.length; i++) {
        var school_name = res[i].school_name;
        if (school_name == school) {
          var school_asset_id = res[i].school_asset_id;
          output += '<div class="cover-background p-t-60 p-b-60 p-small-b-0 p-small-t-0" style="background: url(%globals_asset_assetid:' + school_asset_id + '^as_asset:asset_thumbnail_url%); background-size:cover; background-position: 0 0;">';
        }
    }
    print(output);
}
