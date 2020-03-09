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
            output += '<div class="shadow card card-section radius">';
              output += '<div class="grid-x grid-margin-x">';
                output += '<div class="cell small-12 medium-3 large-3">';
                  output += '<img src="' + res[i].image + '" alt="' + res[i].full_name + '" class="circle shadow" style="max-width:170px;">';
                output += '</div>';
                output += '<div class="cell small-12 medium-9 large-9">';
                  output += '<div class="">';
                    output += '<p class="bl m-b-0">';
                      output += res[i].prospectus_intro;
                    output += '</p>';
                    output += '<p>';
                      output += res[i].prospectus_content;
                    output += '</p>';
                    output += '<ul class="m-l-0 m-b-0 menu no-bullet">';
                    if (Array.isArray(agent_country_contact_type_array)) {
                      var agent_country_contact_type_string = agent_country_contact_type_array.toString();
                      //WhatsApp
                      if (res[i].phone !== '' && agent_country_contact_type_string.indexOf('whats-app') !== -1) {
                        var mobile = res[i].phone;
                        mobile = mobile.replace(/\s/g, '');
                        mobile = mobile.replace('+', '');
                        output += '<li class="m-r-10"><a href="https://api.whatsapp.com/send?phone=' + mobile + '" class="button rounded shadow m-b-0"><span class="fa fa-whatsapp" aria-hidden="true"></span>&nbsp;&nbsp;WhatsApp</a></li>';
                        //output += '<a href="#" class="button large expanded"><i class="fa fa-weixin" aria-hidden="true"></i> WeChat</a>';
                      }
                      //Email
                      if (res[i].email !== '' && agent_country_contact_type_string.indexOf('email') !== -1) {
                        var email = res[i].email;
                        output += '<li class="m-r-10"><a href="mailto:' + email + '" class="button rounded shadow m-b-0"><span class="fa fa-envelope-o" aria-hidden="true"></span>&nbsp;&nbsp;Email</a></li>';
                      }
                      //Facebook
                      if (res[i].facebook !== '' && agent_country_contact_type_string.indexOf('facebook') !== -1) {
                        output += '<li class="m-r-10"><a href="https://m.me/' + res[i].facebook + '" class="button rounded shadow m-b-0" target="_blank><span class="fa fa-facebook" aria-hidden="true"></span>&nbsp;&nbsp;Facebook</a></li>';
                      }
                      //Phone
                      if (res[i].phone !== '' && agent_country_contact_type_string.indexOf('phone') !== -1)  {
                        var mobileOnly = res[i].phone;
                        var mobileOnlyValue = res[i].phone;
                        mobileOnly = mobileOnly.replace(/\s/g, '');
                        mobileOnly = mobileOnly.replace('+', '');
                        output += '<li class="m-r-10"><a href="tel:' + mobileOnly + '" class="button rounded shadow m-b-0"><span class="fa fa-phone" aria-hidden="true"></span>&nbsp;&nbsp;Call ' + mobileOnlyValue + '</a></li>';
                      }
                    } else {
                      //WhatsApp
                      if (res[i].phone !== '' && agent_country_contact_type_array == 'whats-app') {
                        var mobile = res[i].phone;
                        mobile = mobile.replace(/\s/g, '');
                        mobile = mobile.replace('+', '');
                        output += '<li class="m-r-10"><a href="https://api.whatsapp.com/send?phone=' + mobile + '" class="button rounded shadow m-b-0"><span class="fa fa-whatsapp" aria-hidden="true"></span>&nbsp;&nbsp;WhatsApp</a></li>';
                        //output += '<a href="#" class="button large expanded"><i class="fa fa-weixin" aria-hidden="true"></i> WeChat</a>';
                      }
                      //Email
                      if (res[i].email !== '' && agent_country_contact_type_array == 'email') {
                        var email = res[i].email;
                        output += '<li class="m-r-10"><a href="mailto:' + email + '" class="button rounded shadow m-b-0"><span class="fa fa-envelope-o" aria-hidden="true"></span>&nbsp;&nbsp;Email</a></li>';
                      }
                      //Facebook
                      if (res[i].facebook !== '' && agent_country_contact_type_array == 'facebook') {
                        output += '<li class="m-r-10"><a href="https://m.me/' + res[i].facebook + '" class="button rounded shadow m-b-0" target="_blank><span class="fa fa-facebook" aria-hidden="true"></span>&nbsp;&nbsp;Facebook</a></li>';
                      }
                      //Phone
                      if (res[i].phone !== '' && agent_country_contact_type_array == 'phone') {
                        var mobileOnly = res[i].phone;
                        var mobileOnlyValue = res[i].phone;
                        mobileOnly = mobileOnly.replace(/\s/g, '');
                        mobileOnly = mobileOnly.replace('+', '');
                        output += '<li class="m-r-10"><a href="tel:' + mobileOnly + '" class="button rounded shadow m-b-0"><span class="fa fa-phone" aria-hidden="true"></span>&nbsp;&nbsp;Call ' + mobileOnlyValue + '</a><li>';
                      }
                    }
                    output += '</ul>';
                  output += '</div>';
                output += '</div>';
            output += '</div>';
          output += '</div>';
          total++;
          print(output);
        }
      }
    }
    if (total > 0) {
      print('<style>#regional-agent-menu-item{display:block !important;}</style>');
    }
    /*if (showGeneric.indexOf('true') == -1) {
      var outputTwo = '';
      outputTwo += '<div class="">';
        outputTwo += '<div class="grid-container">';
          outputTwo += '<div class="grid-x grid-padding-x grid-padding-y">';
            outputTwo += '<div class="cell medium-12">';
              outputTwo += '<br><br>';
              outputTwo += '<h2 class="h1">Hi %globals_asset_metadata_Ulster.Capture.First.Name^escapequotes%, welcome to Ulster University</h2>';
              outputTwo += '<br>';
              outputTwo += '<div class="grid-x grid-padding-x grid-padding-y">';
                outputTwo += '<div class="cell large-4">';
                  outputTwo += '<img src="%globals_asset_assetid:284270^as_asset:asset_thumbnail_v_agent-thumbnail_url%" alt="" class="circle">';
                  var phone = '%globals_asset_assetid:284270^as_asset:asset_metadata_Ulster.International.Agent.Phone%';
                  if (phone !== '') {
                    var mobile = res[i].phone;
                    mobile = mobile.replace(/\s/g, '');
                    mobile = mobile.replace('+', '');
                    outputTwo += '<a href="https://api.whatsapp.com/send?phone=' + phone + '" class="button large expanded"><i class="fa fa-whatsapp" aria-hidden="true"></i> WhatsApp</a>';
                  }
                  var email = '%globals_asset_assetid:284270^as_asset:asset_metadata_Ulster.International.Agent.Email%';
                  if (email !== '') {
                    outputTwo += '<a href="mailto:' + email + '" class="button large expanded"><i class="fa fa-envelope-o" aria-hidden="true"></i> Email</a>';
                  }
                  var facebook = '%globals_asset_assetid:284270^as_asset:asset_metadata_Ulster.International.Agent.Facebook%';
                  if (facebook !== '') {
                    outputTwo += '<a href="https://m.me/' + facebook + '" class="button large expanded" target="_blank><i class="fa fa-facebook" aria-hidden="true"></i> Facebook</a>';
                  }
                outputTwo += '</div>';
              outputTwo += '<div class="cell large-8">';
                outputTwo += '<cite>';
                  outputTwo += '<span class="h3">';
                    outputTwo += '%globals_asset_assetid:284270^as_asset:asset_metadata_Ulster.International.Agent.Digital.Prospectus.Intro^escapequotes%';
                  outputTwo += '</span>';
                outputTwo += '</cite>';
                outputTwo += '<br>';
                outputTwo += '%globals_asset_assetid:284270^as_asset:asset_metadata_Ulster.International.Agent.Digital.Prospectus.Content^escapequotes%';
              outputTwo += '</div>';
            outputTwo += '</div>';
          outputTwo += '</div>';
        outputTwo += '</div>';
      outputTwo += '</div>';
      outputTwo += '<br><br>';
      outputTwo += '</div>';
      print(outputTwo);
    }*/
  }
  yourCountryAgents();
}
