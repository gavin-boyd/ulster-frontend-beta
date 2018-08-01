const ww_setCookieExpiry = 800;
//Live
const ww_setCookieDomain = 'ulster.ac.uk';
const ww_setCookiePath = '/';
const ww_api = 'https://www.ulster.ac.uk/welcomeweek/_web_services/user';
//Test
////const ww_setCookieDomain = 'localhost';
////const ww_setCookiePath = '';
////const ww_api = 'http://dct.ulster.ac.uk/welcomeweek/feeds/test.json';

jQuery.fn.extend({
    ulsterFavourites: function() {
        function favourites() {
            var favCookie = jQuery.cookie('uls_welcome_week_f');
            var setCookieExpiry = ww_setCookieExpiry;
            var setCookieDomain = ww_setCookieDomain;
            var setCookiePath = ww_setCookiePath;
            if (favCookie) {
                var eventsArray = favCookie.split(',');
                for (var i = 0; i < eventsArray.length; i++) {
                    eventsArray[i] = parseInt(eventsArray[i]);
                }
                //debug
                console.log(eventsArray);
            } else {
                var eventsArray = [];
            }
            jQuery('a.selected').each(function() {
                var id = jQuery(this).data('id');
                id = parseInt(id);
                eventsArray.push(id);
            });
            var uniqueEventsArray = [];
            jQuery.each(eventsArray, function(i, el) {
                if (jQuery.inArray(el, uniqueEventsArray) === -1) uniqueEventsArray.push(el);
            });
            //debug
            //console.log(uniqueEventsArray);
            //if cookie already exists reset it
            //reset cookie
            if (favCookie) {
                jQuery.removeCookie('uls_welcome_week_f', {
                    path: setCookiePath
                });
            }
            //set cookie
            jQuery.cookie.raw = true;
            jQuery.cookie('uls_welcome_week_f', uniqueEventsArray, {
                expires: setCookieExpiry,
                path: setCookiePath,
                domain: setCookieDomain
            });
            //set count
            var count = uniqueEventsArray.length;
            jQuery('.fav-count').text('(' + count + ')');
            //add content to the form
            /*var inputContent = '';
            jQuery.each(uniqueEventsArray, function(i, val) {
                var id = val;
                inputContent += '+' + id;
            });
            jQuery(inputID).attr('value', '');
            jQuery(inputID).attr('value', inputContent);*/
        }
        favourites();

        //favourite button actions
        jQuery(this).find('.ww_event').each(function(e) {
            var favouriteBtn = jQuery(this).find('a.ww_event_fav_btn');
            favouriteBtn.click(function(e) {
                e.preventDefault();
                //debug
                console.log('Clicked favourite');

                var setCookieExpiry = ww_setCookieExpiry;
                var setCookieDomain = ww_setCookieDomain;
                var setCookiePath = ww_setCookiePath;
                var favCookie = jQuery.cookie('uls_welcome_week_f');
                var assetID = jQuery(this).data('id');
                if (jQuery(this).hasClass('selected')) {
                    jQuery(this).removeClass('selected');
                    var favCookie = jQuery.cookie('uls_welcome_week_f');
                    var eventsArray = favCookie.split(',');
                    for (var i = 0; i < eventsArray.length; i++) {
                        eventsArray[i] = parseInt(eventsArray[i]);
                    }
                    eventsArray.pop();
                    jQuery.removeCookie('uls_welcome_week_f', {
                        path: setCookiePath
                    });
                    jQuery.cookie.raw = true;
                    jQuery.cookie('uls_welcome_week_f', eventsArray, {
                        expires: setCookieExpiry,
                        path: setCookiePath,
                        domain: setCookieDomain
                    });
                    //set count
                    var count = eventsArray.length;
                    //debug
                    //console.log(count);
                    jQuery('.fav-count').text('(' + count + ')');

                    //add content to the form
                    /*var inputContent = '';
                    jQuery.each(eventsArray, function(i, val) {
                        var id = val;
                        inputContent += '+' + id;
                    });
                    jQuery(inputID).attr('value', '');
                    jQuery(inputID).attr('value', inputContent);*/
                } else {
                    jQuery(this).addClass('selected');
                    favourites();
                }
                return false;
            });
            favouriteBtn.css('display', 'block');
        });

        //re-select favourites
        var favCookie = jQuery.cookie('uls_welcome_week_f');
        if (favCookie) {
            var favouritesArray = favCookie.split(',');
            var count = favouritesArray.length;
            jQuery('.fav-count').text('(' + count + ')');
            jQuery.each(favouritesArray, function(i, val) {
                var id = val;
                jQuery('*[data-id="' + id + '"]').addClass('selected');
            });
        }

        jQuery('#open-favourites').click(function(e) {
            e.preventDefault();
            var favCookie = jQuery.cookie('uls_welcome_week_f');
            var path = 'https://www.ulster.ac.uk/welcomeweek-dev/favourites'; // update this for production
            if (favCookie) {
                var favouritesArray = favCookie.split(',');
                var url = path + '?events=';
                jQuery.each(favouritesArray, function(i, id) {
                    url += '+' + id;
                });
                //load the favourites
                window.location.href = url;
            }
        });
    }
});

//init
jQuery(document).ready(function() {
    jQuery('.ww_events').ulsterFavourites();
});
