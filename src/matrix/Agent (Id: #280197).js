var res = eval('(' + _REST.response.body + ')');
var country_code = "%globals_asset_metadata_Ulster.Capture.Country^escapequotes%";
var output = '';
var showGeneric = [];
if (res) {
  for (i = 0; i < res.length; i++) {
    var agent_country_code = res[i].country_code;
    var agent_country_code_array = agent_country_code.split('; ');
    for (x = 0; x < agent_country_code_array.length; x++) {
      var agent_code = agent_country_code_array[x];
      agent_code = String(agent_code);
      if (country_code == agent_code) {
        showGeneric.push('true');
        output += '<div class="">';
          output += '<div class="grid-container">';
            output += '<div class="grid-x grid-padding-x grid-padding-y">';
              output += '<div class="cell medium-12">';
                output += '<br><br>';
                output += '<h2 class="h1">Hi %globals_asset_metadata_Ulster.Capture.First.Name^escapequotes%, welcome to Ulster University</h2>';
                output += '<br>';
                output += '<div class="grid-x grid-padding-x grid-padding-y">';
                  output += '<div class="cell large-2">';
                    output += '<img src="' + res[i].image + '" alt="' + res[i].full_name + '" class="circle">';
                  output += '</div>';
                output += '<div class="cell large-6">';
                  output += '<blockquote>';
                    output += '<cite>';
                      output += '<span class="h3">';
                        output += res[i].prospectus_intro;
                      output += '</span>';
                    output += '</cite>';
                    output += '<br>';
                    output += res[i].prospectus_content;
                  output += '</blockquote>';
                output += '</div>';
                output += '<div class="cell large-4">';
                  if (res[i].phone !== '') {
                    var mobile = res[i].phone;
                    mobile = mobile.replace(/\s/g, '');
                    mobile = mobile.replace('+', '');
                    output += '<a href="https://api.whatsapp.com/send?phone=' + mobile + '" class="button large expanded"><i class="fa fa-whatsapp" aria-hidden="true"></i> WhatsApp</a>';
                    //output += '<a href="#" class="button large expanded"><i class="fa fa-weixin" aria-hidden="true"></i> WeChat</a>';
                  }
                  if (res[i].email !== '') {
                    output += '<a href="mailto:' + res[i].email + '" class="button large expanded"><i class="fa fa-envelope-o" aria-hidden="true"></i> Email</a>';
                  }
                  if (res[i].facebook !== '') {
                    output += '<a href="https://m.me/' + res[i].facebook + '" class="button large expanded" target="_blank><i class="fa fa-facebook" aria-hidden="true"></i> Facebook</a>';
                  }
                output += '</div>';
              output += '</div>';
            output += '</div>';
          output += '</div>';
        output += '</div>';
        output += '<br><br>';
        output += '</div>';
        print(output);
      }
    }
  }
  if (showGeneric.indexOf('true') == -1) {
    var outputTwo = '';
    outputTwo += '<div class="">';
      outputTwo += '<div class="grid-container">';
        outputTwo += '<div class="grid-x grid-padding-x grid-padding-y">';
          outputTwo += '<div class="cell medium-12">';
            outputTwo += '<br><br>';
            outputTwo += '<h2 class="h1">Hi %globals_asset_metadata_Ulster.Capture.First.Name^escapequotes%, welcome to Ulster University</h2>';
            outputTwo += '<br>';
            outputTwo += '<div class="grid-x grid-padding-x grid-padding-y">';
              outputTwo += '<div class="cell large-2">';
                outputTwo += '<img src="%globals_asset_assetid:284270^as_asset:asset_thumbnail_url%" alt="" class="circle">';
              outputTwo += '</div>';
            outputTwo += '<div class="cell large-6">';
              outputTwo += '<blockquote>';
                outputTwo += '<cite>';
                  outputTwo += '<span class="h3">';
                    outputTwo += '%globals_asset_assetid:284270^as_asset:asset_metadata_Ulster.International.Agent.Digital.Prospectus.Intro^escapequotes%';
                  outputTwo += '</span>';
                outputTwo += '</cite>';
                outputTwo += '<br>';
                outputTwo += '%globals_asset_assetid:284270^as_asset:asset_metadata_Ulster.International.Agent.Digital.Prospectus.Content^escapequotes%';
              outputTwo += '</blockquote>';
            outputTwo += '</div>';
            outputTwo += '<div class="cell large-4">';
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
          outputTwo += '</div>';
        outputTwo += '</div>';
      outputTwo += '</div>';
    outputTwo += '</div>';
    outputTwo += '<br><br>';
    outputTwo += '</div>';
    print(outputTwo);
  }
}
