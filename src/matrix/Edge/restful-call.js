var res = eval('(' + _REST.response.body + ')');
if (res) {
  function edgeOutput() {
    var output = '';
    var ed_registered = res[0].ed_registered;
    var ed_achievements = res[0].ed_achievements;
    ed_achievements = ed_achievements.split('||');
    print(ed_achievements);

    /*if (ed_registered !== 'true') {
      output += '<h1>1</h1>';
      output += '%globals_asset_contents_raw:467016%';
    }
    if (ed_achievements.length > 0) {
        if (ed_registered == 'true') {
            output += '<h1>2</h1>';
            output += '<div class="grid-container m-t-30 m-b-30"><div class="grid-x grid-margin-x"><div class="cell small-12 medium-6 large-6"><h2 class="h1 bl larger text-sky-blue">EDGE Award</h2>';
            output += '<p class="lead">The EDGE Award provides you with the perfect opportunity to develop the skills and qualities you need through the completion of a range of extra-curricular and co-curricular activities alongside your degree.</p>';
            output += '</div>';
            output += '<div class="cell small-12 medium-6 large-6">';
            output += '<hr class="hide-for-small-only"><p>You have completed the following Edge Activities:</p>';
            output += '<ul class="angle-right">';
            for (i = 0; i < ed_achievements.length; i++) {
                output += '<li>' + ed_achievements[i] + '</li>';
            }
            output += '</ul>';
            output += '<p><a class="button rounded bl" href="./?a=381171">Find out more</a></p></div></div></div></div>';
            output += '</div>';
        } else {
            output += '<h1>3</h1>';
            output += '%globals_asset_contents_raw:467016%';
        }
    } else {
        output += '<h1>4</h1>';
        output += '%globals_asset_contents_raw:481036%';
    }*/
    print(output);
  }
  edgeOutput();
}
