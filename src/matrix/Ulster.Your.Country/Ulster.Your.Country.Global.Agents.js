var res = eval('(' + _REST.response.body + ')');
if (res) {
  function yourContryGlobalAgents() {
    var country_code = "%globals_asset_metadata_Content.Tagging.Country_key%";
    var output = '<section id="agentcontacts" data-magellan-target="agentcontacts">';
    var title = '';
    var total = 0;
    showNavitem = false;
    for (i = 0; i < res.length; i++) {
      var agent_country_code = res[i].country;
      if (agent_country_code.indexOf(';') !== -1) {
        var agent_country_code_array = agent_country_code.split('; ');
      } else {
        var agent_country_code_array = agent_country_code;
      }
      for (x = 0; x < agent_country_code_array.length; x++) {
        var agent_code = agent_country_code_array[x];
        agent_code = String(agent_code);
        var contact_name = res[i].contact_name;
        var email = res[i].email;
        var name = res[i].name;
        if (country_code == agent_code) {
          output += '<div class="grid-x grid-padding-x grid-padding-y">';
            output += '<div class="cell medium-12">';
              output += '<div class="shadow card card-section">';
                output += '<h2 class="h4">';
                  output += '<small>' + name + '</small><br>' + contact_name;
                output += '</h2>';
                if (email !== '') {
                  output += '<p><a href="mailto:"' + email + '"><i class="fa fa-envelope" aria-hidden="true"></i>&nbsp;&nbsp;' + email + '</a></p>';
                }
              output += '</div>';
            output += '</div>';
          output += '</div>';
          total++;
        }
      }
    }
    if (total > 0) {
      title += '<hr><h2>Global Agents - %globals_asset_name%</h2><br>';
      print(title);
      showNavitem = true;
    }
    output += '</section>';
    print(output);
  }
  yourContryGlobalAgents();
}
