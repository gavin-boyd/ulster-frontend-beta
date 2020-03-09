jQuery(document).ready(function() {
  if (jQuery('form.uls-preloader').length > 0) {
    jQuery('form.uls-preloader').find('input[type=submit]').click(function() {
      jQuery('body').prepend('<div class="preloader-container"><div class="preloader"><span class="hide">Loading search results</span> <img src="https://www.ulster.ac.uk/__data/assets/git_bridge/0010/256429/dist/assets/img/ulster-pre-loader.gif" width="169" height="169" alt="Loading results"/></div></div>');
    });
  }
});
