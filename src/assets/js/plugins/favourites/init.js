function ulsAppFavButtonConfig(
  favBtnClass,
  activeClass,
  favouriteslistid,
  rowClass
) {
  //<span class="uls-fav-config show-for-sr" data-icon="far fa-heart" data-sel-icon="fas fa-heart" data-text="Add to playlist" data-sel-text="Remove from playlist">Add to playlist</span>
  jQuery(favBtnClass).each(function() {
      var icon = jQuery(this).children('.uls-fav-config').data("icon");
      var iconsel = jQuery(this).children('.uls-fav-config').data("sel-icon");
      var text = jQuery(this).children('.uls-fav-config').data("text");
      var textsel = jQuery(this).children('.uls-fav-config').data("sel-text");
      jQuery(this).children('.uls-fa-content').remove();
      if (jQuery(this).hasClass(activeClass)) {
        jQuery(this).children('.uls-fav-config').before('<span class="uls-fa-content"><span class="' + iconsel +' aria-hidden="true"></span>&nbsp;&nbsp;' + textsel + '</span>');
      } else {
        jQuery(this).children('.uls-fav-config').before('<span class="uls-fa-content"><span class="' + icon +' aria-hidden="true"></span>&nbsp;&nbsp;' + text + '</span>');
      }
  });
  if (jQuery('#' + favouriteslistid).length > 0) {
    jQuery('#' + favouriteslistid).each(function() {
      jQuery(favBtnClass + '.' + activeClass).click(function(e) {
        var thisrow = jQuery(this).data('id');
        thisrow = '#' + thisrow + '-row';
        jQuery(thisrow).fadeOut("slow");
      });
    })
  }
}

/*
 * cookieName - uls_appwk_favs
 * domain - ulster.ac.uk
 * path '/'
 * cookieExpiry - 800
 * favBtnClassSelected - 'a.ulsAddFav.alert'
 * favCount - '.fav-count'
 * favBtnClass - a.ulsAddFav
 * activeClass - alert
 */
