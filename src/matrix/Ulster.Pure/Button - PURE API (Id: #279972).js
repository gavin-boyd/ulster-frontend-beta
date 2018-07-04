var researchOutputs = eval('(' + _REST.response.body + ')');
if (researchOutputs) {
  var surnameSlug = '%globals_asset_metadata_Staff.Surname^escapequotes^lowercase^replace:\':^replace: :-%';
  var surnameCheck = '%globals_asset_metadata_Staff.Surname^replace:\':^replace: :-^escapequotes^lowercase^maxchars:2%';
  if (researchOutputs.count > 0) {
    if (surnameCheck == 'mc') {
      var remainingSurname = surnameSlug.slice(2);
      print('<a href="https://pure.ulster.ac.uk/en/persons/%globals_asset_metadata_Staff.Forename^escapequotes^lowercase^replace:\':^replace: :-%-' + surnameCheck + '-' + remainingSurname + '" class="btn btn-primary"><i class="fa fa-graduation-cap" aria-hidden="true"></i> View full academic profile</a>');
    } else {
      print('<a href="https://pure.ulster.ac.uk/en/persons/%globals_asset_metadata_Staff.Forename^escapequotes^lowercase^replace:\':^replace: :-%-%globals_asset_metadata_Staff.Surname^escapequotes^lowercase^replace:\':^replace: :-%" class="btn btn-primary"><i class="fa fa-graduation-cap" aria-hidden="true"></i> View full academic profile</a>');
    }
  }
}
