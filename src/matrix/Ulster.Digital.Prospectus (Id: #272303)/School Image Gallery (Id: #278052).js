var res = eval('(' + _REST.response.body + ')');
var school = "%globals_asset_metadata_Ulster.Course.Subject%";
if (res) {
    var output = '<div class="grid-x grid-padding-x grid-padding-y">';
    for (i = 0; i < res.length; i++) {
        var school_name = res[i].school_name;
        if (school_name == school) {
          var obj = res[i].school_child_pages;
          for (var key in obj)
          {
            if (obj.hasOwnProperty(key)) {
              var assetid = obj[key]['asset_id'];
              output += '<div class="cell large-3">';
              output += '<a data-fancybox="gallery" href="%globals_asset_assetid:' + assetid + '^as_asset:asset_thumbnail_url%" title="%globals_asset_assetid:' + assetid + '^as_asset:asset_name%" data-caption="%globals_asset_assetid:' + assetid + '^as_asset:asset_name%">';
              output += '<img src="%globals_asset_assetid:' + assetid + '^as_asset:asset_thumbnail_v_thumb-newsletter_url%" alt="" title="%globals_asset_assetid:' + assetid + '^as_asset:asset_name%">';
              output += '</a>';
              output += '</div>';
            }
          }
        }
    }
    output += '</div>';
    print(output);
}
