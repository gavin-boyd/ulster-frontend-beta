var res = eval('(' + _REST.response.body + ')');
if (res) {
  function personBreadcrumb() {
    var code = '%globals_asset_metadata_Staff.Org.Code%';
    print('<div class="grid-container">' +
           '<nav aria-label="You are here:" role="navigation">' +
           '<ul class="breadcrumbs">' +
           '<li>' +
           '<a href="https://www.ulster.ac.uk/departments">Ulster University Departments</a>' +
           '</li>');
    for (i = 0; i < res.length; i++) {
      if (
        code == res[i].codeone ||
        code == res[i].codetwo ||
        code == res[i].codethree ||
        code == res[i].codefour ||
        code == res[i].codefive ||
        code == res[i].codesix ||
        code == res[i].codeseven ||
        code == res[i].codeeight ||
        code == res[i].codenine ||
        code == res[i].codeten ||
        code == res[i].codeeleven ||
        code == res[i].codetwelve
      ) {
        print('<li><a href="' + res[i].url + '">' + res[i].name + '</a></li>')
      }
    }
    print('<li><a href="%globals_asset_url%">%globals_asset_name^escapequotes%</a></li></ul></nav></div>');
  }
  personBreadcrumb();
}
