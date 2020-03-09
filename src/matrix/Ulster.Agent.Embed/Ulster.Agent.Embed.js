var res = eval('(' + _REST.response.body + ')');
if (res) {
  function yourCountryAgents() {
    var country_code = "%globals_asset_metadata_Content.Tagging.Country%";
    var output = '';
    var final_output = '';
    var level = '%globals_asset_metadata_Ulster.Course.Type_value%';
    //debug
    print('<h1>' + level + '</h1>');
    var showGeneric = [];
    var total = 0;
    for (i = 0; i < res.length; i++) {
      if (level == 'Undergraduate') {
        var agent_country_code = res[i].ug_country_code;
      }
      if (level == 'Postgraduate') {
        var agent_country_code = res[i].pg_country_code;
      }
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
            output += '<div class="shadow card card-section radius m-b-0 p-t-30 p-r-30 p-l-30">';
              output += '<div class="grid-x">';
                output += '<div class="cell small-12 medium-3 large-3 text-center">';
                  output += '<img src="' + res[i].image + '" alt="' + res[i].full_name + '" class="circle shadow" style="max-width:170px;">';
                output += '</div>';
                output += '<div class="cell small-12 medium-9 large-9">';
                  output += '<div class="featured-testimonials-quotation">';
                    output += '<h2 class="h4">';
                      output += res[i].prospectus_intro;
                    output += '</h2>';
                    output += '<p>';
                      output += res[i].prospectus_content;
                    output += '</p>';
                    output += '<p>';
                    if (Array.isArray(agent_country_contact_type_array)) {
                      var agent_country_contact_type_string = agent_country_contact_type_array.toString();
                      //WhatsApp
                      if (res[i].phone !== '' && agent_country_contact_type_string.indexOf('whats-app') !== -1) {
                        var mobile = res[i].phone;
                        mobile = mobile.replace(/\s/g, '');
                        mobile = mobile.replace('+', '');
                        output += '<a href="https://api.whatsapp.com/send?phone=' + mobile + '" class="button rounded shadow"><i class="fa fa-whatsapp" aria-hidden="true"></i>&nbsp;&nbsp;WhatsApp</a>&nbsp;';
                        //output += '<a href="#" class="button large expanded"><i class="fa fa-weixin" aria-hidden="true"></i> WeChat</a>';
                      }
                      //Email
                      if (res[i].email !== '' && agent_country_contact_type_string.indexOf('email') !== -1) {
                        var email = res[i].email;
                        output += '<a href="mailto:' + email + '" class="button rounded shadow" id="email-agent"><i class="fa fa-envelope-o" aria-hidden="true"></i>&nbsp;&nbsp;Email</a>&nbsp;';
                      }
                      //Facebook
                      if (res[i].facebook !== '' && agent_country_contact_type_string.indexOf('facebook') !== -1) {
                        output += '<a href="https://m.me/' + res[i].facebook + '" class="button rounded shadow" target="_blank><i class="fa fa-facebook" aria-hidden="true"></i>&nbsp;&nbsp;Facebook</a>&nbsp;';
                      }
                      //Phone
                      if (res[i].phone !== '' && agent_country_contact_type_string.indexOf('phone') !== -1)  {
                        var mobileOnly = res[i].phone;
                        var mobileOnlyValue = res[i].phone;
                        mobileOnly = mobileOnly.replace(/\s/g, '');
                        mobileOnly = mobileOnly.replace('+', '');
                        output += '<a href="tel:' + mobileOnly + '" class="button rounded shadow"><span class="fa fa-phone" aria-hidden="true"></span>&nbsp;&nbsp;Call ' + mobileOnlyValue + '</a>&nbsp;';
                      }
                      //Landline
                      if (res[i].landline !== '' && agent_country_contact_type_string.indexOf('landline') !== -1)  {
                        var landlineOnly = res[i].landline;
                        var landlineOnlyValue = res[i].landline;
                        landlineOnly = landlineOnly.replace(/\s/g, '');
                        landlineOnly = landlineOnly.replace('+', '');
                        output += '<a href="tel:' + landlineOnly + '" class="button rounded shadow"><span class="fa fa-phone" aria-hidden="true"></span>&nbsp;&nbsp;Call ' + landlineOnlyValue + '</a>&nbsp;';
                      }
                    } else {
                      //WhatsApp
                      if (res[i].phone !== '' && agent_country_contact_type_array == 'whats-app') {
                        var mobile = res[i].phone;
                        mobile = mobile.replace(/\s/g, '');
                        mobile = mobile.replace('+', '');
                        output += '<a href="https://api.whatsapp.com/send?phone=' + mobile + '" class="button rounded shadow"><i class="fa fa-whatsapp" aria-hidden="true"></i>&nbsp;&nbsp;WhatsApp</a>&nbsp;';
                        //output += '<a href="#" class="button large expanded"><i class="fa fa-weixin" aria-hidden="true"></i> WeChat</a>';
                      }
                      //Email
                      if (res[i].email !== '' && agent_country_contact_type_array == 'email') {
                        var email = res[i].email;
                        output += '<a href="mailto:' + email + '" class="button rounded shadow" id="email-agent"><i class="fa fa-envelope-o" aria-hidden="true"></i>&nbsp;&nbsp;Email</a>&nbsp;';
                      }
                      //Facebook
                      if (res[i].facebook !== '' && agent_country_contact_type_array == 'facebook') {
                        output += '<a href="https://m.me/' + res[i].facebook + '" class="button rounded shadow" target="_blank><i class="fa fa-facebook" aria-hidden="true"></i>&nbsp;&nbsp;Facebook</a>&nbsp;';
                      }
                      //Phone
                      if (res[i].phone !== '' && agent_country_contact_type_array == 'phone') {
                        var mobileOnly = res[i].phone;
                        var mobileOnlyValue = res[i].phone;
                        mobileOnly = mobileOnly.replace(/\s/g, '');
                        mobileOnly = mobileOnly.replace('+', '');
                        output += '<a href="tel:' + mobileOnly + '" class="button rounded shadow"><span class="fa fa-phone" aria-hidden="true"></span>&nbsp;&nbsp;Call ' + mobileOnlyValue + '</a>&nbsp;';
                      }
                    }
                    output += '</p>';
                  output += '</div>';
                output += '</div>';
            output += '</div>';
          output += '</div>';
          total++;
        }
      }
    }
    if (total > 0) {
      final_output += '<div class="grid-container p-t-30 p-b-30">';
      final_output += '<div class="grid-x">';
      final_output += '<div class="cell large-12">';
      final_output += output;
      final_output += '</div>';
      final_output += '</div>';
      final_output += '</div>';
      //print('<style>#regional-agent-menu-item{display:block !important;}</style>');
      print(final_output);
    }
  }
  yourCountryAgents();
}
