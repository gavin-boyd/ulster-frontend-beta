jQuery(document).ready(function() {
    function clearLastSearch() {
        var jQuery_GET = {};
        document.location.search.replace(/\??(?:([^=]+)=([^&]*)&?)/g, function() {
            function decode(s) {
                return decodeURIComponent(s.split("+").join(" "));
            }
            jQuery_GET[decode(arguments[1])] = decode(arguments[2]);
        });
        if (!jQuery_GET["query"]) {
            /*jQuery('#clear-last-search').click(function() {
                var url = window.location.href;
                var value = url.substring(url.lastIndexOf('=') + 1);
                jQuery('#filters input:checkbox:checked[value="' + value + '"]').siblings('a').click();
            });
            jQuery('#clear-last-search-two').click(function() {
                var url = window.location.href;
                var value = url.substring(url.lastIndexOf('=') + 1);
                jQuery('#filters input:checkbox:checked[value="' + value + '"]').siblings('a').click();
            });*/
        } else {
            /*jQuery('#clear-last-search').click(function() {
                var url = window.location.href;
                var value = url.substring(url.lastIndexOf('&') + 1);
                url = url.replace(value, '');
                jQuery('#query').val('');
                jQuery('#course-finder-new').submit();
            });
            jQuery('#clear-last-search-two').click(function() {
                var url = window.location.href;
                var value = url.substring(url.lastIndexOf('&') + 1);
                url = url.replace(value, '');
                jQuery('#query').val('');
                jQuery('#course-finder-new').submit();
            });*/
        }
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
        function showMoreCoursesAjax() {
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
        showMoreCoursesAjax();

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
                if (!jQuery('#course_list').hasClass('search-opacity')) {
                    jQuery('#course_list').addClass('search-opacity');
                    jQuery('#filters').addClass('search-opacity');
                    jQuery('body').prepend('<div class="preloader" style="left:0;right:0;margin:0 auto;position:fixed;z-index:9999;">Loading search results</div>');
                    jQuery('body').prepend('<div class="mfp-bg" style="z-index:9999;position:fixed;"></div>');
                    jQuery('input#query').blur();
                }
            }
        }

        function updatePageAndHistory(data, ajaxUrl, pushState) {
            if (pushState) {
                history.pushState({}, '', ajaxUrl);
            }
            // Update #courseresults
            var results = jQuery(data).find('#course_list');
            jQuery('#course_list').replaceWith(results);

            // If the #filters element doesn't exist, add it
            /*if (!jQuery('#course-finder-new #filters').length) {
                jQuery('#course_list').after('<div id="filters"></div>');
            }*/

            // Update #filters
            //var filters = jQuery(data).find('#course-finder-new #filters');
            //jQuery('#course-finder-new #filters').replaceWith(filters);

            //remove preloader
            jQuery('body .preloader').remove();
            jQuery('body .mfp-bg').remove();
        }
        // If back is clicked after an AJAX request, load the previous search
        window.onpopstate = function(event) {
            ajaxRequest(document.location, false);
        };
        // Change target filter checkboxes only
        jQuery('#courses').on('change', 'input[type=checkbox], input:radio', function() {
            jQuery('#course-finder-new').submit();
        });
        // Override the remove filter link and update the sidebar filters which will, in turn, submit the form
        /*jQuery('#course-finder-new').on('click', 'p.filters a', function(event) {
            //Get the filter value from the link that was clicked
            var filter = jQuery(this).attr('data-label');
            jQuery('#course-finder-new #filters input:checkbox:checked[value="' + filter + '"]').siblings('a').click();
            event.preventDefault();
        });*/
    }
    //init
    if (jQuery('#course_list').length) {
        olpAjaxCourseSearch();
    }
});
