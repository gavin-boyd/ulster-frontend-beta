function ulsFormInit() {
  jQuery(document).ready(function() {
    if (jQuery('form.uls-preloader').length > 0) {
      jQuery('form.uls-preloader').find('input[type=submit]').click(function() {
        jQuery('body').prepend('<div class="preloader-container"><div class="preloader"><span class="hide">Loading search results</span> <img src="https://cdn.ulster.ac.uk/home/ulster-frontend/beta/assets/img/ulster-pre-loader.gif" width="169" height="169" alt="Loading results"/></div></div>');
      });
    }
    if (jQuery('div.uls-preloader').length > 0) {
      jQuery('div.uls-preloader form').find('input[type=submit]').click(function() {
        jQuery('body').prepend('<div class="preloader-container"><div class="preloader"><span class="hide">Loading search results</span> <img src="https://cdn.ulster.ac.uk/home/ulster-frontend/beta/assets/img/ulster-pre-loader.gif" width="169" height="169" alt="Loading results"/></div></div>');
      });
    }
  });
}
export {ulsFormInit};
