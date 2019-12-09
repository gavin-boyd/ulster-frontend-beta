import $ from 'jquery';
import 'what-input';

// Foundation JS relies on a global varaible. In ES6, all imports are hoisted
// to the top of the file so if we used`import` to import Foundation,
// it would execute earlier than we have assigned the global variable.
// This is why we have to use CommonJS require() here since it doesn't
// have the hoisting behavior.
window.jQuery = $;
require('foundation-sites');

// If you want to pick and choose which modules to include, comment out the above and uncomment
// the line below
//import './lib/foundation-explicit-pieces';
$(document).foundation();

/*
 * Run jQuery as jQuery
 */
import jquery from 'jquery';
window.$ = window.jQuery = jquery;

/*
 * APIs
 */
require('./api/youtube/init');

/*
 * Plugins
 */

//fancybox
require('./plugins/fancybox/dist');
require('./plugins/fancybox/init');

//isotope
//require('./plugins/isotope/dist');
//require('./plugins/isotope/init');

//sticky video
//require('./plugins/stickyvideo/init');

//megamenu
require('./plugins/megamenu/init');

//Courses atoz
//require('./plugins/courses-atoz/init');

//Regions map
//require('./plugins/regions-map/init');

//jQuery Background Video
//require('./plugins/jquery-background-video/init');

//jquery ui
require('./plugins/funnelback-completion/jquery-ui');

//custom auto completion
require('./plugins/autocomplete/init');

//funnelback completion plugin
require('./plugins/funnelback-completion/funnelback-completion');
require('./plugins/funnelback-completion/funnelback-completion-init');

//departments campus facets
//require('./plugins/departments-campus-facets/init');

//service logos
//require('./plugins/servicelogos/init');

//mobile side nav
require('./plugins/mobilesidenav/init');

//add selected state background to form inputs checkboxes and radios
require('./plugins/selected-radios/init');

//prettyCheckable
require('./plugins/prettycheckable/init');

//cookies
require('./plugins/cookie/init');

//last search display for olp
//require('./plugins/last-search/init');

//image alternator
//require('./plugins/imagealternator/init');

//slick init
//require('slick-carousel');
//require('./plugins/slickslider/init');

//clearing site message
//////require('./plugins/clearing-audiences/site-message');

//people list hide last hr
//require('./plugins/peoplelist/init');

//custom smooth scroll
//require('./plugins/smooth-scroll/init');

//tilt js
//require('./plugins/tilt/tilt.jquery.js');
//require('./plugins/tilt/init.js');

//course finder at ulster.ac.uk/courses
require('./plugins/course-finder/init-upgrade');

//clearable
require('./plugins/clearable/init');

console.log('tester');

//hgy lazy
/* hqy-lazyload@v1.0.1 | https://github.com/Rockcookies/hqy-lazyload | A fast lightweight pure JavaScript script for lazy loading and multi-serving images, iframes, videos and more. */

