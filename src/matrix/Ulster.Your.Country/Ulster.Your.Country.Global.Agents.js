var res = eval('(' + _REST.response.body + ')');
if (res) {
  function yourContryGlobalAgents() {
    var country_code = "%globals_asset_metadata_Content.Tagging.Country_key%";
    var output = '<section id="agentcontacts" data-magellan-target="agentcontacts">';
    var title = '';
    var total = 0;
    for (i = 0; i < res.length; i++) {
      var global_agent_country_code = res[i].country;
      if (global_agent_country_code.indexOf(';') !== -1) {
        var global_agent_country_code_array = global_agent_country_code.split('; ');
        var length = global_agent_country_code_array.length;
      } else {
        var global_agent_country_code_array = global_agent_country_code;
        var length = 1;
      }
      for (x = 0; x < length; x++) {
        if (length == 1) {
          var global_agent_code = global_agent_country_code_array;
        } else {
          var global_agent_code = global_agent_country_code_array[x];
        }
        global_agent_code = String(global_agent_code);
        var contact_name = res[i].contact_name;
        var email = res[i].email;
        var name = res[i].name;
        var phone = res[i].phone;
        var address = res[i].address;
        if (country_code == global_agent_code) {
          output += '<div class="grid-x">';
            output += '<div class="cell medium-12">';
              output += '<div class="shadow card card-section">';
                output += '<h3>';
                  output += '<span class="display-block">' + name + '</span> ' + contact_name;
                output += '</h3>';
                output += '<ul class="m-l-0 m-b-0 menu no-bullet">';
                  if (email !== '') {
                    output += '<li class="m-r-10"><a href="mailto:"' + email + '"><span class="fas fa-envelope" aria-hidden="true"></span>&nbsp;&nbsp;' + email + '</a></li>';
                  }
                  if (phone !== '') {
                    output += '<li class="m-r-10"><a href="tel:' + phone + '"><span class="fas fa-phone" aria-hidden="true"></span>&nbsp;&nbsp;Call ' + phone + '</a></li>';
                  }
                output += '</ul>';
                if (address !== '') {
                  output += '<h4 class="m-b-0">Address:</h4>';
                }
                output += address;
              output += '</div>';
            output += '</div>';
          output += '</div>';
          total++;
        }
      }
    }
    if (total > 0) {
      title += '<hr><h2>Local representatives for %globals_asset_name%</h2><br>';
      print(title);
      print('<style>#global-agent-menu-item{display:block !important;}</style>');
    }
    output += '</section>';
    print(output);
  }
  yourContryGlobalAgents();
}
