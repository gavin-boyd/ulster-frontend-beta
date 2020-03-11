var json = eval('(' + _REST.response.body + ')');
if (json) {
  var tweets = json['statuses'];
  var output = '';
  for (var i = 0; i < tweets.length; i++) {
    var text = tweets[i]['text'];
    var url = 'https://twitter.com/' + tweets[i]['user']['screen_name'] + '/status/' + tweets[i]['id_str'];
    var accUrl = 'https://twitter.com/' + tweets[i]['user']['screen_name'];
    output += '<a href="' + url + '" class="display-block bg-core-blue p-l-15 p-r-15 p-t-10 p-b-10 text-white bl m-b-20" target="_blank">';
    output += '<div class="grid-x">';
    output += '<div class="cell small-2 medium-2 large-2">';
    output += '<span class="fab fa-twitter m-r-10"></span>Latest Tweet';
    output += '</div>';
    output += '<div class="cell small-10 medium-10 large-10">';
    output += text;
    output += '</div>';
    output += '</div>';
    output += '</a>';
    if (i == 0) {
      break;
    }
  }
  print(output);
}
