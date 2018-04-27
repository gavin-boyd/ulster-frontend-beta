var res = eval('(' + _REST.response.body + ')');
var country_code = "%globals_asset_metadata_Ulster.Capture.Country^escapequotes%";
var output = '';
if (res) {
    for (i = 0; i < res.length; i++) {
        var agent_country_code = res[i].country_code;
        var agent_country_code_array = agent_country_code.split('; ');
        for (x = 0; x < agent_country_code_array.length; x++) {
          if (country_code == agent_country_code_array[x]) {
            output += '<div class="bg-purple">';
              output += '<div class="grid-container white-text">';
                output += '<div class="grid-x grid-padding-x grid-padding-y">';
                  output += '<div class="cell medium-12">';
                    output += '<br><br>';
                    output += '<h2 class="h1">Hi %globals_asset_metadata_Ulster.Capture.Name%, welcome to Ulster University</h2>';
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
                        output += res[i].prospectus_content;
                      output += '</blockquote>';
                    output += '</div>';
                    output += '<div class="cell large-4">';
                      if (res[i].phone !== '') {
                        var mobile = res[i].phone;
                        mobile = mobile.replace(/\s/g, '');
                        mobile = mobile.replace('+', '');
                        output += '<a href="https://api.whatsapp.com/send?phone=' + mobile + '" class="button large expanded"><i class="fa fa-whatsapp" aria-hidden="true"></i> WhatsApp</a>';
                        output += '<a href="#" class="button large expanded"><i class="fa fa-weixin" aria-hidden="true"></i> WeChat</a>';
                      }
                      if (res[i].email !== '') {
                        output += '<a href="mailto:' + res[i].email + '" class="button large expanded"><i class="fa fa-envelope-o" aria-hidden="true"></i> Email</a>';
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
}
