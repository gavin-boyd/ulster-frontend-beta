jQuery(document).ready(function() {
  function getParam(param) {
    var pageURL = window.location.search.substring(1);
    var urlParams = pageURL.split('&');
    for (var i = 0; i < urlParams.length; i++) {
        var paramName = urlParams[i].split('=');
        if (paramName[0] == param)
        {
            return paramName[1];
        }
    }
  }
  var id = getParam('u');
  if (id !== null || id !== '') {
    jQuery.getJSON('http://dct.ulster.ac.uk/welcomeweek/feeds/test.json', function(result) {
      var user = result.filter(function(item) {
        return item.id == id;
      });
    });
  }
});
