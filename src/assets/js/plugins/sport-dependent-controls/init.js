function initDependentSports(data) {
    var selectedTeamsArray = [];
    //get sports
    var sports = '<div class="sports"><p class="bl">Select sport</p>';
    jQuery.each(data, function(index) {
      sports += '<a href="#" data-id="' + data[index].id  + '" class="button hollow uls-sport">' + data[index].name + '</a><br>';
    });
    sports += '</div>';
    jQuery('#uls-sports-selector').append(sports);

    //sport click
    jQuery('a.uls-sport').click(function(e) {
      e.preventDefault();
      jQuery('.teams').remove();
      jQuery('.uls-sport').addClass('hollow');
      jQuery(this).removeClass('hollow');
      var id = jQuery(this).data('id');
      var teams = '<div class="teams"><p class="bl">Select team</p>';
      //debug
      console.log(id);

      jQuery.each(data, function(index) {
        if (data[index].id == id) {
          var teamsObject = data[index].teams;

          jQuery.each(teamsObject, function(index) {
            teams += '<a href="#" data-id="' + teamsObject[index].id  + '" class="button hollow uls-team" data-sel="false">' + teamsObject[index].name + '</a><br>';
          });
        }
      });

      teams += '</div>';

      jQuery(this).parent('.sports').append(teams);


      //team click
      jQuery('a.uls-team').click(function(e) {
        e.preventDefault();

        jQuery(this).data('sel', 'true');

        if (jQuery(this).hasClass('hollow') == false) {
          jQuery(this).addClass('hollow');
          console.log('tester');
        }

        if (jQuery(this).hasClass('hollow') == true) {
          jQuery(this).removeClass('hollow');
        }

        jQuery(this).removeClass('hollow');
      });
    });
}

jQuery(document).ready(function() {
  //debug
  console.log('init sport selectors!');
  //var sportsApi = 'https://www.ulster.ac.uk/sport-fixutres-and-results/_web_services/test.json';
  var sportsApi = 'http://localhost/sport.json';
  jQuery.getJSON(sportsApi, initDependentSports);
});
