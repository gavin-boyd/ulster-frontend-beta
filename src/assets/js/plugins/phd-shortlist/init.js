/*
   Function: ulsterFavourites

   This plugin adds favourites functionality in a jQuery application, see angular phd finder project for angular implementation

   Parameters:

   Dependency: ../../bower_components/jquery-cookie

   Index: 0.1
*/
function inlineFavourites(thisItem) {
    var favCookie = jQuery.cookie('phds');
    var favouritesArray = [];
    if (favCookie) {
        favouritesArray = favCookie.split(',');
    }
    //debug
    //console.log(favouritesArray);

    var currentProjectID = thisItem.data('id');
    currentProjectID = currentProjectID.toString();
    var setCookieExpiry = 800;
    //Live
    var setCookieDomain = 'ulster.ac.uk';
    var setCookiePath = '/';
    //Test
    //var setCookieDomain = 'localhost';
    //var setCookiePath = '/';

    //if found in cookie set add a active class
    if (favCookie && jQuery.inArray(currentProjectID, favouritesArray) !== -1) {
        thisItem.addClass('alert');
        thisItem.html('<span class="fa fa-times" aria-hidden="true"></span> Remove from Shortlist');
    }

    //on click add favourite or remove favourite
    thisItem.click(function(e) {
        e.preventDefault();
        if (jQuery(this).hasClass('alert')) {
            jQuery('.inline-fav-action').removeClass('alert');
            jQuery('.inline-fav-action').html('<span class="fa fa-heart" aria-hidden="true"></span>&nbsp;&nbsp;Add to My Shortlist');
            //remove from array
            if (jQuery.inArray(currentProjectID, favouritesArray) !== -1) {
                favouritesArray.splice(jQuery.inArray(currentProjectID, favouritesArray), 1);
            }
        } else {
            jQuery('.inline-fav-action').addClass('alert');
            jQuery('.inline-fav-action').html('<span class="fa fa-times" aria-hidden="true"></span>&nbsp;&nbsp;Remove from Shortlist');
            //add to array
            favouritesArray.push(currentProjectID);
        }
        //if cookie already exists reset it
        //reset cookie
        if (favCookie) {
            jQuery.removeCookie('phds', {
                path: setCookiePath
            });
        }
        //set cookie
        jQuery.cookie.raw = true;
        jQuery.cookie('phds', favouritesArray, {
            expires: setCookieExpiry,
            path: setCookiePath,
            domain: setCookieDomain
        });
        if (favCookie) {
            var total = favouritesArray.length;
        }
        favouritesToolbar('click', total);
        //debug
        //console.log(favCookie);
    });
    //debugging
    //console.log(currentProjectID);
    //console.log(favouritesArray);
}

//display view favourites button
function favouritesToolbar(type, customTotal) {
    var favCookie = jQuery.cookie('phds');
    var favouritesArray = [];
    if (favCookie) {
        favouritesArray = favCookie.split(',');
        var total = favouritesArray.length;
        if (total > 0 && type == 'load') {
            var toolbar = '<div class="cell small-6 medium-3 large-3"><a href="https://www.ulster.ac.uk/doctoralcollege/find-a-phd/shortlist" class="button hollow secondary rounded expanded m-b-0 bl view-favourites"><span class="totalFavs">' + total + '</span>&nbsp;<span class="fa fa-heart" aria-hidden="true"></span>&nbsp;&nbsp;View My PhD Shortlist</a></div>';
            jQuery('.toolbar').addClass('four');
            jQuery('.toolbar').append(toolbar);
        }
        if (total > 0 && type == 'click') {
            if (jQuery('.toolbar')) {
                jQuery('.totalFavs').text(customTotal);
            }
        }
        if (total <= 0 && type == 'click') {
            jQuery('.view-favourites').parent('div').remove();
            jQuery('.toolbar').removeClass('four');
        }
        if (total == 1 && type == 'click') {
            var toolbar = '<div class="cell small-6 medium-3 large-3"><a href="https://www.ulster.ac.uk/doctoralcollege/find-a-phd/shortlist" class="button hollow secondary rounded expanded m-b-0 bl view-favourites"><span class="totalFavs">' + total + '</span>&nbsp;<span class="fa fa-heart" aria-hidden="true"></span>&nbsp;&nbsp;View My PhD Shortlist</a></div>';
            jQuery('.toolbar').addClass('four');
            jQuery('.toolbar').append(toolbar);
        }
    } else {
        jQuery('.view-favourites').parent('div').remove();
        jQuery('.toolbar').removeClass('four');
    }
}

jQuery(document).ready(function() {
    jQuery('.inline-fav-action').each(function() {
      inlineFavourites(jQuery(this));
    });
    favouritesToolbar('load');
});
