var res = eval('(' + _REST.response.body + ')');
var school = "%globals_asset_metadata_Ulster.Course.Subject%";
if (res) {
    var output = '<div class="grid-x grid-padding-x grid-padding-y">';
    output += '<div class="cell large-12">';
    output += '<div class="orbit" role="region" aria-label="Favorite Space Pictures" data-orbit>';
    output += '<div class="orbit-wrapper">';
    output += '<div class="orbit-controls">';
    output += '<button class="orbit-previous"><span class="show-for-sr">Previous Slide</span>&#9664;&#xFE0E;</button>';
    output += '<button class="orbit-next"><span class="show-for-sr">Next Slide</span>&#9654;&#xFE0E;</button>';
    output += '</div>';
    output += '<ul class="orbit-container">';
    for (i = 0; i < res.length; i++) {
        var school_name = res[i].school_name;
        if (school_name == school) {
          var obj = res[i].school_child_pages;
          for (var key in obj)
          {
            if (obj.hasOwnProperty(key)) {
              var assetid = obj[key]['asset_id'];
              output += '<li class="orbit-slide">';
              output += '<figure class="orbit-figure">';
              output += '<img class="orbit-image" src="%globals_asset_assetid:' + assetid + '^as_asset:asset_thumbnail_url%" alt="">';
              output += '<figcaption class="orbit-caption">%globals_asset_assetid:' + assetid + '^as_asset:asset_attribute_caption%</figcaption>';
              output += '</figure>';
              output += '</li>';
            }
          }
        }
    }
    output += '</ul>';
    output += '</div>';
    output += '</div>';
    output += '</div>';
    output += '</div>';
    print(output);
}
