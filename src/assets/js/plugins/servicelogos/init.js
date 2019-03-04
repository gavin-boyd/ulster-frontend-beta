function serviceLogoMob() {
  if (jQuery('.service span').length > 0) {
    var service = jQuery('.service span');
    var name = service.text();
    var mobHTML = '<div class="service mob p-l-10 p-r-10 p-t-10 p-b-10"><p class="m-b-0">' + name + '</p></div>';
    var mobHTMLTwo = '<div class="service mob p-l-10 p-r-10 p-t-10 p-b-10"><p class="m-b-0">' + name + '</p></div>';
    jQuery('.show-for-small-only .off-canvas-content').append(mobHTML);
    jQuery('.multilevel-offcanvas > ul > li:first').append(mobHTMLTwo);
  }
}
serviceLogoMob();
