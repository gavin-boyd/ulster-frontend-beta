function initDependentSports(data) {

    //change this
    var inputID = 'q461227_q7';

    //get sports
    var sports = '<div class="sports"><p class="bl">Choose your sport and teams below.</p>';
    jQuery.each(data, function(index) {
      sports += '<a href="#" data-id="' + data[index].id  + '" class="button hollow uls-sport">' + data[index].name + '</a>';
    });
    sports += '</div>';
    jQuery('#uls-sports-selector').html(sports);

    //sport click
    jQuery('a.uls-sport').click(function(e) {
      e.preventDefault();
      jQuery('.uls-sport').addClass('hollow');
      jQuery(this).removeClass('hollow');
      var id = jQuery(this).data('id');
      jQuery('.teams').hide();
      var teams = '<div class="teams" id="' + id + '-teams"><p class="bl">Choose the teams you are responsible for.</p>';
      //debug
      //console.log(id);

      jQuery.each(data, function(index) {
        if (data[index].id == id) {
          var teamsObject = data[index].teams;
          jQuery.each(teamsObject, function(index) {
            teams += '<a href="#" data-id="' + teamsObject[index].id  + '" class="button hollow uls-team">' + teamsObject[index].name + '</a>';
          });
        }
      });

      teams += '</div>';

      if (jQuery('#' + id + '-teams').length == 0) {
        jQuery(this).parent('.sports').append(teams);
      } else {
        jQuery('#' + id + '-teams').show();
      }

      //add active classes to teams
      var selectedTeamsArray = jQuery('input#' + inputID).val();
      selectedTeamsArray = selectedTeamsArray.split(',');
      jQuery.each(selectedTeamsArray, function(index) {
        jQuery('a[data-id="' + selectedTeamsArray[index] + '"]').addClass('success');
        jQuery('a[data-id="' + selectedTeamsArray[index] + '"]').removeClass('hollow');
      });

      //team click
      jQuery('a.uls-team').click(function(e) {
        e.preventDefault();
        var selectedTeamsArray = [];

        if (jQuery(this).hasClass('success')) {
          jQuery(this).addClass('hollow');
          jQuery(this).removeClass('success');
        } else {
          jQuery(this).removeClass('hollow');
          jQuery(this).addClass('success');
        }

        jQuery('a.uls-team').each(function() {
          if (jQuery(this).hasClass('success')) {
            selectedTeamsArray.push(jQuery(this).data('id'));
          }
        });

        //debug
        //console.log(selectedTeamsArray);

        jQuery('input#' + inputID).val(selectedTeamsArray);

        //set the other fields
        var selTeamsNamesArray = [];
        jQuery.each(selectedTeamsArray, function(index1) {
          jQuery.each(data, function(index2) {
            var teamsObject = data[index2].teams;
            jQuery.each(teamsObject, function(index3) {
              if (teamsObject[index3].id == selectedTeamsArray[index1]) {
                //debug
                //console.log(teamsObject[index3].name);
                selTeamsNamesArray.push(teamsObject[index3].name);
              }
            });
          });
        });
        jQuery('#q461227_q9').val(selTeamsNamesArray);
      });
    });

    //if signed in and viewing fixture form
    if (jQuery('#my-teams').length > 0) {

      var selTeamsArray = jQuery('#my-teams').text();
      selTeamsArray = selTeamsArray.trim();
      selTeamsArray = selTeamsArray.split(',');
      //debug
      //console.log(selTeamsArray);

      var selTeamsNamesArray = [];

      jQuery.each(selTeamsArray, function(index1) {
        jQuery.each(data, function(index2) {
          var teamsObject = data[index2].teams;
          jQuery.each(teamsObject, function(index3) {
            if (teamsObject[index3].id == selTeamsArray[index1]) {
              //debug
              //console.log(teamsObject[index3].name);
              selTeamsNamesArray.push(teamsObject[index3].name);
            }
          });
        });
      });

      if (jQuery('#fixture-selects').length > 0) {
        var teams = '<p class="bl">Select team</p>';
        jQuery.each(selTeamsNamesArray, function(index) {
          teams += '<a href="#" class="button hollow uls-team-sel m-r-10">' + selTeamsNamesArray[index] + '</a>';
        });
        jQuery('#fixture-selects').append(teams);

        jQuery('a.uls-team-sel').click(function(e) {
          e.preventDefault();

          jQuery('input#q460528_q9').val(jQuery(this).text());

          jQuery('#competitions').remove();

          if (jQuery('#q460528_q10').length > 0) {
            //populate hidden sport field
            var flag = false;
            jQuery.each(data, function(index) {
              var sports = data[index].name;
              var teams = data[index].teams;
              jQuery.each(teams, function(index1) {
                var team = teams[index1].name;
                if (team == jQuery('input#q460528_q9').val()) {
                  flag = true;
                  if (flag == true) {
                    jQuery('#q460528_q10').val(data[index].name);
                  }
                }
              });
            });
          }

          //debug
          //console.log('#####' + jQuery(this).text());

          jQuery('.uls-team-sel').addClass('hollow');
          jQuery(this).removeClass('hollow');

          var thisTeam = jQuery(this).text();

          var competitionsOutput = '<div id="competitions"><p class="bl">Select competition</p>';

          jQuery.each(data, function(index) {
            var sports = data[index];
            var teams = data[index].teams;
            jQuery.each(teams, function(index2) {
              var teamName = teams[index2].name
              if (teamName === thisTeam) {
                var competitions = teams[index2].competitions;
                jQuery.each(competitions, function(index3) {
                  competitionsOutput += '<a href="#" class="button hollow uls-competition-sel">' + competitions[index3].name + '</a>';
                });
              }
            });
          });
          competitionsOutput += '</div>';
          jQuery('#fixture-selects').append(competitionsOutput);

          jQuery('a.uls-competition-sel').click(function(e) {
            e.preventDefault();
            jQuery('input#q460528_q7').val(jQuery(this).text());
            jQuery('.uls-competition-sel').addClass('hollow');
            jQuery(this).removeClass('hollow');
          });

          //re-select competions
          var selComp = jQuery('#q460528_q7').val();

          jQuery('a.uls-competition-sel').each(function() {
            if (jQuery(this).text() == selComp) {
              jQuery(this).removeClass('hollow');
            }
          });
        });
      }
    }

    //on load of fixture form select team and comp
    if (jQuery('#q460528_q9').length > 0) {
      if (jQuery('#q460528_q9').val() !== '') {
        jQuery('a.uls-team-sel').each(function() {
          if (jQuery(this).text() == jQuery('#q460528_q9').val()) {
            jQuery(this).click();
          }
        });
      }
    }

    //console.log(jQuery('#my-teams').length);

    //set teams modal
    if (jQuery('#my-teams-output').length > 0) {
      //debug
      //console.log('init');
      var myTeams = jQuery('#my-teams-output').data('teams');
      var myTeamsArray = myTeams.split(',');
      //DEBUG
      //console.log(myTeamsArray);
      var myTeamsOutput = '';
      jQuery.each(myTeamsArray, function(index) {
        var myTeamID = myTeamsArray[index];
        //debug
        //console.log(myTeamID);
        jQuery.each(data, function(index1) {
          var teams = data[index1].teams;
          //debug
          //console.log(teams);
          jQuery.each(teams, function(index2) {
            //debug
            //console.log(teams[index2].id);
            if (teams[index2].id == myTeamID) {
              myTeamsOutput += '<li>' + teams[index2].name + '</li>';
            }
          });
        });
      });
      jQuery('#my-teams-output').append(myTeamsOutput);
    }
}

jQuery(document).ready(function() {
  //debug
  //console.log('init sport selectors v2!');
  var sportsApi = 'https://www.ulster.ac.uk/sport-fixutres-and-results/_web_services/sports.json';
  //var sportsApi = 'http://localhost/sport.json';
  jQuery.getJSON(sportsApi, initDependentSports);
});
