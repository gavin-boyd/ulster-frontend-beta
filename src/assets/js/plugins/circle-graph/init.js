//https://get.foundation/building-blocks/blocks/circle-graph.html
jQuery("[data-circle-graph]").each(function() {
  var graph = jQuery(this);
  var percent = parseFloat(parseInt(graph.data('number-one'), 10) * 100) / parseInt(graph.data('number-two'), 10);
  var deg = 360*percent/100;
  if(percent > 50) {
    graph.addClass('gt-50');
  }
  graph.find('.circle-graph-progress-fill').css('transform','rotate('+ deg +'deg)');
  //graph.find('.circle-graph-percents-number').html(percent+'%');
});
