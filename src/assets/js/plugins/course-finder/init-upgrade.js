import tinysort from 'tinysort';
function mobileFacets() {
  jQuery('#course-finder-mobile').click(function() {
    jQuery('#filters').show();
  });
  jQuery('#close-facets').click(function() {
    jQuery('#filters').hide();
  });
}
mobileFacets();
/*
 * this plugin saves the users last successful course search and then applies this to the course finder input
 * this is dependent on cookie
 */
function setLastSearch() {
  const setCookieExpiry = 800;
  const setCookieDomain = 'ulster.ac.uk';
  const setCookiePath = '/';
  var total = jQuery('#olpsearchresults').attr('data-total-results');
  var total = parseInt(total);
  var searchtext = jQuery('#query').val();
  if (total > 0 && searchtext !== '') {
    var cookie = jQuery.cookie('uls_last_course');
    if (cookie) {
      //update cookie
      jQuery.removeCookie('uls_last_course', {
          path: setCookiePath
      });
    }
    jQuery.cookie.raw = true;
    jQuery.cookie('uls_last_course', searchtext, {
        expires: setCookieExpiry,
        path: setCookiePath,
        domain: setCookieDomain
    });
  }
  //debug
  //console.log('cookie: ' + jQuery.cookie('uls_last_course'));
}
jQuery(document).ready(function() {
  setLastSearch();
});
//mobile modal menus
function removeModalElements(container) {
  jQuery(container).css('display','none');
  jQuery('html').removeClass('showModal');
  jQuery('body').removeClass('showModal');
}
function sortTheFacets() {
  if (jQuery('.Level_u ul>li').length > 0) {
    tinysort('.Level_u ul>li',{attr:'data-order'});
  }
  if (jQuery('.Campus_u ul>li').length > 0) {
    tinysort('.Campus_u ul>li',{attr:'data-campus'});
  }
  if (jQuery('.Attendance_u ul>li').length > 0) {
    tinysort('.Attendance_u ul>li',{attr:'data-order'});
  }
  if (jQuery('ul#course-types>li').length > 0) {
    tinysort('ul#course-types>li',{attr:'data-order'});
  }
}
sortTheFacets();
function showMobileMenu(menuOpenSel, menuCloseSel, container, childSel, windowHeight, typeflag) {
  var tabItems;
  var linkHref;
  jQuery(menuOpenSel).click(function (event) {
    event.preventDefault();
    jQuery(container).fadeIn('slow');
    jQuery(container + childSel).css('height', windowHeight);
    jQuery('html').addClass('showModal');
    jQuery('body').addClass('showModal');
    if (typeflag === 'sidetabs') {
      jQuery(container).addClass('sidetabsmodal');
      tabItems = jQuery(container + childSel + ' li a');
      jQuery(tabItems).click(function (event) {
        removeModalElements(container);
        linkHref = jQuery(this).attr('href');
        jQuery('html, body').animate({
          scrollTop: jQuery(linkHref).offset().top
        }, 0);
      });
    }
    jQuery(menuCloseSel).show();
  });
  jQuery(menuCloseSel).click(function (event) {
    event.preventDefault();
    removeModalElements(container);
    if (typeflag === 'sidetabs') {
      jQuery(container).removeClass('sidetabsmodal');
    }
  });
}
//filters modal
jQuery(window).resize(function() {
  var resizeHeight = jQuery(window).height();
  showMobileMenu('#showfilters', '#hidefilters', '#filters', ' > div', resizeHeight);
});
jQuery(document).ready(function ($) {
  //filters modal
  var resizeHeight = jQuery(window).height();
  showMobileMenu('#showfilters', '#hidefilters', '#filters', ' > div', resizeHeight);
  showMobileMenu('#showcoursemenu', '#hidecoursemenu', '.sidetabs', '', resizeHeight, 'sidetabs');
  //add selects
  function addSelects() {
    jQuery('#filters input:checkbox').each(function () {
      jQuery(this).prettyCheckable();
    });
    jQuery('#filters input:radio').each(function () {
      jQuery(this).prettyCheckable();
    });
  }
  //addSelects();
  function clearLastSearch() {
    var $_GET = {};
    document.location.search.replace(/\??(?:([^=]+)=([^&]*)&?)/g, function () {
      function decode(s) {
          return decodeURIComponent(s.split("+").join(" "));
      }
      $_GET[decode(arguments[1])] = decode(arguments[2]);
    });
    if(! $_GET["query"]) {
      jQuery('#clear-last-search').click(function () {
        var url = window.location.href;
        var value = url.substring(url.lastIndexOf('=') + 1);
        jQuery('#filters input:checkbox:checked[value="' + value + '"]').siblings('a').click();
      });
      jQuery('#clear-last-search-two').click(function () {
        var url = window.location.href;
        var value = url.substring(url.lastIndexOf('=') + 1);
        jQuery('#filters input:checkbox:checked[value="' + value + '"]').siblings('a').click();
      });
    } else {
      jQuery('#clear-last-search').click(function () {
        var url = window.location.href;
        var value = url.substring(url.lastIndexOf('&') + 1);
        url = url.replace(value, '');
        jQuery('#query').val('');
        jQuery('#course-finder-new').submit();
      });
      jQuery('#clear-last-search-two').click(function () {
        var url = window.location.href;
        var value = url.substring(url.lastIndexOf('&') + 1);
        url = url.replace(value, '');
        jQuery('#query').val('');
        jQuery('#course-finder-new').submit();
      });
    }
  }
  clearLastSearch();
  function convertDateFormat() {
    var moment = require('moment');
    //convert date formats to MMMM YYYY
    $.each(jQuery(".Start_dates .category ul li div label"), function(){
      var date = jQuery(this).text();
      var newDate = moment(date, "YYYY-MM-dd").format('MMMM YYYY');
      jQuery(this).text(newDate);
    });
    $.each(jQuery(".Start_dates_u .category ul li div label"), function(){
      var date = jQuery(this).text();
      var newDate = moment(date, "YYYY-MM-dd").format('MMMM YYYY');
      jQuery(this).text(newDate);
    });
    $.each(jQuery(".filters a"), function(){
      var date = jQuery(this).text();
      var newDate = moment(date, "YYYY-MM-dd").format('MMMM YYYY');
      if (newDate !== 'Invalid date') {
        jQuery(this).html(newDate + '<i class="fa fa-close"></i>');
      }
    });
    $.each(jQuery(".showingmsg h2 > span > span.date-sel"), function(){
      var date = jQuery(this).text();
      var newDate = moment(date, "YYYY-MM-dd").format('MMMM YYYY');
      if (newDate !== 'Invalid date') {
        jQuery(this).text(newDate);
      }
    });
  }
  convertDateFormat();
  function getUrlParameter(sParam) {
    var sPageURL = decodeURIComponent(window.location.search.substring(1)), sURLVariables = sPageURL.split('&'), sParameterName, i;
    for (i = 0; i < sURLVariables.length; i++) {
      sParameterName = sURLVariables[i].split('=');
      if (sParameterName[0] === sParam) {
        return sParameterName[1] === undefined ? true : sParameterName[1];
      }
    }
  }
  function checkSorttitle() {
    var sortTitle = getUrlParameter('sort');
    if (sortTitle == 'title') {
      jQuery('input#facettitle').prop('checked', true);
      jQuery('input#facettitle').next('a').addClass('checked');
      jQuery('input#facettitle').prev('h3').addClass('ui-state-active');
      jQuery('.Sort').css('display', 'block');
      jQuery('.showingmsg h2').append('<b class="sortedmsg">sorted A to Z</b>');
    } else {
      jQuery('input#facettitle').prop('checked', false);
      jQuery('input#facettitle').next('a').removeClass('checked');
      jQuery('input#facettitle').prev('h3').removeClass('ui-state-active');
      jQuery('.Sort').css('display', 'none');
      jQuery('.sortedmsg').remove();
    }
  }
  checkSorttitle();
  function olpAjaxCourseSearch() {
    // Override the form submit with an AJAX request
    jQuery('#course-finder-new').submit(function (event) {
      var searchURL = generateSearchURL();
      ajaxRequest(searchURL, true);
      event.preventDefault();
    });
    function addAccordion() {
      if (jQuery('.course-finder-new #filters .accordion h3').hasClass('ui-state-active')) {
        jQuery(this).next().show();
      }
      //add accordion to facets
      jQuery('.course-finder-new #filters .accordion h3').click(function () {
        jQuery(this).next().toggle('fast');
        jQuery(this).toggleClass('ui-state-active');
        return false;
      });/*.next().hide();*/
      jQuery('#course-finder-new #filters input:checkbox:checked').closest('.facetcategory').css('display', 'block');
      jQuery('#course-finder-new #filters input:checkbox:checked').closest('.facetcategory').prev('h3').addClass('ui-state-active');
    }
    addAccordion();
    // Generate the search URL by taking values from the inputs
    function generateSearchURL() {
      if (jQuery('#query').val() !== '') {
        var searchURL = '/courses?query=' + jQuery('#query').val() + ' ~Full-time';
      } else {
        var searchURL = '/courses?query=' + jQuery('#query').val();
      }
      jQuery('#course-finder-new #filters input:checkbox:checked, #course-finder-new #filters input:radio:checked').each(function () {
        // The input names are modified for Funnelback
        var name = jQuery(this).attr('name'), value = jQuery(this).val();
        //remove this...  name = name.slice(0, 1) + '.' + name.slice(1, -1) + '|' + name.slice(-1);
        searchURL += '&' + name + '=' + value;
      });
      return searchURL;
    }
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
        ajax = $.get(searchURL, function (data) {
          //filters modal
          var resizeHeight = jQuery(window).height();
          updatePageAndHistory(data, this.url, pushState);
          addSelects();
          addAccordion();
          convertDateFormat();
          sortTheFacets();
          mobileFacets();
          //compare_load_cookies();
          //compare_layout();
          //limit_compare();
          //limit_compare_dynamic();
          checkSorttitle();
          clearLastSearch();
          showMobileMenu('#showfilters', '#hidefilters', '#filters', ' > div', resizeHeight);
          //fix pagination li padding when no link present
          jQuery('.pagination ul li:not(:has(> a))').addClass("current");
          //remove showModal class
          jQuery('body').removeClass('showModal');
          jQuery('html').removeClass('showModal');
          setLastSearch();
          if (jQuery('.embed-course-listing').length > 0) {
            jQuery('.embed-course-listing').ulsterFavourites();
          }
        });
        if (!jQuery('#olpsearchresults').hasClass('search-opacity')) {
          jQuery('#olpsearchresults #course_list').addClass('search-opacity');
          jQuery('#filters').addClass('search-opacity');
          jQuery('#olpsearchresults').prepend('<div class="preloader-container" id="loading"><div class="preloader"><img src="https://www.ulster.ac.uk/__data/assets/git_bridge/0010/256429/dist/assets/img/ulster-pre-loader.gif" width="169" height="169" alt="Loading results"/><p id="loading-text" class="m-t-20">Loading results</p></div></div>');
          jQuery('#olpsearchresults').prepend('<div class="mfp-bg"></div>');
          jQuery('input#query').blur();
        }
      }
    }
    function updatePageAndHistory(data, ajaxUrl, pushState) {
      if (pushState) {
        history.pushState({}, '', ajaxUrl);
      }
      // Update #courseresults
      var results = jQuery(data).find('#olpsearchresults');
      jQuery('#olpsearchresults').replaceWith(results);
      // If the #filters element doesn't exist, add it
      if (!jQuery('#course-finder-new #filters').length) {
        jQuery('#olpsearchresults').after('<div id="filters"></div>');
      }
      // Update #filters
      var filters = jQuery(data).find('#course-finder-new #filters');
      jQuery('#course-finder-new #filters').replaceWith(filters);
    }
    // If back is clicked after an AJAX request, load the previous search
    window.onpopstate = function (event) {
      ajaxRequest(document.location, false);
    };
    // Change target filter checkboxes only
    jQuery('#main-content').on('change', 'input[type=checkbox]:not(".compare_selector"), input:radio', function () {
      jQuery('#course-finder-new').submit();
    });
    // Override the remove filter link and update the sidebar filters which will, in turn, submit the form
    jQuery('#course-finder-new').on('click', 'p.filters a', function (event) {
      //Get the filter value from the link that was clicked
      var filter = jQuery(this).attr('data-label');
      jQuery('#course-finder-new #filters input:checkbox:checked[value="' + filter + '"]').siblings('a').click();
      addAccordion();
      event.preventDefault();
    });
  }
  if (jQuery('#olpsearchresults').length) {
    olpAjaxCourseSearch();
  }
});
