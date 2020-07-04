var json = eval('(' + _REST.response.body + ')');
if (json) {
  var tweets = json['statuses'];
  var output = '';
  if (tweets.length > 0) {
    output += '<div class="grid-x grid-margin-x">';
    output += '<div class="cell small-12 medium-3 large-3">'
    output += '<h2 class="h2"><span class="fab fa-twitter m-r-10"></span>Latest Tweets</h2>';
    output += '</div>';
    output += '<div class="cell small-12 medium-9 large-9">';
    for (var i = 0; i < tweets.length; i++) {
      var text = tweets[i]['text'];
      var url = 'https://twitter.com/' + tweets[i]['user']['screen_name'] + '/status/' + tweets[i]['id_str'];
      var accUrl = 'https://twitter.com/' + tweets[i]['user']['screen_name'];
      output += '<a href="' + url + '" class="display-block bl m-b-20" target="_blank">';
      output += text;
      output += '</a>';
      if (i == 3) {
        break;
      }
    }
    output += '</div>';
    output += '</div>';
    print(output);
  }

}
