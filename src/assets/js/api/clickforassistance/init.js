function script(url) {
  var s = document.createElement('script');
  s.type = 'text/javascript';
  s.async = false;
  s.src = url;
  var x = document.getElementsByTagName('head')[0];
  x.appendChild(s);
}
script('//cdn.ulster.ac.uk/home/ulster-frontend/js/click4assistance.js');
