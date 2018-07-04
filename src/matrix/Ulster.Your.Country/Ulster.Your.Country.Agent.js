var res = eval('(' + _REST.response.body + ')');
if (res) {
  function yourCountryAgents() {
    var country_code = "%globals_asset_metadata_Content.Tagging.Country_key%";
    var output = '';
    var showGeneric = [];
    for (i = 0; i < res.length; i++) {
      var agent_country_code = res[i].country_code;
      var agent_contact_types = res[i].contact_type;
      if (agent_country_code.indexOf(';') !== -1) {
        var agent_country_code_array = agent_country_code.split('; ');
      } else {
        var agent_country_code_array = agent_country_code;
      }
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
            output += '<div class="shadow card card-section">';
              output += '<div class="grid-x grid-padding-x grid-padding-y">';
                output += '<div class="cell medium-12">';
                output += '<h2 class="h4">';
                output += res[i].prospectus_intro;
                output += '</h2>';
                output += '</div>';
                output += '<div class="cell large-4">';
                  output += '<img src="' + res[i].image + '" alt="' + res[i].full_name + '" class="circle">';
                  if (Array.isArray(agent_country_contact_type_array)) {
                    var agent_country_contact_type_string = agent_country_contact_type_array.toString();
                    //WhatsApp
                    if (res[i].phone !== '' && agent_country_contact_type_string.indexOf('whats-app') !== -1) {
                      var mobile = res[i].phone;
                      mobile = mobile.replace(/\s/g, '');
                      mobile = mobile.replace('+', '');
                      output += '<a href="https://api.whatsapp.com/send?phone=' + mobile + '" class="button large expanded"><i class="fa fa-whatsapp" aria-hidden="true"></i> WhatsApp</a>';
                      //output += '<a href="#" class="button large expanded"><i class="fa fa-weixin" aria-hidden="true"></i> WeChat</a>';
                    }
                    //Email
                    if (res[i].email !== '' && agent_country_contact_type_string.indexOf('email') !== -1) {
                      var email = res[i].email;
                      output += '<a href="mailto:' + email + '" class="button large expanded"><i class="fa fa-envelope-o" aria-hidden="true"></i> Email</a>';
                    }
                    //Facebook
                    if (res[i].facebook !== '' && agent_country_contact_type_string.indexOf('facebook') !== -1) {
                      output += '<a href="https://m.me/' + res[i].facebook + '" class="button large expanded" target="_blank><i class="fa fa-facebook" aria-hidden="true"></i> Facebook</a>';
                    }
                  } else {
                    //WhatsApp
                    if (res[i].phone !== '' && agent_country_contact_type_array == 'whats-app') {
                      var mobile = res[i].phone;
                      mobile = mobile.replace(/\s/g, '');
                      mobile = mobile.replace('+', '');
                      output += '<a href="https://api.whatsapp.com/send?phone=' + mobile + '" class="button large expanded"><i class="fa fa-whatsapp" aria-hidden="true"></i> WhatsApp</a>';
                      //output += '<a href="#" class="button large expanded"><i class="fa fa-weixin" aria-hidden="true"></i> WeChat</a>';
                    }
                    //Email
                    if (res[i].email !== '' && agent_country_contact_type_array == 'email') {
                      var email = res[i].email;
                      output += '<a href="mailto:' + email + '" class="button large expanded"><i class="fa fa-envelope-o" aria-hidden="true"></i> Email</a>';
                    }
                    //Facebook
                    if (res[i].facebook !== '' && agent_country_contact_type_array == 'facebook') {
                      output += '<a href="https://m.me/' + res[i].facebook + '" class="button large expanded" target="_blank><i class="fa fa-facebook" aria-hidden="true"></i> Facebook</a>';
                    }
                  }
                output += '</div>';
                output += '<div class="cell large-8">';
                output += res[i].prospectus_content;
              output += '</div>';
            output += '</div>';
          output += '</div>';
          print(output);
        }
      }
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
