var res = eval('(' + _REST.response.body + ')');
var campus = "%globals_asset_name^replace: campus:%";
var season = "%globals_asset_assetid:242835^as_asset:asset_metadata_Graduation.Season%";
var summer_end = "%globals_asset_assetid:242835^as_asset:asset_metadata_Graduation.Summer.Date.To%";
var winter_end = "%globals_asset_assetid:242835^as_asset:asset_metadata_Graduation.Winter.Date.To%";
season = season.toLowerCase();
var output = '';
if (res) {
  output += '<div class="off-white-bg">';
    output += '<div class="grid-x grid-padding-x grid-padding-y">';
      for (i = 0; i < res.length; i++) {
        var api_season = res[i].season;
        if (api_season == season) {
          var end_date = '';
          var today = new Date();
          today.setHours(0,0,0,0);
          if (api_season == 'Summer') {
            end_date = summer_end;
          }
          if (api_season == 'Winter') {
            end_date = winter_end;
          }
          if (end_date !== '') {
            end_date = new Date(end_date);
            end_date.setHours(0,0,0,0);
          }
          var api_campus = res[i].campus;
          api_campus = api_campus.split('; ');
          api_campus.forEach(function(value) {
            if (value == campus && end_date >= today) {
              output += '<div class="cell large-6">';
                output += '<div class="pad-60">';
                  output += '<h2 class="separator-left">' + res[i].asset_name + '</h2>';
                  output += '<p class="lead">' + res[i].intro + '</p>';
                  output += '<p><a href="%globals_asset_assetid:' + res[i].asset_id + '^as_asset:asset_url%" class="button large">Find out more</a>';
                output += '</div>';
              output += '</div>';
              output += '<div class="cell large-6 cover-background" style="background-image:url(%globals_asset_assetid:' + res[i].thumbnail_asset_id + '^as_asset:asset_url%);">';
              output += '</div>';
            }
          });
        }
      }
    output += '</div>';
  output += '</div>';
  print(output);
}
