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
//var fourteen = '%globals_asset_metadata_Content.Tagging.Country_key^escapequotes%';
//var fifthteen = '%globals_asset_metadata_Content.Tagging.Region_key^escapequotes%';
//var sixteen = '%globals_asset_metadata_Content.Tagging.UOA_key^escapequotes%';

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
//fourteen = fourteen.split('; ');
//fifthteen = fifthteen.split('; ');
//sixteen = sixteen.split('; ');

var tags = one.concat(two, three, four, five, six, seven, eight, nine, ten, eleven, twelve, thirteen);

var output = '';

for (var i = 0; i < tags.length; i++) {
  output += '<p><a href="https://www.ulster.ac.uk/' + tags[i] + '">https://wwww.ulster.ac.uk/' + tags[i] + '</a></p>';
}

print(output);
