// init Isotope gallery masonry
if (jQuery('.ulster-isotope-grid').length > 0) {
  var $grid = $('.ulster-isotope-grid').isotope({
    itemSelector: '.grid-item',
    percentPosition: true,
    masonry: {
      columnWidth: '.grid-sizer'
    }
  });
  // layout Isotope after each image loads
  $grid.imagesLoaded().progress( function() {
    $grid.isotope('layout');
  });
}

//init filtering
if (jQuery('.ulster-isotope-grid-filter').length > 0) {
  var $grid = $('.ulster-isotope-grid-filter').isotope();
  $('.filter-button-group').on('click', 'a', function(e) {
    e.preventDefault();
    var filterValue = $(this).attr('data-filter');
    $grid.isotope({ filter: filterValue });
    Foundation.reInit('equalizer');
    //init hqy-lazy
    ;(function() {
        // Initialize
        var hqyLazy = new HqyLazyload({
          breakpoints: [{
              width: 420,
              src: 'data-src-small'
          }, {
              width: 768,
              src: 'data-src-medium'
          }],
          offset: 100
        });
    })();
  });
}
/*function initSocialWall() {
  if (jQuery('.uls-social-wall').length > 0) {
    $('.uls-social-wall .uls-social-wall-grid').isotope({
      itemSelector: '.uls-item',
      masonry: {
        columnWidth: 200
      }
    });
  }
}
$(window).load(function() {
  initSocialWall();
});*/
