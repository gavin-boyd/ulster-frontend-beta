function createListofTagLinks() {
  var one = '%globals_asset_metadata_Content.Tagging.Campus_key^escapequotes%';
  var two = '%globals_asset_metadata_Content.Tagging.Faculty.AHSS_key^escapequotes%';
  var three = '%globals_asset_metadata_Content.Tagging.Faculty.CEBE_key^escapequotes%';
  var four = '%globals_asset_metadata_Content.Tagging.Faculty.LHS_key^escapequotes%';
  var five = '%globals_asset_metadata_Content.Tagging.Faculty.UUBS_key^escapequotes%';
  var six = '%globals_asset_metadata_Content.Tagging.Research.Institute_key^escapequotes%';
  var seven = '%globals_asset_metadata_Content.Tagging.Group.RI_key^escapequotes%';
  var eight = '%globals_asset_metadata_Content.Tagging.Group.IGE_key^escapequotes%';
  var nine = '%globals_asset_metadata_Content.Tagging.Group.CL_key^escapequotes%';
  var ten = '%globals_asset_metadata_Content.Tagging.Group.Students_key^escapequotes%';
  var eleven = '%globals_asset_metadata_Content.Tagging.Group.Business_key^escapequotes%';
  var twelve = '%globals_asset_metadata_Content.Tagging.Group.Other_key^escapequotes%';
  var thirteen = '%globals_asset_metadata_Content.Tagging.Course.Type_key^escapequotes%';

  one = one.split('; ');
  two = two.split('; ');
  three = three.split('; ');
  four = four.split('; ');
  five = five.split('; ');
  six = six.split('; ');
  seven = seven.split('; ');
  eight = eight.split('; ');
  nine = nine.split('; ');
  ten = ten.split('; ');
  eleven = eleven.split('; ');
  twelve = twelve.split('; ');
  thirteen = thirteen.split('; ');

  var one_v = '%globals_asset_metadata_Content.Tagging.Campus_value^escapequotes%';
  var two_v = '%globals_asset_metadata_Content.Tagging.Faculty.AHSS_value^escapequotes%';
  var three_v = '%globals_asset_metadata_Content.Tagging.Faculty.CEBE_value^escapequotes%';
  var four_v = '%globals_asset_metadata_Content.Tagging.Faculty.LHS_value^escapequotes%';
  var five_v = '%globals_asset_metadata_Content.Tagging.Faculty.UUBS_value^escapequotes%';
  var six_v = '%globals_asset_metadata_Content.Tagging.Research.Institute_value^escapequotes%';
  var seven_v = '%globals_asset_metadata_Content.Tagging.Group.RI_value^escapequotes%';
  var eight_v = '%globals_asset_metadata_Content.Tagging.Group.IGE_value^escapequotes%';
  var nine_v = '%globals_asset_metadata_Content.Tagging.Group.CL_value^escapequotes%';
  var ten_v = '%globals_asset_metadata_Content.Tagging.Group.Students_value^escapequotes%';
  var eleven_v = '%globals_asset_metadata_Content.Tagging.Group.Business_value^escapequotes%';
  var twelve_v = '%globals_asset_metadata_Content.Tagging.Group.Other_value^escapequotes%';
  var thirteen_v = '%globals_asset_metadata_Content.Tagging.Course.Type_value^escapequotes%';

  one_v = one_v.split('; ');
  two_v = two_v.split('; ');
  three_v = three_v.split('; ');
  four_v = four_v.split('; ');
  five_v = five_v.split('; ');
  six_v = six_v.split('; ');
  seven_v = seven_v.split('; ');
  eight_v = eight_v.split('; ');
  nine_v = nine_v.split('; ');
  ten_v = ten_v.split('; ');
  eleven_v = eleven_v.split('; ');
  twelve_v = twelve_v.split('; ');
  thirteen_v = thirteen_v.split('; ');

  var tags = one.concat(two, three, four, five, six, seven, eight, nine, ten, eleven, twelve, thirteen);

  var values = one_v.concat(two_v, three_v, four_v, five_v, six_v, seven_v, eight_v, nine_v, ten_v, eleven_v, twelve_v, thirteen_v);

  var output = '';

  var check = 'false';

  for (var i = 0; i < tags.length; i++) {
    if (tags[i]) {
      if (values[i] == 'Alumni') {
        var title = 'Alumni and Supporters';
      } else {
        var title = values[i];
      }
      output += '<li><a href="https://www.ulster.ac.uk/' + tags[i] + '">' + title + '</a></li>';
      check = 'true';
    }
  }

  if (check == 'true') {
    print('<hr><h2>Related links</h2>');
    print('<div class="wysiwyg">');
    print('<ul>');
    print(output);
    print('</div>');
    print('</ul>');
  }
}
createListofTagLinks();