!function(){function t(e){var o=n[e];return"object"==typeof o?o:(o.exports||(o.exports={},o.exports=o.call(o.exports,t,o.exports,o)||o.exports),o.exports)}function e(t,e){n[t]=e}var n={};e("./defaults.js",function(t,e,n){n.exports={root:document,container:!1,elements:".hqy-lazy",success:!1,error:!1,offset:2,separator:",",loadingClass:"hqy-loading",successClass:"hqy-loaded",errorClass:"hqy-error",breakpoints:!1,loadInvisible:!1,validateDelay:25,saveViewportOffsetDelay:50,srcset:"data-srcset",src:"data-src"}}),e("./dom.js",function(t,e,n){var o=t("./utils.js"),i=e.setAttr=function(t,e,n){t.setAttribute(e,n)},s=e.getAttr=function(t,e){return t.getAttribute(e)},r=(e.removeAttr=function(t,e){t.removeAttribute(e)},{}),a=e.hasClass=function(t,e){return r[e]||(r[e]=new RegExp("(\\s|^)"+e+"(\\s|$)")),r[e].test(s(t,"class")||"")&&r[e]};e.addClass=function(t,e){a(t,e)||i(t,"class",o.trim(s(t,"class")||"")+" "+e)},e.removeClass=function(t,e){var n;(n=a(t,e))&&i(t,"class",(s(t,"class")||"").replace(n," "))},e.toElements=function(t){if(o.isString(t))return e.querySelectorAll(t);if(t&&t.length){for(var n=[],i=t.length;i--;n.unshift(t[i]));return n}return t?[t]:[]},e.querySelectorAll=function(t,e){if(document.querySelectorAll)e=document.querySelectorAll(t);else{var n=document,o=n.styleSheets[0]||n.createStyleSheet();o.addRule(t,"f:b");for(var i=n.all,s=0,r=[],a=i.length;s<a;s++)i[s].currentStyle.f&&r.push(i[s]);o.removeRule(0),e=r}return e},e.contains=function(t,e,n){if(t==e)return!0;if(!e||!e.nodeType||1!=e.nodeType)return!1;if(t.contains)return t.contains(e);if(t.compareDocumentPosition)return!!(16&t.compareDocumentPosition(e));for(var o=e.parentNode;o&&o!=n;){if(o==t)return!0;o=o.parentNode}return!1},e.equal=function(t,e){return t.nodeName.toLowerCase()===e},e.bindEvent=function(t,e,n){t.attachEvent?t.attachEvent&&t.attachEvent("on"+e,n):t.addEventListener(e,n,{capture:!1,passive:!0})},e.unbindEvent=function(t,e,n){t.detachEvent?t.detachEvent&&t.detachEvent("on"+e,n):t.removeEventListener(e,n,{capture:!1,passive:!0})}}),e("./index.js",function(t,e,n){function o(t){this.init(t)}var i=t("./utils.js"),s=t("./defaults.js"),r=t("./dom.js"),a=t("./loadElement.js");n.exports=o;var l=(window.devicePixelRatio||window.screen.deviceXDPI/window.screen.logicalXDPI)>1,c=function(t,e){t.bottom=(window.innerHeight||document.documentElement.clientHeight)+e,t.right=(window.innerWidth||document.documentElement.clientWidth)+e};i.assign(o.prototype,a,{init:function(t){t=t||{},this.options={};for(var e in s)this.options[e]=t[e]||s[e];this.initContext(),this.render()},initContext:function(){var t=this.options,e=this.context={attrSrc:"src",attrSrcset:"srcset",source:t.src,elements:[],container:r.toElements(t.container)[0]||!1,destroyed:!0,isRetina:l,viewport:{top:0-t.offset,left:0-t.offset},validateT:i.throttle(function(){this.validate()},t.validateDelay,this),saveViewportOffsetT:i.throttle(function(){c(e.viewport,t.offset)},t.validateDelay,this)};c(e.viewport,t.offset),i.each(t.breakpoints,function(t){if(t.width>=window.screen.width)return e.source=t.src,!1})},render:function(){var t=this.options,e=this.context;e.elements=r.toElements(t.elements),e.destroyed&&(e.destroyed=!1,e.container&&r.bindEvent(e.container,"scroll",e.validateT),r.bindEvent(window,"resize",e.saveViewportOffsetT),r.bindEvent(window,"resize",e.validateT),r.bindEvent(window,"scroll",e.validateT)),this.validate()},destroy:function(){this.options;var t=this.context;t.container&&r.unbindEvent(t.container,"scroll",t.validateT),r.unbindEvent(window,"scroll",t.validateT),r.unbindEvent(window,"resize",t.validateT),r.unbindEvent(window,"resize",t.saveViewportOffsetT),t.elements=[],t.destroyed=!0},validate:function(){var t=this.options,e=this.context,n=e.elements,o=n.length;i.each(n,function(n){if(!(r.hasClass(n,e.loadingClass)||r.hasClass(n,t.successClass)||r.hasClass(n,t.errorClass)))return this.elementInView(n)?(this.loadElement(n),void o--):void 0;o--},this),o<=0&&this.destroy()},elementInView:function(t){var e=this.options,n=this.context,o=n.viewport,s=n.container,a=t.getBoundingClientRect();if(r.container&&r.contains(s,t)){var l=s.getBoundingClientRect();if(inView(l,o)){var c=l.top-e.offset,d=l.right+e.offset,u=l.bottom+e.offset,f=l.left-e.offset,h={top:c>o.top?c:o.top,right:d<o.right?d:o.right,bottom:u<o.bottom?u:o.bottom,left:f>o.left?f:o.left};return i.inView(a,h)}return!1}return i.inView(a,o)},load:function(t,e){this.context.elements=r.toElements(t),i.each(t,function(t){this.loadElement(element,e)},this)}})}),e("./loadElement.js",function(t,e,n){function o(t,e,n,o){var r=this,a=s.equal(t,"img"),l=e.split(n.separator),c=l[o.isRetina&&l.length>1?1:0],d=s.getAttr(t,n.srcset),u=t.parentNode,f=u&&s.equal(u,"picture");if(!a&&!i.isUndefined(t.src))return t.src=c,void this.loadElementSuccess(t);var h=new Image,v=function(){r.loadElementError(t,"invalid"),s.unbindEvent(h,"error",v),s.unbindEvent(h,"load",m)},m=function(){a?f||r.handleSrcsetElement(t,c,d):t.style.backgroundImage='url("'+c+'")',r.loadElementSuccess(t),s.unbindEvent(h,"error",v),s.unbindEvent(h,"load",m)};f&&(h=t,i.each(u.getElementsByTagName("source"),function(t){this.handleSourceElement(t,o.attrSrcset,n.srcset)},this)),s.addClass(t,n.loadingClass),s.bindEvent(h,"error",v),s.bindEvent(h,"load",m),this.handleSrcsetElement(h,c,d)}var i=t("./utils.js"),s=t("./dom.js");n.exports={handleSourceElement:function(t,e,n){var o=s.getAttr(t,n);o&&s.setAttr(t,e,o)},handleSrcsetElement:function(t,e,n){n&&s.setAttr(t,this.context.attrSrcset,n),t.src=e},loadElementSuccess:function(t){var e=this.options;s.addClass(t,e.successClass),s.removeClass(t,e.loadingClass),e.success&&e.success(t)},loadElementError:function(t,e){var n=this.options;n.error&&n.error(t,e),s.addClass(t,n.errorClass),s.removeClass(t,n.loadingClass)},loadElement:function(t,e){var n=this.options,r=this.context;if(e||n.loadInvisible||t.offsetWidth>0&&t.offsetHeight>0){var a=s.getAttr(t,r.source)||s.getAttr(t,n.src);a?o.call(this,t,a,n,r):(s.addClass(t,n.loadingClass),s.equal(t,"video")?(i.each(t.getElementsByTagName("source"),function(t){this.handleSourceElement(t,r.attrSrc,n.src)},this),t.load(),this.loadElementSuccess(t)):this.loadElementError(t,"missing"))}}}}),e("./utils.js",function(t,e,n){var o=e.hasOwnProperty=Object.prototype.hasOwnProperty,i=e.toString=Object.prototype.toString,s=e.each=function(t,e,n){if(t&&e)for(var o=t.length,i=0;i<o&&!1!==e.call(n,t[i],i);i++);};e.trim=function(t){return t.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,"")},e.assign=function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];if(null!=n)for(var i in n)o.call(n,i)&&(t[i]=n[i])}return t},e.isUndefined=function(t){return void 0===t},s(["Arguments","Function","String","Number","Date","RegExp","Error"],function(t){e["is"+t]=function(e){return i.call(e)==="[object "+t+"]"}}),e.throttle=function(t,e,n){var o=0;return function(){var i=+new Date;i-o<e||(o=i,t.apply(n,arguments))}},e.inView=function(t,e){return t.right>=e.left&&t.bottom>=e.top&&t.left<=e.right&&t.top<=e.bottom}}),"function"==typeof define&&define.amd?define(t("./index.js")):"object"==typeof exports?module.exports=t("./index.js"):window.HqyLazyload=t("./index.js")}();
require('./plugins/hqy-lazy/init');
