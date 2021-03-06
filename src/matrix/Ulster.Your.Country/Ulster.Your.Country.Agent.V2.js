var res = eval('(' + _REST.response.body + ')');
if (res) {
  function yourCountryAgents() {
    var country_code = "%globals_asset_metadata_Content.Tagging.Country_key%";
    var output = '';
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
              output += '<div class="grid-x grid-margin-x">';
                output += '<div class="cell small-12 medium-2 large-1 text-center">';
                  output += '<img src="' + res[i].image + '" alt="' + res[i].full_name + '" class="circle shadow">';
                output += '</div>';
                output += '<div class="cell small-12 medium-10 large-11">';
                  output += '<div class="">';
                    output += '<p class="bl m-b-0">';
                      output += res[i].prospectus_intro;
                    output += '</p>';
                    output += '<p>';
                      output += res[i].prospectus_content;
                    output += '</p>';
                    output += '<p class="m-b-0">';
                    if (Array.isArray(agent_country_contact_type_array)) {
                      var agent_country_contact_type_string = agent_country_contact_type_array.toString();
                      //WhatsApp
                      if (res[i].phone !== '' && agent_country_contact_type_string.indexOf('whats-app') !== -1) {
                        var mobile = res[i].phone;
                        mobile = mobile.replace(/\s/g, '');
                        mobile = mobile.replace('+', '');
                        output += '<a href="https://api.whatsapp.com/send?phone=' + mobile + '" class="button rounded shadow m-b-0"><span class="fa fa-whatsapp" aria-hidden="true"></span>&nbsp;&nbsp;WhatsApp</a>&nbsp;';
                        //output += '<a href="#" class="button large expanded"><i class="fa fa-weixin" aria-hidden="true"></i> WeChat</a>';
                      }
                      //Email
                      if (res[i].email !== '' && agent_country_contact_type_string.indexOf('email') !== -1) {
                        var email = res[i].email;
                        output += '<a href="mailto:' + email + '" class="button rounded shadow m-b-0"><span class="fa fa-envelope-o" aria-hidden="true"></span>&nbsp;&nbsp;Email</a>&nbsp;';
                      }
                      //Facebook
                      if (res[i].facebook !== '' && agent_country_contact_type_string.indexOf('facebook') !== -1) {
                        output += '<a href="https://m.me/' + res[i].facebook + '" class="button rounded shadow m-b-0" target="_blank><span class="fa fa-facebook" aria-hidden="true"></span>&nbsp;&nbsp;Facebook</a>&nbsp;';
                      }
                      //Phone
                      if (res[i].phone !== '' && agent_country_contact_type_string.indexOf('phone') !== -1)  {
                        var mobileOnly = res[i].phone;
                        var mobileOnlyValue = res[i].phone;
                        mobileOnly = mobileOnly.replace(/\s/g, '');
                        mobileOnly = mobileOnly.replace('+', '');
                        output += '<a href="tel:' + mobileOnly + '" class="button rounded shadow m-b-0"><span class="fa fa-phone" aria-hidden="true"></span>&nbsp;&nbsp;Call ' + mobileOnlyValue + '</a>&nbsp;';
                      }
                    } else {
                      //WhatsApp
                      if (res[i].phone !== '' && agent_country_contact_type_array == 'whats-app') {
                        var mobile = res[i].phone;
                        mobile = mobile.replace(/\s/g, '');
                        mobile = mobile.replace('+', '');
                        output += '<a href="https://api.whatsapp.com/send?phone=' + mobile + '" class="button rounded shadow m-b-0"><span class="fa fa-whatsapp" aria-hidden="true"></span>&nbsp;&nbsp;WhatsApp</a>&nbsp;';
                        //output += '<a href="#" class="button large expanded"><i class="fa fa-weixin" aria-hidden="true"></i> WeChat</a>';
                      }
                      //Email
                      if (res[i].email !== '' && agent_country_contact_type_array == 'email') {
                        var email = res[i].email;
                        output += '<a href="mailto:' + email + '" class="button rounded shadow m-b-0"><span class="fa fa-envelope-o" aria-hidden="true"></span>&nbsp;&nbsp;Email</a>&nbsp;';
                      }
                      //Facebook
                      if (res[i].facebook !== '' && agent_country_contact_type_array == 'facebook') {
                        output += '<a href="https://m.me/' + res[i].facebook + '" class="button rounded shadow m-b-0" target="_blank><span class="fa fa-facebook" aria-hidden="true"></span>&nbsp;&nbsp;Facebook</a>&nbsp;';
                      }
                      //Phone
                      if (res[i].phone !== '' && agent_country_contact_type_array == 'phone') {
                        var mobileOnly = res[i].phone;
                        var mobileOnlyValue = res[i].phone;
                        mobileOnly = mobileOnly.replace(/\s/g, '');
                        mobileOnly = mobileOnly.replace('+', '');
                        output += '<a href="tel:' + mobileOnly + '" class="button rounded shadow m-b-0"><span class="fa fa-phone" aria-hidden="true"></span>&nbsp;&nbsp;Call ' + mobileOnlyValue + '</a>&nbsp;';
                      }
                    }
                    output += '</p>';
                  output += '</div>';
                output += '</div>';
            output += '</div>';
            output += '<hr>';
          total++;
          print(output);
        }
      }
    }
    if (total > 0) {
      print('<style>#regional-agent-menu-item{display:block !important;}</style>');
    }
  }
  yourCountryAgents();
}
