jQuery(document).ready(function() {
  jQuery('.wysiwyg-imgs img').each(function() {
    jQuery(this).parent('p').css('max-width', 'none');
    jQuery(this).parent('p').css('margin-left', '0');
    jQuery(this).parent('p').css('margin-right', '0');
  });
});
