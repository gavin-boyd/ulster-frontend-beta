// init Isotope
var $grid = $('.ulster-isotope-grid').isotope({
  // options...
});
// layout Isotope after each image loads
$grid.imagesLoaded().progress( function() {
  $grid.isotope('layout');
});
