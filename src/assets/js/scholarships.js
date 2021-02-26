//https://github.com/foundation/foundation-zurb-template/blob/818f31ff2a22ff51a5c35de00e9148a0618e1b51/src/assets/js/lib/foundation-explicit-pieces.js
import $ from 'jquery';
import { Foundation } from 'foundation-sites/js/foundation.core';
import { OffCanvas } from 'foundation-sites/js/foundation.offcanvas';
//import { Equalizer } from 'foundation-sites/js/foundation.equalizer';
//import { Toggler } from 'foundation-sites/js/foundation.toggler';
//import { Tabs } from 'foundation-sites/js/foundation.tabs';
Foundation.addToJquery($);
Foundation.plugin(OffCanvas, 'OffCanvas');
//Foundation.plugin(Equalizer, 'Equalizer');
//Foundation.plugin(Toggler, 'Toggler');
//Foundation.plugin(Tabs, 'Tabs');
export { Foundation };
window.jQuery = $;
$(document).foundation();

/*
 * Run jQuery as jQuery
 */
import jquery from 'jquery';
window.$ = window.jQuery = jquery;

/*
 * dependencies
 * fancybox
 * megamenu
 * /plugins/funnelback-completion/jquery-ui ??
 * ./plugins/autocomplete/init ??
 * prettycheckable
 * jquery-cookie
 */

import {jqueryCookieInit} from './plugins/cookie/init';
import {hqyLazyInit, ulsLazyLoadInit} from './plugins/hqy-lazy/hqy-lazyload';
//import {setLastSearch} from './plugins/last-search/init';
import {ulsterCookieConsentInit} from './plugins/cookie-consent/init';
import {ulsMegaMenuInit} from './plugins/megamenu/init';
import {ulsBreadcrumbInit} from './plugins/breadcrumb-style/init';
import {prettyCheckableInit} from './plugins/prettycheckable/init';
//import {initSiteMessage, initSiteMsgDismiss} from './plugins/site-message/init-site-message';
import {ulsCourseMobTabs} from './plugins/course-mob-tabs/init';
//import {fancyBox, fancyBoxInit} from './plugins/fancybox/dist';
import {initCourseFinderFavs} from './plugins/course-finder/init-favs';
//import {tinysort} from 'tinysort';
import {mobileFacets, removeModalElements, sortTheFacets, showMobileMenu, courseFinderInit} from './plugins/course-finder/init-upgrade';
import {initClearable} from './plugins/clearable/init';
import {jQueryUIInit} from './plugins/funnelback-completion/jquery-ui';
import {funnelbackCompletion} from './plugins/funnelback-completion/funnelback-completion';
import {funnelbackCompletionInit} from './plugins/funnelback-completion/funnelback-completion-init';
jqueryCookieInit();
//initSiteMessage('https://www.ulster.ac.uk/_web_services/site-message/all-pages/_nocache', 'ulster.ac.uk');
//initSiteMsgDismiss();
ulsterCookieConsentInit();
hqyLazyInit();
ulsLazyLoadInit();
ulsBreadcrumbInit();
//fancyBox();
//fancyBoxInit();
prettyCheckableInit();
initCourseFinderFavs('https://www.ulster.ac.uk/scholarships/search');
mobileFacets();
//setLastSearch();
removeModalElements();
//sortTheFacets();
showMobileMenu();
courseFinderInit('/scholarships/search');
initClearable();
ulsMegaMenuInit();
//filters modal
jQuery(window).resize(function() {
  var resizeHeight = jQuery(window).height();
  showMobileMenu('#showfilters', '#hidefilters', '#filters', ' > div', resizeHeight);
});
jQueryUIInit();
funnelbackCompletion();
funnelbackCompletionInit('input#query', 'ulster-scholarships');
