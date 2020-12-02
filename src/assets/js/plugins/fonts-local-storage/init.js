//https://www.sitepoint.com/improving-font-performance-subsetting-local-storage/

(function () {
  'use strict';
  document.documentElement.className = 'fallback';
  var css_href = 'https://cdn.ulster.ac.uk/home/ulster-frontend/beta/assets/css/course-fonts.css';
  var localStorageSupported = function() {
    try {
      localStorage.setItem('test', 'test');
      localStorage.removeItem('test');
      return true;
    } catch(e) {
      return false;
    }
  }

  if (localStorageSupported() && localStorage.fontaw) {
    injectRawStyle(localStorage.getItem('fontaw'));
  } else {
    window.onload = function() {
      injectFontsStylesheet();
    }
  }

  function injectFontsStylesheet() {
    var xhr = new XMLHttpRequest();
      xhr.open('GET', css_href, true);
      xhr.onreadystatechange = function() {
        if (xhr.readyState === 4) {
          injectRawStyle(xhr.responseText);
          localStorage.setItem('fontaw', xhr.responseText);
        }
      }
    xhr.send();
  }

  function injectRawStyle(text) {
    var style = document.createElement('style');
    style.innerHTML = text;
    document.getElementsByTagName('head')[0].appendChild(style);
    document.documentElement.className = 'webFont';
  }
}());
