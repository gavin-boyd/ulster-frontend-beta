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