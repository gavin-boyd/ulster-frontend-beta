/*
 * Description: includes favourites
 */

//https://github.com/foundation/foundation-zurb-template/blob/818f31ff2a22ff51a5c35de00e9148a0618e1b51/src/assets/js/lib/foundation-explicit-pieces.js
import $ from 'jquery';
import { Foundation } from 'foundation-sites/js/foundation.core';
import { OffCanvas } from 'foundation-sites/js/foundation.offcanvas';
import { Dropdown } from 'foundation-sites/js/foundation.dropdown';
import { Equalizer } from 'foundation-sites/js/foundation.equalizer';
import { Toggler } from 'foundation-sites/js/foundation.toggler';
import { Tabs } from 'foundation-sites/js/foundation.tabs';
import { SmoothScroll } from 'foundation-sites/js/foundation.smoothScroll';
import { Interchange } from 'foundation-sites/js/foundation.interchange';
Foundation.addToJquery($);
Foundation.plugin(OffCanvas, 'OffCanvas');
Foundation.plugin(Equalizer, 'Equalizer');
Foundation.plugin(Tabs, 'Tabs');
Foundation.plugin(Dropdown, 'Dropdown');
Foundation.plugin(Toggler, 'Toggler');
Foundation.plugin(SmoothScroll, 'SmoothScroll');
Foundation.plugin(Interchange, 'Interchange');
export { Foundation };
window.jQuery = $;
$(document).foundation();

/*
 * Run jQuery as jQuery
 */
import jquery from 'jquery';
window.$ = window.jQuery = jquery;

import {jqueryCookieInit} from './plugins/cookie/init';
import {fancyBox, fancyBoxInit} from './plugins/fancybox/dist';
import {hqyLazyInit, ulsLazyLoadInit} from './plugins/hqy-lazy/hqy-lazyload';
import {setLastSearch} from './plugins/last-search/init';
import {ulsterCookieConsentInit} from './plugins/cookie-consent/init';
import {ulsMegaMenuInit} from './plugins/megamenu/init';
import {ulsBreadcrumbInit} from './plugins/breadcrumb-style/init';
//import {initSiteMessage, initSiteMsgDismiss} from './plugins/site-message/init-site-message';
import {ulsAppFavouritesSet, ulsAppFavouritesActions, ulsAppFavButtonConfig} from './plugins/favourites/init';
import {slick} from 'slick-carousel';
import {ulsSliderInit} from './plugins/slickslider/init';
jqueryCookieInit();
fancyBox();
fancyBoxInit();
//initSiteMessage('https://www.ulster.ac.uk/_web_services/site-message/all-pages/_nocache', 'ulster.ac.uk');
//initSiteMsgDismiss();
ulsMegaMenuInit();
ulsterCookieConsentInit();
hqyLazyInit();
ulsLazyLoadInit();

ulsSliderInit();
ulsBreadcrumbInit();

ulsAppFavouritesSet(
  'uls_appwk_favs', //cookieName
  'ulster.ac.uk', //domain
  '/', //path
  800, //cookieExpiry
  'a.ulsAddFav.alert', //favBtnClassSelected
  '.ulsFavCount', //favCount
  'a.ulsAddFav', //favBtnClass
  'alert' //activeClass
);

ulsAppFavouritesActions(
  'uls_appwk_favs', //cookieName
  'ulster.ac.uk', //domain
  '/', //path
  800, //cookieExpiry
  '.event-cell', //rowClass
  'a.ulsAddFav', //favBtnClass
  '.ulsFavCount', //favCount
  'alert', //activeClass
  '#open-favourites', //openFavsTarget
  'https://www.ulster.ac.uk/applicant-weekend/playlist', //favsPagePath
  '?talks=', //queryVar
  'talks', //queryVarSimple
  '#events-listing', //containerID
  'a.ulsAddFav.alert', //favBtnClassSelected
  ulsAppFavouritesSet, //callback,
  ulsAppFavButtonConfig, //callbak 2
);

ulsAppFavButtonConfig(
  'a.ulsAddFav', //favBtnClass,
  'alert', //activeClass
  'favourites-list', //favouriteslistid
  '.event-cell' //rowClass
);
