function uuconnectSocial() {
  var statuses = eval('(' + _REST.response.body + ')');
  if (statuses) {
      for (i = 0; i < statuses.length; i++) {
          var account = statuses[i].user.screen_name;
          var text = statuses[i].text;
          var created = statuses[i].created_at;
          var expanded_url = 'https://twitter.com/' + account + '/status/' + statuses[i].id_str;
          if (text ) {
            if (i == 0) {
              print('<li class="orbit-slide is-active">');
            } else {
              print('<li class="orbit-slide">');
            }
            print('<div class="p-l-60 p-r-60 p-small-l-0 p-small-r-0">');
            print('<a href="' + expanded_url + '" target="_blank">');
            print('<span class="bl" style="color:#00B5E2">@' + account + '</span>');
            print('<br>');
            print('<span class="white-text"><span>' + text + '</span></span>');
            print('</div>');
            print('</a>');
            print('</li>');
          }
          if (i == 3) {
            break;
          }
      }
  }
}
uuconnectSocial();
