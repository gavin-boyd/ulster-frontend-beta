var res = _REST.response.body;
var month_name = function(dt) {
  mlist = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
  return mlist[dt.getMonth()];
}
if (res) {
  res = eval('(' + res + ')');
  res = res.rows;
  var output = '';
  var eventsArray = [];
  for (i = 0; i < res.length; i++) {
    var today = new Date();
    var event_start = new Date(res[i][4]);
    //if event is upcoming
    if (event_start.getTime() >= today.getTime()) {
      var event_id = res[i][0];
      var event_title = res[i][1];
      var url_title = event_title.toLowerCase().replace(' ', '-');
      var event_end = new Date(res[i][5]);
      var event_url = 'https://phdmanager.ulster.ac.uk/' + event_id + '/' + url_title;
      var sort_val = event_start.getTime();
      var start_month_name = month_name(event_start);
      var start_day = event_start.getDate();
      var start_mins = event_start.getMinutes();
      if (start_mins == 0) {
        start_mins = '00';
      }
      var start_year = event_start.getFullYear();
      var start_time = event_start.getHours() + ':' + start_mins;
      var end_mins = event_end.getMinutes();
      if (end_mins == 0) {
        end_mins = '00';
      }
      var end_time = event_end.getHours() + ':' + end_mins;
      eventsArray.push({
        id:  event_id,
        title: event_title,
        url: event_url,
        start: event_start,
        start_date: start_day + ' ' + start_month_name + ' ' + start_year,
        start_time: start_time,
        end_time: end_time,
        end: event_end,
        sort: sort_val
      });
    }
  }
  eventsArray.sort(function(a, b) {
    return a.sort - b.sort;
  });
  for (x = 0; x < eventsArray.length; x++) {
    output += '<div class="grid-x">';
    output += '<div class="cell large-12 m-b-30">';
    output += '<h3 class="m-b-0"><a href="' + eventsArray[x].url + '">' + eventsArray[x].title + '</a></h3>';
    output += '<p class="m-b-0">' + eventsArray[x].start_date + ', ' + eventsArray[x].start_time + ' to ' + eventsArray[x].end_time + '</p>';
    output += '</div>';
    output += '</div>';
  }
  print(output);
} else {
    print('<p>No upcoming.</p>');
}
