/*
 * this plugin saves the users last successful course search and then applies this to the course finder input
 * this is dependent on cookie
 */
function setLastSearch() {
  var cookie = jQuery.cookie('uls_last_course');
  if (cookie) {
    jQuery('.course-finder #query').val(cookie);
  }
}
export {setLastSearch}
