var output = '';
if (ed_registered == 'true') {
    if (ed_passed == 'true') {
        output += '<div class="grid-container m-t-30 m-b-30"><div class="grid-x"><div class="cell large-4 cover-background" style="background-image:url(./?a=267203);"></div><div class="cell large-8 off-white-bg"><div class="p-l-20 p-r-20 p-t-0 p-b-0"><h2 class="h1 bl larger">EDGE Award</h2>';
        if (ed_achievements.length > 0) {
          output += '<p>You have completed the following Edge Activities:</p>';
          output += '<ul class="angle-right">';
          for (i = 0; i < ed_achievements.length; i++) {
            output += '<li>' + ed_achievements[i] + '</li>';
          }
          output += '</ul>';
        }
        output += '<p><a class="button rounded bl" href="./?a=381171">Find out more</a></p></div></div></div></div>';
    } else {
        output += '%globals_asset_contents_raw:466986%';
    }
} else {
    output += '%globals_asset_contents_raw:466986%';
}
print(output);