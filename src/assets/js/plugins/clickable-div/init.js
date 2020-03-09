jQuery(document).ready(function() {
  if (jQuery('*[data-area="true"]').length > 0) {
    jQuery('*[data-area="true"]').each(function() {
      jQuery(this).css('cursor', 'pointer');
      ////jQuery(this).css('border', '1px solid red');
      jQuery(this).find('img').css('transition', 'transform .2s');
      jQuery(this).find('img').parent('a').css('overflow', 'hidden');
      jQuery(this).find('img').parent('a').css('display', 'block');
      ////jQuery(this).find('a:first').css('border', '5px solid purple');
      jQuery(this).click(function() {
        window.location(jQuery(this).attr('data-area-url'));
        return false;
      });
      jQuery(this).hover(
        function() {
          jQuery(this).find('a').css('text-decoration', 'none');
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
