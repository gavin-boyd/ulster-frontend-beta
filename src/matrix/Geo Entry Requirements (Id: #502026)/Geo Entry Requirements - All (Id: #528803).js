var res = eval('(' + _REST.response.body + ')');
var countryCode = '%globals_session_ulscountryfb^json_decode^index:country%';
//var countryCode = 'CN';
if (res &&  countryCode !== '') {
  var output = '';
  for (i = 0; i < res.length; i++) {
    if (res[i].country_code == countryCode) {
      //var courseLevel = '%globals_asset_metadata_Courses.New.Study.Level%';
      var name = res[i].name;
      var ugEntry = res[i].ug_entry;
      var pgEntry = res[i].pg_entry;
      var engTop = res[i].additional_english_lang_top;
      var engBottom = res[i].additional_english_lang_bottom;
      var url = res[i].url;
      output += '<div class="callout">';
      output += '<h2 class="h2">';
      output += '<img src="https://cdn.ulster.ac.uk/home/ulster-frontend/beta/assets/img/svg-country-flags/' + countryCode.toLowerCase() + '.svg" alt="' + name + ' flag" class="thumbnail m-r-10" width="60" />';
      output += 'Additional information for students from ' + name + '</h2>';
      //if (ugEntry && courseLevel == 'Undergraduate') {
        output += '<p class="bl">Undergraduate</p>';
        output += '<p>Each programme will have slightly different requirements, both in terms of overall points and certain subjects, so please check the relevant subject in the undergraduate on-line prospectus.</p>';
        output += '<p>Normally Ulster University welcomes applications from students with:</p>';
        output += ugEntry;
      //}
      //if (ugEntry && courseLevel == 'Postgraduate') {
        output += '<p class="bl">Postgraduate</p>';
        output += '<p>Typically we require applicant for taught programmes to hold the equivalent of a UK first degree (usually in a relevant subject area). Please refer to the specific entry requirements for your chosen course of study as outlined in the online prospectus. We consider students who have good grades in the following:</p>';
        output += pgEntry;
      //}
      if (engTop !== "null" || engBottom !== "<p></p>") {
         output += '<p class="bl">English Language</p>';
      }
      if (engTop !== "null") {
        output += engTop;
      }
      if (engBottom !== "<p></p>") {
        output += engBottom;
      }
      output += '<p class="m-b-0"><a href="' + url + '" target="_blank" class="button m-b-0">View more information for students from ' + name + '&nbsp;&nbsp;<span class="fas fa-angle-right" aria-hidden="true"></span></a></p>';
      output += '</div>';
    }
  }
  print(output);
}
