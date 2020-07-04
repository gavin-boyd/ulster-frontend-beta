jQuery(document).ready(function() {
  jQuery('[data-fancybox]').fancybox({
  	iframe : {
  		preload : false
  	},
    afterShow: function(unstance, current) {
      var hqyLazy = new HqyLazyload({
        breakpoints: [{
            width: 420,
            src: 'data-src-small',
            offset: 0
        }, {
            width: 768,
            src: 'data-src-medium',
            offset: 0
        }],
        offset: 0
      });
    }
  });
});
