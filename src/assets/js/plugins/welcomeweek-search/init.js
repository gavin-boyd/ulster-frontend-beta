jQuery(document).ready(function() {
  /*function clearLastSearch() {
    var jQuery_GET = {};
    document.location.search.replace(/\??(?:([^=]+)=([^&]*)&?)/g, function() {
        function decode(s) {
            return decodeURIComponent(s.split("+").join(" "));
        }
        jQuery_GET[decode(arguments[1])] = decode(arguments[2]);
    });
  }
  clearLastSearch();*/

  function getUrlParameter(sParam) {
    var sPageURL = decodeURIComponent(window.location.search.substring(1)),
        sURLVariables = sPageURL.split('&'),
        sParameterName, i;
    for (i = 0; i < sURLVariables.length; i++) {
        sParameterName = sURLVariables[i].split('=');
        if (sParameterName[0] === sParam) {
            return sParameterName[1] === undefined ? true : sParameterName[1];
        }
    }
  }

  function olpAjaxCourseSearch() {
      // Override the form submit with an AJAX request
      jQuery('#course-finder-new').submit(function(event) {
          var searchURL = generateSearchURL();
          ajaxRequest(searchURL, true);
          event.preventDefault();
      });

      // Generate the search URL by taking values from the inputs
      function generateSearchURL() {
        //debug for localhost
        //var pageURL = "http://localhost:8000/welcome-week-search.html";
        //update this
        var selectedLetter = jQuery('.page_letters .active').data('letter'); //left off here
        var searchURL = pageURL + '?query=' + jQuery('#query').val() + '&meta_t=' + jQuery('#query').val();
        jQuery('#course-finder-new #filters input:checkbox:checked, #course-finder-new #filters input:radio:checked').each(function() {
            // The input names are modified for Funnelback
            var name = jQuery(this).attr('name'),
                value = jQuery(this).val();
            //remove this...  name = name.slice(0, 1) + '.' + name.slice(1, -1) + '|' + name.slice(-1);
            searchURL += '&' + name + '=' + value;
        });
        var numRanks = jQuery('#num_ranks').val();
        searchURL = searchURL + '&num_ranks=' + numRanks;
        return searchURL;
      }

      //show more courses button
      /*function showMoreCoursesAjax() {
          var totalCourses = jQuery('#show-more-courses').data('total-courses');
          var end = jQuery('#num_ranks').val();
          var increment = jQuery('#show-more-courses').data('increment');
          if (totalCourses >= end) {
              jQuery('#show-more-courses').show();
              if (increment) {
                  jQuery('#show-more-courses').text('Show ' + increment + ' more courses');
              }
              jQuery('#show-more-courses').click(function(e) {
                  e.preventDefault();
                  var totalCourses = jQuery(this).data('total-courses');
                  var end = jQuery('#num_ranks').val();
                  if (increment) {
                      var numRanks = parseInt(end) + increment;
                      //console.log(numRanks);
                  } else {
                      var numRanks = parseInt(end) + 10;
                  }
                  jQuery('#num_ranks').val(numRanks);
                  jQuery('#course-finder-new').submit();
              });
          } else {
              jQuery('#show-more-courses').hide();
          }
      }
      showMoreCoursesAjax();*/

      // Perform the AJAX request
      // Variable to store the AJAX request so it can be aborted if required
      var ajax;
      // The variable pushState is used to decide if the ajax request should be pushed into the browsers state
      function ajaxRequest(searchURL, pushState) {
          // If the browser doesn't support pushState then perform a redirect so that the back button will work
          if (!('history' in window) || !('pushState' in history)) {
              location.assign(searchURL);
          } else {
              if (ajax && ajax.readyState != 4) {
                  ajax.abort();
              }
              ajax = jQuery.get(searchURL, function(data) {
                  updatePageAndHistory(data, this.url, pushState);
                  //clearLastSearch();
                  //showMoreCoursesAjax();
              });
              //preloader
              jQuery('body').prepend('<div class="preloader-container"><div class="preloader"><span class="hide">Loading search results</span> <img src="https://www.ulster.ac.uk/__data/assets/git_bridge/0010/256429/dist/assets/img/ulster-pre-loader.gif" width="169" height="169" alt="Loading results"/></div></div>');
              //focus on search box
              jQuery('input#query').blur();
          }
      }

      function updatePageAndHistory(data, ajaxUrl, pushState) {
          if (pushState) {
              history.pushState({}, '', ajaxUrl);
          }
          // Update #courseresults
          var results = jQuery(data).find('#course_list');
          jQuery('#course_list').replaceWith(results);

          //remove preloader
          jQuery('body .preloader-container').remove();
      }
      // If back is clicked after an AJAX request, load the previous search
      window.onpopstate = function(event) {
        ajaxRequest(document.location, false);
      };
      // Change target filter checkboxes only
      jQuery('#courses').on('change', 'input[type=checkbox], input:radio', function() {
        jQuery('#course-finder-new').submit();
      });
  }
  //init
  if (jQuery('#course_list').length) {
    olpAjaxCourseSearch();
  }
});
