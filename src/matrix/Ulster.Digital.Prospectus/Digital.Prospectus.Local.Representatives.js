var res = eval('(' + _REST.response.body + ')');
if (res) {
  function yourContryGlobalAgents() {
    var country_code = "%globals_asset_metadata_Ulster.Capture.Country_key%";
    var output = '';
    var final_output = '';
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
          output += '<div class="cell small-12 medium-6 large-6">';
            output += '<div class="shadow card card-section m-b-0">';
              output += '<h2 class="h4">';
                output += '<span class="h6">' + name + '</span><br>' + contact_name;
              output += '</h2>';
              output += '<p>';
                if (email !== '') {
                  output += '<a href="mailto:"' + email + '"><i class="fa fa-envelope" aria-hidden="true"></i>&nbsp;&nbsp;' + email + '</a>';
                }
                if (phone !== '' && email !== '') {
                  output += '&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;';
                }
                if (phone !== '') {
                  output += '<a href="tel:' + phone + '"><i class="fa fa-phone" aria-hidden="true"></i>&nbsp;&nbsp;Call ' + phone + '</a>';
                }
              output += '</p>';
              if (address !== '') {
                output += '<p class="no-margin-bottom"><strong>Address:</strong></p>';
              }
              output += address;
            output += '</div>';
          output += '</div>';
          total++;
        }
      }
    }
    if (total > 0) {
      final_output += '<section id="agentcontacts" data-magellan-target="agentcontacts">';
        final_output += '<div class="grid-container">';
          final_output += '<div class="grid-x grid-padding-x grid-padding-y">';
            final_output += '<div class="cell large-12">';
              final_output += '<hr>';
              final_output += '<h2 class="h1 separator-left">Local representatives for %globals_asset_metadata_Ulster.Capture.Country_value%</h2>';
            final_output += '</div>';
            final_output += output;
          final_output += '</div>';
        final_output += '</div>';
      final_output += '</section>';
      final_output += '<style>#global-agent-menu-item{display:block !important;}</style>';
    }
    print(final_output);
  }
  yourContryGlobalAgents();
}
