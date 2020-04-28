var json = eval('(' + _REST.response.body + ')');
if (json) {
  var tweets = json['statuses'];
  var output = '';
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
  print(output);
}
