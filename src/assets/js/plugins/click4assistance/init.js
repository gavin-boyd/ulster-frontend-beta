/*
 * This plugin adds click4assistance js async if the url is found in the url json file
 */
jQuery(document).ready(function() {
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
    var apiURL = "https://www.ulster.ac.uk/_web_services/purechat.json/_nocache";
    jQuery.getJSON(apiURL, function(data) {
            var check = data.click4assistance.urls;
            var currentURL;
            //debug
            //console.log(JSON.stringify(check) + ' found! ' + check.length);
            for (i = 0; i < check.length; i++) {
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
                    //debug
                    /*console.log('init script');
                    console.log(url);
                    console.log(guid);
                    console.log(wfguid);*/
                    //click4assistance code init
                    C4AWJSLoaded(guid, wfguid);
                }
            }
        }).success(function() {
            //console.log("second success");
        })
        .error(function(jqXHR, textStatus, errorThrown) {
            //console.log("error " + textStatus);
            //console.log("incoming Text " + jqXHR.responseText);
        })
        .complete(function() {
            //console.log("complete");
        });
});
