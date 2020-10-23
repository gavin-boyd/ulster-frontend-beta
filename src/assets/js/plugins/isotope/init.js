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

if (jQuery('.ulster-masonry-grid').length > 0) {
  //$(window).on('load', function() {
     $('.ulster-masonry-grid').isotope({
       layoutMode: 'packery',
       packery: {
         gutter: '.ulster-masonry-grid-gutter-sizer'
       },
       itemSelector: '.ulster-masonry-grid-item',
       percentPosition: true
     });
  //});
}

if (jQuery('.ulster-isotope-grid-vert').length > 0) {
  var $grid = $('.ulster-isotope-grid-vert').isotope({
    itemSelector: '.course',
    layoutMode: 'vertical'
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

if (jQuery('.uls-filters').length > 0) {
  var $grid = $('.uls-filters').isotope();
  $('.filter-button-group').on('click', 'a', function(e) {
    e.preventDefault();
    var filterValue = $(this).attr('data-filter');
    $grid.isotope({ filter: filterValue });
    //Foundation.reInit('equalizer');
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

//init campus filters
jQuery(document).ready(function() {
  if (jQuery('.uls-campus-filters').length > 0) {
    jQuery('.uls-campus-filters').each(function() {
      jQuery(this).find('a').each(function() {
        var thisClass = jQuery(this).data('filter');
        if (jQuery(thisClass).length == 0) {
          jQuery(this).parent('li').hide();
        }
      });
    });
  }
});

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
