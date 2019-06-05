jQuery(document).ready(function() {
  function addBanner(phone, url, colour) {
    var html = '<div class="' + colour + ' p-t-10 p-b-10 shadow"><div class="grid-container"><div class="grid-x"><div class="cell small-12 medium-4 large-6 p-t-5 p-medium-t-0 text-center-small-only m-small-b-10"><p class="m-b-0"><span class="h2 text-white"><span class="fa fa-bell-o shake" aria-hidden="true"></span></span>&nbsp;&nbsp;<span class="bl h2 text-white">Clearing 2019</span>&nbsp;&nbsp;&nbsp;&nbsp;<br class="hide-for-large"><span class="text-white">Places are still available!</span></p></div><div class="cell small-12 medium-4 large-3"><div class="p-r-10 p-small-r-0"><a href="tel:' + phone + '" class="button rounded expanded m-b-0 bl m-medium-t-10 m-small-b-10"><span class="fa fa-phone" aria-hidden="true"></span>&nbsp;&nbsp;Call ' + phone + '</a></div></div><div class="cell small-12 medium-4 large-3"><a href="' + url + '" class="button rounded expanded m-b-0 m-medium-t-10 bl">View courses and apply&nbsp;&nbsp;<span class="fa fa-angle-right" aria-hidden="true"></span></a></div></div></div></div>'
    jQuery('body').prepend(html);
  }
  var cookie = jQuery.cookie('uls_clearing_a');
  if (cookie) {
    if (cookie == 'gb') {
      addBanner('028 9036 6565', 'https://www.ulster.ac.uk/clearing/gb', 'bg-pink');
    }
    if (cookie == 'nieu') {
      addBanner('028 7028 7028', 'https://www.ulster.ac.uk/clearing/ni-eu', 'bg-pink');
    }
  }
});
