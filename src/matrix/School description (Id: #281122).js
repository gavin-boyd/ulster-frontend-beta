var res = eval('(' + _REST.response.body + ')');
var school = "%globals_asset_metadata_Ulster.Course.Subject%";
if (res) {
    var output = '';
    for (i = 0; i < res.length; i++) {
        var school_name = res[i].school_name;
        if (school_name == school) {
          var school_asset_id = res[i].school_asset_id;
          output += '<p class="lead">%globals_asset_assetid:' + school_asset_id + '^as_asset:asset_metadata_Description%</p>';
        }
    }
    print(output);
}
