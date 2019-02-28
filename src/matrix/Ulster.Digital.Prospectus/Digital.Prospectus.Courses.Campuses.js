var res = eval('(' + _REST.response.body + ')');
if (res) {
  function outputCampusLinksForCourses() {
    Array.prototype.unique = function() {
      return this.filter(function (value, index, self) {
        return self.indexOf(value) === index;
      });
    }
    var campusArray = [];
    for (i = 0; i < res.length; i++) {
      var campus = res[i].campus;
      campusArray.push(campus);
    }
    campusArray = campusArray.unique();
    campusArray = campusArray.sort();
    var output = '<ul class="angle-right">';
    for (x = 0; x < campusArray.length; x++) {
      output += '<li>';
      if (campusArray[x] == 'Belfast') {
        output += '<a href="%globals_asset_url:256367%">' + campusArray[x] + ' campus - view campus information</a>';
      }
      if (campusArray[x] == 'Coleraine') {
        output += '<a href="%globals_asset_url:256371%">' + campusArray[x] + ' campus - view campus information</a>';
      }
      if (campusArray[x] == 'Jordanstown') {
        output += '<a href="%globals_asset_url:256375%">' + campusArray[x] + ' campus - view campus information</a>';
      }
      if (campusArray[x] == 'Magee') {
        output += '<a href="%globals_asset_url:256379%">' + campusArray[x] + ' campus - view campus information</a>';
      }
      output += '</li>';
    }
    output += '</ul>';
    print(output);
  }
}
outputCampusLinksForCourses();
