!function(e){function r(u){if(o[u])return o[u].exports;var n=o[u]={i:u,l:!1,exports:{}};return e[u].call(n.exports,n,n.exports,r),n.l=!0,n.exports}var o={};return r.m=e,r.c=o,r.i=function(e){return e},r.d=function(e,o,u){r.o(e,o)||Object.defineProperty(e,o,{configurable:!1,enumerable:!0,get:u})},r.n=function(e){var o=e&&e.__esModule?function(){return e["default"]}:function(){return e};return r.d(o,"a",o),o},r.o=function(e,r){return Object.prototype.hasOwnProperty.call(e,r)},r.p="",r(r.s=90)}({68:function(e,r,o){"use strict";o(77)},77:function(e,r,o){"use strict";function u(e){var r=e;if(r){var o=r,u=o[3],n=o[4];1==u&&jQuery(".reslife").each(function(){jQuery(this).show()}),1==u&&(jQuery(".reslife").each(function(){jQuery(this).show()}),jQuery(".reslife-hidden").each(function(){jQuery(this).hide()})),1==n&&(jQuery(".international").each(function(){jQuery(this).show()}),jQuery(".international-hidden").each(function(){jQuery(this).hide()}))}}function n(e){for(var r=window.location.search.substring(1),o=r.split("&"),u=0;u<o.length;u++){var n=o[u].split("=");if(n[0]==e)return n[1]}}function i(e,r,o,u,n){var i=jQuery.cookie("uls_welcome_week_u");i&&jQuery.removeCookie("uls_welcome_week_u",{path:s}),jQuery.cookie.raw=!0,jQuery.cookie("uls_welcome_week_u",[e,r,o,u,n],{expires:c,path:s,domain:a})}function t(e){var r=jQuery.cookie("uls_welcome_week_c");r&&jQuery.removeCookie("uls_welcome_week_c",{path:s}),jQuery.cookie.raw=!0,jQuery.cookie("uls_welcome_week_c",e,{expires:c,path:s,domain:a})}var c=800,a="ulster.ac.uk",s="/",l="https://www.ulster.ac.uk/welcomeweek/_web_services/student-json";jQuery(document).ready(function(){!function(){var e=n("u");if(jQuery(".reslife").each(function(){jQuery(this).hide()}),jQuery(".international").each(function(){jQuery(this).hide()}),jQuery(".reslife").each(function(){jQuery(this).hide()}),jQuery(".international").each(function(){jQuery(this).hide()}),null===e&&""===e||jQuery.getJSON(l,function(r){var o=r.filter(function(r){return r.id==e});o.forEach(function(e,r){var o=e.id,n=e.fname,t=e.sname,c=e.reslife,a=e.international;if(i(o,n,t,c,a),jQuery.cookie("uls_welcome_week_u")){var s=jQuery.cookie("uls_welcome_week_u");s=s.split(","),u(s)}else{var l=[o,n,t,c,a];u(l)}})}),jQuery.cookie("uls_welcome_week_c")?jQuery("#app-toolbar-options").append('<a href="'+jQuery.cookie("uls_welcome_week_c")+'" class="button large expanded rounded no-margin-bottom shadow" id="back-to-course"><i class="fa fa-graduation-cap" aria-hidden="true"></i>&nbsp;&nbsp;View my course</a>'):jQuery("#back-to-course").remove(),jQuery("#course-id").length>0){jQuery("#back-to-course").remove();var r=jQuery("#course-id").data("url");t(r)}jQuery.cookie("uls_welcome_week_u")}()})},90:function(e,r,o){e.exports=o(68)}});