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
      offset: 0
    });
})();

//custom load image backgrounds - this is not hqy-lazy
function lazyImageBackground() {
  var imgDefer = document.querySelectorAll('div[data-bg]');
  var style = "background-image: url({url})";
  for (var i = 0; i < imgDefer.length; i++) {
    imgDefer[i].setAttribute('style', style.replace("{url}", imgDefer[i].getAttribute('data-bg')));
  }
}
window.onload = function(){
  lazyImageBackground();
}
