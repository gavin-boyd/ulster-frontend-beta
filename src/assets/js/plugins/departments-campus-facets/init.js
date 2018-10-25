function initCampusFiltersOnDepartments() {
  jQuery('#campus-filters').children('a').click(function(e) {
    e.preventDefault();
    var href = jQuery(this).attr('href');
    jQuery('#campus-filters a:not(.hollow)').addClass('hollow');
    jQuery(this).removeClass('hollow');
    jQuery('body').prepend('<div class="preloader-container"><div class="preloader"><span class="hide">Loading search results</span> <img src="https://www.ulster.ac.uk/__data/assets/git_bridge/0010/256429/dist/assets/img/ulster-pre-loader.gif" width="169" height="169" alt="Loading results"/></div></div>');
    jQuery('#staff-cards-results').load(href + ' #staff-cards-results', function() {
      jQuery('.preloader-container').remove();
      jQuery(document).foundation();
    });
  });
}
initCampusFiltersOnDepartments();