function ulsAppFavouritesSet(
  cookieName,
  domain,
  path,
  cookieExpiry,
  favBtnClassSelected,
  favCount,
  favBtnClass,
  activeClass
) {
  var setCookieExpiry = cookieExpiry;
  var setCookieDomain = domain;
  var setCookiePath = path;
  var favCookie = jQuery.cookie(cookieName);
  var setCookieExpiry = setCookieExpiry;
  var setCookieDomain = setCookieDomain;
  var setCookiePath = setCookiePath;
  if (favCookie) {
      var eventsArray = favCookie.split(',');
      for (var i = 0; i < eventsArray.length; i++) {
          eventsArray[i] = parseInt(eventsArray[i]);
      }
      //debug
      //console.log(eventsArray);
  } else {
      var eventsArray = [];
  }
  jQuery(favBtnClassSelected).each(function() {
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
    jQuery.removeCookie(cookieName, {
        path: setCookiePath
    });
  }
  //set cookie
  //debug
  //console.log('uniqueEventsArray: ' + uniqueEventsArray);
  jQuery.cookie.raw = true;
  jQuery.cookie(cookieName, uniqueEventsArray, {
      expires: setCookieExpiry,
      path: setCookiePath,
      domain: setCookieDomain
  });
  //set count
  var count = uniqueEventsArray.length;
  jQuery(favCount).text('(' + count + ')');
  //add content to the form
  /*var inputContent = '';
  jQuery.each(uniqueEventsArray, function(i, val) {
      var id = val;
      inputContent += '+' + id;
  });
  jQuery(inputID).attr('value', '');
  jQuery(inputID).attr('value', inputContent);*/
}

/*
 * cookieName - uls_appwk_favs
 * domain - localhost
 * path - /
 * rowClass - '.ww_event'
 * favBtnClass - 'a.ww_event_fav_btn'
 * favCount - '.fav-count'
 * activeClass - 'alert'
 * openFavsTarget - '#open-favourites'
 * favsPagePath - 'https://www.ulster.ac.uk/welcome/favourites'
 * queryVar - ?events=
 * containerID = #events-listing
 * cookieExpiry = 800
 */
function ulsAppFavouritesActions(
  cookieName,
  domain,
  path,
  cookieExpiry,
  rowClass,
  favBtnClass,
  favCount,
  activeClass,
  openFavsTarget,
  favsPagePath,
  queryVar,
  queryVarSimple,
  containerID,
  favBtnClassSelected,
  callback,
  callback2
) {
  //favourite button actions
  jQuery(containerID).find(rowClass).each(function(e) {
    var favouriteBtn = jQuery(this).find(favBtnClass);
    favouriteBtn.click(function(e) {
        e.preventDefault();
        var setCookieExpiry = cookieExpiry;
        var setCookieDomain = domain;
        var setCookiePath = path;
        var favCookie = jQuery.cookie(cookieName);
        var assetID = jQuery(this).data('id');
        if (jQuery(this).hasClass(activeClass)) {
            //debug
            //console.log('this button has ' + activeClass);
            jQuery(this).removeClass(activeClass);
            var favCookie = jQuery.cookie(cookieName);
            var eventsArray = favCookie.split(',');
            for (var i = 0; i < eventsArray.length; i++) {
              eventsArray[i] = parseInt(eventsArray[i]);
            }
            //eventsArray.pop();
            //either add or remove the assetid to array
            if(jQuery.inArray(assetID, eventsArray) !== -1) {
              //debug
              //console.log('#######in array - FIND AND remove ' + assetID);
              eventsArray = jQuery.grep(eventsArray, function(value) {
                return value != assetID;
              });
            }
            jQuery.removeCookie(cookieName, {
                path: setCookiePath
            });
            jQuery.cookie.raw = true;
            jQuery.cookie(cookieName, eventsArray, {
                expires: setCookieExpiry,
                path: setCookiePath,
                domain: setCookieDomain
            });
            //set count
            var count = eventsArray.length;
            //debug
            //console.log(count);
            jQuery(favCount).text('(' + count + ')');

            //add content to the form
            /*var inputContent = '';
            jQuery.each(eventsArray, function(i, val) {
                var id = val;
                inputContent += '+' + id;
            });
            jQuery(inputID).attr('value', '');
            jQuery(inputID).attr('value', inputContent);*/
            //debug
            //console.log('######remove fav');
            callback2(favBtnClass, activeClass);
        } else {
            jQuery(this).addClass(activeClass);
            callback(cookieName, domain, path, cookieExpiry, favBtnClassSelected, favCount);
            callback2(favBtnClass, activeClass);
            //debug
            //console.log('######add fav');
        }
        //debug
        //console.log('Clicked favourite');
        //console.log(jQuery.cookie(cookieName));
        return false;
    });
    //favouriteBtn.css('display', 'block');
  });

  //re-select favourites
  var favCookie = jQuery.cookie(cookieName);
  if (favCookie) {
    var favouritesArray = favCookie.split(',');
    var count = favouritesArray.length;
    jQuery(favCount).text('(' + count + ')');
    jQuery.each(favouritesArray, function(i, val) {
        var id = val;
        jQuery('*[data-id="' + id + '"]').addClass(activeClass);
    });
  }

  jQuery(openFavsTarget).click(function(e) {
    e.preventDefault();
    var favCookie = jQuery.cookie(cookieName);
    var path = favsPagePath; // update this for production
    if (favCookie) {
        var favouritesArray = favCookie.split(',');
        var url = path + queryVar;
        jQuery.each(favouritesArray, function(i, id) {
            url += '+' + id;
        });
        //load the favourites
        window.location.href = url;
    }
  });

  jQuery.urlParam = function(name){
      var results = new RegExp('[\?&]' + name + '=([^&#]*)').exec(window.location.href);
      if (results==null){
         return 'notset';
      }
      else{
         return results[1] || 'notset';
      }
  }

  //set favourites by url
  //debug
  if (jQuery('#favourites-list').length > 0) {
    var query_param = jQuery.urlParam(queryVarSimple);
    if (query_param !== 'notset') {
      jQuery.cookie(cookieName, query_param, {
          expires: cookieExpiry,
          path: path,
          domain: domain
      });
      callback(cookieName, domain, path, cookieExpiry, favBtnClassSelected, favCount);
      callback2(favBtnClass, activeClass);
    }
  }
}

export {ulsAppFavouritesSet, ulsAppFavouritesActions, ulsAppFavButtonConfig}
