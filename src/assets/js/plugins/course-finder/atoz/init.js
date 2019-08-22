import tinysort from 'tinysort';
jQuery(document).ready(function() {

    function coursesAlphabetical() {
        jQuery('.courses-az').each(function() {
            jQuery('.page_letters').remove();
            var lettersHTML = '<div class="page_letters"><p><strong>Course A-Z navigation</strong></p>';
            var lettersArray = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
            var currentLettersArray = [];
            jQuery(this).children('p').each(function(index, value) {
                var letter = jQuery(this).data('letter');
                if (jQuery(this).next('p').length !== 0) {
                    var nextLetter = jQuery(this).next('p').data('letter');
                    if (letter != nextLetter) {
                        jQuery('<h2 id="' + nextLetter + '">' + nextLetter + '</h2>').insertAfter(jQuery(this));
                        currentLettersArray.push(nextLetter);
                        //lettersHTML += '<a href="#' + nextLetter + '" data-letter="' + nextLetter + '">' + nextLetter + '</a>';
                        //debug
                        //console.log('1');
                    }
                }
                if (index == 0) {
                    jQuery('<h2 id="' + letter + '">' + letter + '</h2>').insertBefore(jQuery(this));
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
                    lettersHTML += '<div data-letter="' + letter + '"><a href=#' + letter + ' data-letter="' + letter + '" class="page-letter-' + letter + '">' + letter + '</a></div>';
                } else {
                    lettersHTML += '<div data-letter="' + letter + '"><span>' + letter + '</span></div>';
                }
            }
            lettersHTML += '</div>';
            jQuery(lettersHTML).insertBefore(jQuery(this));
            jQuery('.page_letters a').click(function(event) {
                if (
                    location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') &&
                    location.hostname == this.hostname
                ) {
                    // Figure out element to scroll to
                    var target = $(this.hash);
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
            tinysort('.page_letters div',{attr:'data-letter'});
        });
    }
    if (jQuery('.courses-az').length !== 0) {
        coursesAlphabetical();
    }

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

        jQuery('#course-finder-new').submit(function(event) {
            var searchURL = generateSearchURL();
            ajaxRequest(searchURL, true);
            event.preventDefault();
        });

        function generateSearchURL() {
            var pageURL = jQuery('#page-url').data('url');
            var searchURL = pageURL + '?query=' + jQuery('#query').val() + '&meta_t=' + jQuery('#query').val() + '&f.Entry_year|entryyear=' + jQuery('#year').val();
            jQuery('#course-finder-new #filters input:checkbox:checked').each(function() {
                var name = jQuery(this).attr('name');
                var value = jQuery(this).val();
                searchURL += '&' + name + '=' + value;
            });
            searchURL = searchURL;
            return searchURL;
        }

        var ajax;

        function ajaxRequest(searchURL, pushState) {
            if (!('history' in window) || !('pushState' in history)) {
                location.assign(searchURL);
            } else {
                if (ajax && ajax.readyState != 4) {
                    ajax.abort();
                }
                ajax = jQuery.get(searchURL, function(data) {
                    updatePageAndHistory(data, this.url, pushState);
                    coursesAlphabetical();
                    addActiveStateFacets();
                });
                if (!jQuery('#course_list').hasClass('search-opacity')) {
                    jQuery('#course_list').addClass('search-opacity');
                    jQuery('#filters').addClass('search-opacity');
                    jQuery('body').prepend('<div class="preloader">Loading search results</div>');
                    jQuery('body').prepend('<div class="mfp-bg lighter"></div>');
                    jQuery('input#query').blur();
                }
            }
        }

        function updatePageAndHistory(data, ajaxUrl, pushState) {
            if (pushState) {
                history.pushState({}, '', ajaxUrl);
            }
            var results = jQuery(data).find('#course_list');
            jQuery('#course_list').replaceWith(results);
            /*if (!jQuery('#course-finder-new #filters').length) {
                jQuery('#course_list').after('<div id="filters"></div>');
            }*/
            //var filters = jQuery(data).find('#course-finder-new #filters');
            //jQuery('#course-finder-new #filters').replaceWith(filters);
            jQuery('body .preloader').remove();
            jQuery('body .mfp-bg').remove();
        }

        function addActiveStateFacets() {
            jQuery('li.category input[type=checkbox]').each(function() {
                jQuery(this).click(function() {
                    var parent = jQuery(this).parent('label');
                    if(parent.hasClass('active')) {
                        parent.removeClass('active');
                    } else {
                        parent.addClass('active');
                    }
                });
                if (jQuery(this).is(':checked')) {
                    jQuery(this).parent('label').addClass('active');
                } else {
                    jQuery(this).parent('label').removeClass('active');
                }
            });
        }
        addActiveStateFacets();

        window.onpopstate = function(event) {
            ajaxRequest(document.location, false);
        };

        jQuery('#courses').on('change', '.category input[type=checkbox]', function(e) {
            e.preventDefault();
            jQuery('#course-finder-new').submit();
        });
    }
    //init
    if (jQuery('#course_list').length) {
        olpAjaxCourseSearch();
    }
});
