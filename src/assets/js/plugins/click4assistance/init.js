/*
 * This plugin adds click4assistance js async if the url is found in the url json file
 */
jQuery(document).ready(function() {
    var apiURL = 'https://www.ulster.ac.uk/_web_services/purechat.json/_nocache';
    jQuery.ajax({
      type: 'GET',
      url: apiURL,
      success: function (data) {
        var check = data.click4assistance.urls;
        var currentURL;
        //debug
        //console.log(JSON.stringify(check) + ' found! ' + check.length);
        for (var i = 0; i < check.length; i++) {
            var obj = check[i]
            var url = obj[0];
            var guid = obj[1];
            var wfguid = obj[2];
            if (url) {
                if (url.indexOf('?') != -1) {
                    currentURL = window.location.href;
                } else {
                    currentURL = location.protocol + '//' + location.host + location.pathname;
                }
            }
            currentURL = currentURL.replace('/_recache', '');
            currentURL = currentURL.replace('/_nocache', '');
            if (url == currentURL) {
                function script(url) {
                  var s = document.createElement('script');
                  s.type = 'text/javascript';
                  s.async = false;
                  s.src = url;
                  var x = document.getElementsByTagName('head')[0];
                  x.appendChild(s);
                }
                script('//cdn.ulster.ac.uk/home/ulster-frontend/js/click4assistance.js');
                function C4AWJSLoaded(guid, wfguid) {
                    oC4AW_Widget = new oC4AW_Widget();
                    oC4AW_Widget.setAccGUID("CD44000A-B9CB-4689-BCDD-0A909F0F65CA");
                    oC4AW_Widget.setWSGUID("680c6c21-116b-46ba-b44b-4ef5a76f97a8");
                    oC4AW_Widget.setWFGUID(guid);
                    oC4AW_Widget.setPopupWindowWFGUID(wfguid);
                    oC4AW_Widget.setDockPosition("BOTTOM");
                    oC4AW_Widget.setBtnStyle("position:fixed; border:none; bottom:0em; right:1em; z-index:9999;");
                    oC4AW_Widget.setIdentity("Embedded Chat");
                    oC4AW_Widget.Initilize();
                }
                //debug
                /*console.log('init script');
                console.log(url);
                console.log(guid);
                console.log(wfguid);*/
                //click4assistance code init
                C4AWJSLoaded(guid, wfguid);
            }
        }
      }
    });
});
