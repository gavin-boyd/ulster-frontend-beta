/*
 * usage:
 * add class .uls-alternator
 * data-images="https://cdn.ulster.ac.uk/home/ulster-frontend/beta/assets/img/screenacademy/2.png,https://cdn.ulster.ac.uk/home/ulster-frontend/beta/assets/img/screenacademy/1.png"
 * data-image-classes="m-t-100 m-small-t-0 m-medium-t-0"
 */
function imageAlternator() {
  var selector = jQuery('.uls-alternator');
  if (selector.length > 0) {
    var images = selector.data('images');
    var images = images.split(',');
    selector.append('<img src="' + images[Math.floor(Math.random() * images.length)] + '" alt="" />');
    var imageclasses = selector.data('image-classes');
    selector.children('img').addClass(imageclasses);
  }
}
export {imageAlternator};
