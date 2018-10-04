var res = eval('(' + _REST.response.body + ')');
if (res) {
  function yourCountryAgentsEmailButton() {
    var country_code = "%globals_asset_metadata_Ulster.Capture.Country_key%";
    var output = '';
    var final_output = '';
    var showGeneric = [];
    var total = 0;
    for (i = 0; i < res.length; i++) {
      var agent_country_code = res[i].country_code;
      var agent_contact_types = res[i].contact_type;
      var agent_country_code_array = agent_country_code.split('; ');
      if (agent_contact_types.indexOf(';') !== -1) {
        var agent_country_contact_type_array = agent_contact_types.split('; ');
      } else {
        var agent_country_contact_type_array = agent_contact_types;
      }
      for (x = 0; x < agent_country_code_array.length; x++) {
        var agent_code = agent_country_code_array[x];
        agent_code = String(agent_code);
        if (country_code == agent_code) {
          showGeneric.push('true');
          if (Array.isArray(agent_country_contact_type_array)) {
            var agent_country_contact_type_string = agent_country_contact_type_array.toString();
            //Email
            if (res[i].email !== '' && agent_country_contact_type_string.indexOf('email') !== -1) {
              var email = res[i].email;
              output += '<a href="mailto:' + email + '" class="button hollow" id="email-agent"><span class="fa fa-user-circle-o" aria-hidden="true"></span>&nbsp;&nbsp;&nbsp;&nbsp;Contact an Advisor</a>';
            }
          } else {
            //Email
            if (res[i].email !== '' && agent_country_contact_type_array == 'email') {
              var email = res[i].email;
              output += '<a href="mailto:' + email + '" class="button hollow" id="email-agent"><span class="fa fa-user-circle-o" aria-hidden="true"></span>&nbsp;&nbsp;&nbsp;&nbsp;Contact an Advisor</a>';
            }
          }
          total++;
        }
      }
    }
    if (total > 0) {
      final_output += '<li>';
      final_output += output;
      final_output += '</li>';
      print(final_output);
    }
  }
  yourCountryAgentsEmailButton();
}
