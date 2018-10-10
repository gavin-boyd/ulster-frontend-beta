// init Isotope
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
