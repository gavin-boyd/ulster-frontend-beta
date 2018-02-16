function breadcrumbOutput(theArray) {
  if (theArray.length > 0) {
    var output = '';
    var total = theArray.length;
    output += '<nav aria-label="You are here:" role="navigation">';
      output += '<ul class="breadcrumbs">"';
      for (i = 0; i < theArray.length; i++) {
        var position = i + 1;
        var last = 'False';
        var obj = theArray[i];
        if (position == total) {
          last = 'True';
        }
        output += '<li><a href="' + obj.url + '">' + obj.title + '</a></li>';
      }
      output += '</ul>';
    output += '</nav>';
    print(output);
  }
}
breadcrumbOutput(breadcrumbArray);
