function globalReviewsSubjects() {
  var res = eval('(' + _REST.response.body + ')');
  Array.prototype.unique = function() {
    return this.filter(function (value, index, self) {
      return self.indexOf(value) === index;
    });
  }
  if (res) {
    var allSchoolsArray = [];
    var output = '<div class="grid-container filter-subject"><p>Filter by subject:</p><ul class="angle-right columns">';
    for (i = 0; i < res.length; i++) {
      var school = res[i].tag_faculty_school;
      var schoolArray = school.split('; ');
      for (x = 0; x < schoolArray.length; x++) {
        allSchoolsArray.push(schoolArray[x]);
      }
    }
    allSchoolsArray = allSchoolsArray.unique();
    var sortedArray = [];
    for (u = 0; u < allSchoolsArray.length; u++) {
      if (allSchoolsArray[u] !== '') {
        var subject = allSchoolsArray[u];
        subject = subject.replace('Department of ', '');
        subject = subject.replace('Faculty - ', '');
        subject = subject.replace('School of ', '');
        subject = subject.replace('Belfast ', '');
        subject = subject.replace('(', '');
        subject = subject.replace(')', '');
        sortedArray.push(subject);
      }
    }
    sortedArray = sortedArray.sort();
    for (g = 0; g < sortedArray.length; g++) {
      var filter = sortedArray[g].toLowerCase();
      filter = filter.replace(/\s/g, '-');
      filter = filter.replace(',', '');
      output += '<li><a href="#" data-filter=".' + filter + '">' + sortedArray[g] + '</a></li>';
    }
    output += '</ul></div>';
    print(output);
  }
}
globalReviewsSubjects();
