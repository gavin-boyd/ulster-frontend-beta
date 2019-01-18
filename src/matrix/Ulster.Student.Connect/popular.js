var res = eval('(' + _REST.response.body + ')');
if (res) {
  function displayPopularSearches() {
    var output = '';
    output += '<h2>Popular search terms</h2>';
    output += '<ul class="angle-right">';
    for (i = 0; i < res.data.queries.length; i++) {
      var query = res.data.queries[i].query;
      var count = res.data.queries[i].query;
      if (query !== '!nullquery') {
        output += '<li><a href="https://www.ulster.ac.uk/student-connect?query=' + query + '">' + query + '</a></li>';
      }
    }
    output += '</ul>';
    print(output);
  }
  displayPopularSearches();
}
