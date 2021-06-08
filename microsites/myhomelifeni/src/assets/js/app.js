import $ from 'jquery';
import 'what-input';

// Foundation JS relies on a global variable. In ES6, all imports are hoisted
// to the top of the file so if we used `import` to import Foundation,
// it would execute earlier than we have assigned the global variable.
// This is why we have to use CommonJS require() here since it doesn't
// have the hoisting behavior.
window.jQuery = $;
require('foundation-sites');

// If you want to pick and choose which modules to include, comment out the above and uncomment
// the line below
//import './lib/foundation-explicit-pieces';


$(document).foundation();

import jquery from 'jquery';
window.$ = window.jQuery = jquery;

import {fancyBox, fancyBoxInit} from './plugins/fancybox/dist';
import {hqyLazyInit, ulsLazyLoadInit} from './plugins/hqy-lazy/hqy-lazyload';
import {jqueryCookieInit} from './plugins/cookie/init';
import {ulsterCookieConsentInit} from './plugins/cookie-consent/init';
import {ulsBreadcrumbInit} from './plugins/breadcrumb-style/init';
fancyBox();
fancyBoxInit();
hqyLazyInit();
ulsLazyLoadInit();
jqueryCookieInit();
ulsterCookieConsentInit();
ulsBreadcrumbInit();
