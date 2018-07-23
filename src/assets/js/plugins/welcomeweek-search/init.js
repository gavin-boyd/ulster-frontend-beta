jQuery(document).ready(function() {

  /*
   * Function: Courses A-Z
   */
  function coursesAlphabetical() {
    jQuery('.courses-az').each(function() {
        jQuery('.page_letters').remove();
        var lettersHTML = '<div class="page_letters"><ul class="menu" data-magellan data-offset="500">';
        var lettersArray = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
        var currentLettersArray = [];
        jQuery(this).children('div').each(function(index, value) {
            var letter = jQuery(this).data('letter');
            if (jQuery(this).next('div').length !== 0) {
                var nextLetter = jQuery(this).next('div').data('letter');
                if (letter != nextLetter) {
                    jQuery('<div class="callout primary" data-magellan-target="' + nextLetter + '" id="' + nextLetter + '"><h2 class="h1">' + nextLetter + '</h2></div>').insertAfter(jQuery(this));
                    currentLettersArray.push(nextLetter);
                    //lettersHTML += '<a href="#' + nextLetter + '" data-letter="' + nextLetter + '">' + nextLetter + '</a>';
                    //debug
                    //console.log('1');
                }
            }
            if (index == 0) {
                jQuery('<div class="callout primary" data-magellan-target="' + nextLetter + '" id="' + nextLetter + '"><h2 class="h1">' + letter + '</h2></div>').insertBefore(jQuery(this));
                currentLettersArray.push(letter);
                //lettersHTML += '<a href="#' + letter + '" data-letter="' + letter + '">' + letter + '</a>';
                //debug
                //console.log('1');
            }
        });
        for (var i = 0; i < lettersArray.length; i++) {
            var letter = lettersArray[i];
            letter = letter.toUpperCase();
            //debug
            var check = jQuery.inArray(letter, currentLettersArray);
            if (check !== -1) {
                lettersHTML += '<li data-letter="' + letter + '"><a href=#' + letter + ' data-letter="' + letter + '" class="page-letter-' + letter + '">' + letter + '</a></li>';
            } else {
                lettersHTML += '<li data-letter="' + letter + '"><span>' + letter + '</span></li>';
            }
        }
        lettersHTML += '</ul></div>';
        jQuery('.nav-courses-page-letters').each(function() {
          jQuery(lettersHTML).insertBefore(jQuery(this));
        });
        jQuery('.page_letters a').click(function(event) {
            jQuery('.page_letters a').removeClass('active');
            jQuery(this).addClass('active');
            if (
                location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') &&
                location.hostname == this.hostname
            ) {
                // Figure out element to scroll to
                var target = jQuery(this.hash);
                target = target.length ? target : jQuery('[name=' + this.hash.slice(1) + ']');
                // Does a scroll target exist?
                if (target.length) {
                    // Only prevent default if animation is actually gonna happen
                    event.preventDefault();
                    jQuery('html, body').animate({
                        scrollTop: target.offset().top
                    }, 1000, function() {
                        // Callback after animation
                        // Must change focus!
                        var target = jQuery(target);
                        target.focus();
                        if (target.is(":focus")) { // Checking if the target was focused
                            return false;
                        } else {
                            target.attr('tabindex', '-1'); // Adding tabindex for elements not focusable
                            target.focus(); // Set focus again
                        };
                    });
                }
            }
        });
        /*jQuery('.page_letters div').tsort({
            attr: 'data-letter'
        });​*/
    });
  }
  if (jQuery('.courses-az').length !== 0) {
      coursesAlphabetical();
  }

  function clearLastSearch() {
    var jQuery_GET = {};
    document.location.search.replace(/\??(?:([^=]+)=([^&]*)&?)/g, function() {
        function decode(s) {
            return decodeURIComponent(s.split("+").join(" "));
        }
        jQuery_GET[decode(arguments[1])] = decode(arguments[2]);
    });
  }
  clearLastSearch();

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
        var searchURL = pageURL + '?query=' + jQuery('#query').val();
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
              coursesAlphabetical();
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
