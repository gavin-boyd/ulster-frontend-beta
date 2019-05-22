var $grid = $('.grid').isotope({
  itemSelector: '.testimonial-iso',
  layoutMode: 'masonry'
});
jQuery('.filter-country').on('click', 'a', function(e) {
  e.preventDefault();
  var filterValue = jQuery(this).attr('data-filter');
  $grid.isotope({ filter: filterValue });
  location.hash = 'country=' + encodeURIComponent(filterValue);
  //jQuery('#country-title').text(filterValue);
});
jQuery('.filter-subject').on('click', 'a', function(e) {
  e.preventDefault();
  var filterValue = jQuery(this).attr('data-filter');
  $grid.isotope({ filter: filterValue });
  location.hash = 'subject=' + encodeURIComponent(filterValue);
  //jQuery('#country-title').text(filterValue);
});
