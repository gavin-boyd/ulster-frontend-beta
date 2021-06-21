function ulsNestedFacets() {
  jQuery(document).ready(function() {
    //debug
    //console.log('init course embed component');
    if (jQuery('.uls-faceted-embed').length > 0) {
      jQuery('.uls-faceted-embed').each(function() {
        var uid = Math.floor(Math.random() * 100001);
        var uid = 'output-courses-' + uid;
        var preloader = '<div class="preloader-container" id="loading"><div class="preloader"><img src="https://cdn.ulster.ac.uk/home/ulster-frontend/beta/assets/img/ulster-pre-loader.gif" width="169" height="169" alt="Loading results"/><p id="loading-text" class="m-t-20">Loading results</p></div></div>';
        var queryURL = jQuery(this).data('query');
        queryURL = queryURL.replace('https://www.ulster.ac.uk/courses?','https://ulster.funnelback.co.uk/s/search.html?collection=ulster-dev&profile=_default&form=tabs&');
        var content = jQuery(this).find('#output-courses').attr('id', uid);

        jQuery(this).find('.facets').children('a.facet').each(function() {
          jQuery(this).click(function(e) {
            e.preventDefault();

            //add preloader
            jQuery(this).parents('div').next('#' + uid).append(preloader);

            //facet
            var facet = jQuery(this).data('facet');
            var facet_val = jQuery(this).data('facet-value');

            //set active state
            jQuery(this).parent('div').children('a').addClass('hollow');
            if (jQuery(this).hasClass('hollow')) {
              jQuery(this).removeClass('hollow');
            }

            //debug
            //console.log(queryURL + '&' + facet + '=' + facet_val + ' #' + uid);

            content.load(queryURL + '&' + facet + '=' + facet_val + ' #output-courses', function() {
              //remove preloader
              jQuery('.preloader-container').remove();
            });
          });
        });

        //on load activate first facet
        jQuery(this).find('.facets').children('a').first().click();
      });
    }
  });
}
export {ulsNestedFacets};
