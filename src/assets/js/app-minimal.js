//https://github.com/foundation/foundation-zurb-template/blob/818f31ff2a22ff51a5c35de00e9148a0618e1b51/src/assets/js/lib/foundation-explicit-pieces.js
import $ from 'jquery';
import { Foundation } from 'foundation-sites/js/foundation.core';
import { OffCanvas } from 'foundation-sites/js/foundation.offcanvas';
import { Equalizer } from 'foundation-sites/js/foundation.equalizer';
import { Toggler } from 'foundation-sites/js/foundation.toggler';
Foundation.addToJquery($);
Foundation.plugin(OffCanvas, 'OffCanvas');
Foundation.plugin(Equalizer, 'Equalizer');
Foundation.plugin(Toggler, 'Toggler');
export { Foundation };
window.jQuery = $;
$(document).foundation();

/*
 * Run jQuery as jQuery
 */
import jquery from 'jquery';
window.$ = window.jQuery = jquery;

import {jqueryCookieInit} from './plugins/cookie/init';
import {hqyLazyInit, ulsLazyLoadInit} from './plugins/hqy-lazy/hqy-lazyload';
import {setLastSearch} from './plugins/last-search/init';
import {ulsterCookieConsentInit} from './plugins/cookie-consent/init';
import {megaMenuInit} from './plugins/megamenu/init';
import {initSiteMessage, initSiteMsgDismiss} from './plugins/site-message/init-site-message';
jqueryCookieInit();
initSiteMessage('https://www.ulster.ac.uk/_web_services/site-message/all-pages/_nocache', 'ulster.ac.uk');
initSiteMsgDismiss();
megaMenuInit();
ulsterCookieConsentInit();
hqyLazyInit();
ulsLazyLoadInit();
