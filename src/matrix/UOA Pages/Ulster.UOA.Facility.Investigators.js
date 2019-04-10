function ulsterUOAInvestigators() {
  var staffArray = %globals_asset_metadata_Ulster.UOA.Facility.Investigators%;
  var output = '';
  for (i = 0; i < staffArray.length; i++) {
    output += '%globals_asset_name:' + staffArray[i] + '%';
  }
  print(output);
}
ulsterUOAInvestigators();
