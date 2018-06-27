jQuery(document).ready(function() {
  function updatePageAndHistory(data, ajaxUrl, pushState) {
      if (pushState) {
          history.pushState({}, '', ajaxUrl);
      }
      var results = jQuery(data).find('#content-view');
      jQuery('#content-view').replaceWith(results);
  }
  var ajax;
  function ajaxRequest(searchURL, pushState) {
      jQuery('.departments a').addClass('init');
      if (!('history' in window) || !('pushState' in history)) {
        location.assign(searchURL);
      } else {
        if (ajax && ajax.readyState != 4) {
          ajax.abort();
        }
        ajax = jQuery.get(searchURL, function(data) {
            var payload = jQuery(jQuery.parseHTML(data));
            updatePageAndHistory(payload, this.url, pushState);
            var elem = new Foundation.Equalizer(jQuery('.staff-cards'));
            //clickEvents();
            //debug
            //console.log('success');
        }).done(function() {
            //debug
            //console.log('data loaded');
            jQuery('.departments a').removeClass('init');
        }).fail(function() {
            //debug
            //console.log('there was a problem');
            //location.reload();
        }).always(function() {
            //debug
            //console.log('finished');
        });
        jQuery('#content-view').prepend('<div class="preloader-container"><div class="preloader"><span class="hide">Loading search results</span> <img src="https://www.ulster.ac.uk/__data/assets/git_bridge/0010/256429/dist/assets/img/ulster-pre-loader.gif" width="169" height="169" alt="Loading results"/></div></div>');
      }
  }
  window.onpopstate = function(event) {
    ajaxRequest(document.location, false);
  };
  jQuery('#departments').submit(function(e) {
      e.preventDefault();
      ajaxRequest(jQuery(this).attr('action'), true);
  });
  function clickEvents() {
      jQuery('.departments>ul>ul>ul a').click(function(e) {
          e.preventDefault();
          jQuery('li.active').removeClass('active');
          jQuery('ul.active-ul').removeClass('active-ul');
          ajaxRequest(jQuery(this).attr('href'), true);
          jQuery('.active').removeClass('active');
          jQuery(this).parent('li').addClass('active');
          jQuery('html, body').animate({ scrollTop: 0 }, "slow");
          //jQuery(this).parent('li').parent('ul').parent('ul').children('li').addClass('active');
          jQuery(this).parents('ul').addClass('active-ul');
          jQuery('.departments>ul>ul').each(function() {
            if (jQuery(this).hasClass('active-ul')) {
            } else {
              jQuery(this).addClass('hide-departments');
            }
          });
      });
  }
  clickEvents();
  jQuery('.departments>ul>ul').each(function() {
    jQuery(this).addClass('hide-departments');
  });
  jQuery('.departments>ul>ul>li>a').each(function() {
    jQuery(this).click(function(e) {
      e.preventDefault();
      jQuery('html, body').animate({ scrollTop: 0 }, "slow");
      jQuery('ul').removeClass('active-ul');
      jQuery('.departments>ul>ul').addClass('hide-departments');
      jQuery('.active').removeClass('active');
      jQuery(this).parent('li').addClass('active');
      jQuery('.departments>ul>ul').each(function() {
        if (jQuery(this).hasClass('active-ul')) {
        } else {
          jQuery(this).addClass('hide-departments');
        }
      });
      if (jQuery(this).parent('li').parent('ul').hasClass('hide-departments')) {
        jQuery(this).parent('li').parent('ul').removeClass('hide-departments');
      } else {
        jQuery(this).parent('li').parent('ul').addClass('hide-departments');
      }
      if (jQuery(this).parent('li').parent('ul').hasClass('active-ul')) {
        jQuery(this).parent('li').parent('ul').addClass('hide-departments');
      } else {
        jQuery(this).parent('li').parent('ul').removeClass('hide-departments');
      }
      ajaxRequest(jQuery(this).attr('href'), true);
    });
  });
  jQuery('.departments>ul>li>a').each(function() {
    jQuery(this).click(function(e) {
      e.preventDefault();
      jQuery('.active').removeClass('active');
      jQuery(this).addClass('active');
      ajaxRequest(jQuery(this).attr('href'), true);
    });
  });
});
