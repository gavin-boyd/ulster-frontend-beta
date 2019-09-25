jQuery(document).ready(function() {
  if (jQuery('*[data-area="true"]').length > 0) {
    jQuery('*[data-area="true"]').each(function() {
      jQuery(this).css('cursor', 'pointer');
      jQuery(this).css('border', '1px solid red');
      jQuery(this).find('img').css('transition', 'transform .2s');
      jQuery(this).find('img').parent('a').css('overflow', 'hidden');
      jQuery(this).find('img').parent('a').css('display', 'block');
      jQuery(this).click(function() {
        //debug
        console.log('tester 1');
        console.log(jQuery(this).find('a:first'));
        return false;
      });
      jQuery(this).hover(
        function() {
          jQuery(this).find('a').css('text-decoration', 'underline');
          jQuery(this).find('img').css('transform', 'scale(1.1)');
        },
        function() {
          jQuery(this).find('a').css('text-decoration', 'none');
          jQuery(this).find('img').css('transform', 'scale(1)');
        },
      );
    });
  }
});
