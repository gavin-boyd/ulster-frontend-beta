function courseImage() {
  var school = '%globals_asset_metadata_Courses.New.School%';
  var customimage = '%globals_asset_metadata_Courses.New.Custom.Image%';
  var imageID = '';
  switch (school) {
    case 'The Business Institute':
      imageID = '77166';
      break;
    case 'Department of Accounting, Finance and Economics':
      imageID = '77165';
      break;
    case 'School of Computing, Engineering and Intelligent Systems':
      imageID = '40293';
      break;
    default:
      imageID = '77775';
  }
  print('%globals_asset_url:' + imageID + '%');
}
