/* Foundation - Start */
import $ from 'jquery';
import 'what-input';
window.jQuery = $;
require('foundation-sites');
$(document).foundation();

//sticky fix - https://github.com/foundation/foundation-sites/issues/9892#issuecomment-401360310
if (Foundation.MediaQuery.current == 'small') {
  $('.ulsguide.sticky').removeAttr('data-sticky');
}
/* Foundation - End */

/*
 * Run jQuery as jQuery
 */
import jquery from 'jquery';
window.$ = window.jQuery = jquery;


import {fancyBox, fancyBoxInit} from './plugins/fancybox/dist';
import {hqyLazyInit, ulsLazyLoadInit} from './plugins/hqy-lazy/hqy-lazyload';
//import {pkgIsotope, isotopeInit} from './plugins/isotope/init';
import {stickyVideoInit} from './plugins/stickyvideo/init';
import {ulsMegaMenuInit} from './plugins/megamenu/init';
import {coursesAlphabeticalInit} from './plugins/courses-atoz/init';
import {interactiveMapsInit} from './plugins/regions-map/init';
import {backgroundVideos} from './plugins/jquery-background-video/init';
import {jQueryUIInit} from './plugins/funnelback-completion/jquery-ui';
import {customAutoCompleteInit} from './plugins/autocomplete/init';
import {funnelbackCompletion} from './plugins/funnelback-completion/funnelback-completion';
import {funnelbackCompletionInit} from './plugins/funnelback-completion/funnelback-completion-init';
import {initCampusFiltersOnDepartments} from './plugins/departments-campus-facets/init';
import {serviceLogoMob} from './plugins/servicelogos/init';
import {initMobileSideNav} from './plugins/mobilesidenav/init';
import {ulsSelectedRadios} from './plugins/selected-radios/init';
import {jqueryCookieInit} from './plugins/cookie/init';
import {ulsSetC} from './plugins/cookie/create';
import {setLastSearch} from './plugins/last-search/init';
import {imageAlternator} from './plugins/imagealternator/init';
import {slick} from 'slick-carousel';
import {ulsSliderInit, ulsVideoSliderInit} from './plugins/slickslider/init';
import {initSiteMessage, initSiteMsgDismiss} from './plugins/site-message/init-site-message';
import {ulsPeopleList} from './plugins/peoplelist/init';
import {ulsSmoothScrollInit} from './plugins/smooth-scroll/init';
import {ulsterCookieConsentInit} from './plugins/cookie-consent/init';
import {ulsResponsiveContentInit} from './plugins/responsive-content/init';
import {ulsContentImagesInit} from './plugins/content-images/init';
import {ulsNestedFacets} from './plugins/nested-faceted-courses/init';
import {ulsCourseMobTabs} from './plugins/course-mob-tabs/init';
import {checkForContent} from './plugins/check-for-content/init';
import {ulsBreadcrumbInit} from './plugins/breadcrumb-style/init';
import {ulsFormInit} from './plugins/form-preloader/init';
import imagefill from 'imagefill';
import {ulsDashboardCircleGraphInit} from './plugins/circle-graph/init';
import {ulsReadingProgressIndicatorInit} from './plugins/readingProgressIndicator/init';
import {ulsAppFavouritesSet, ulsAppFavouritesActions} from './plugins/favourites/init';
fancyBox();
fancyBoxInit();
hqyLazyInit();
ulsLazyLoadInit();
//pkgIsotope();
//isotopeInit();
stickyVideoInit();
ulsMegaMenuInit();
coursesAlphabeticalInit();
interactiveMapsInit();
backgroundVideos();
jQueryUIInit();
customAutoCompleteInit();
funnelbackCompletion();
funnelbackCompletionInit(); /* ####### add in vars */
initCampusFiltersOnDepartments();
serviceLogoMob();
initMobileSideNav();
//ulsSelectedRadios();
jqueryCookieInit();
ulsSetC('691272', 'uls_campaign_video_wgt', 'y');
setLastSearch();
imageAlternator();
ulsSliderInit();
ulsVideoSliderInit();
initSiteMessage('https://www.ulster.ac.uk/_web_services/site-message/all-pages/_nocache', 'ulster.ac.uk');
initSiteMsgDismiss();
ulsPeopleList();
ulsSmoothScrollInit();
ulsterCookieConsentInit();
ulsResponsiveContentInit();
ulsContentImagesInit();
ulsNestedFacets();
ulsCourseMobTabs();
checkForContent();
ulsBreadcrumbInit();
ulsFormInit();
jQuery(document).ready(function() {
  jQuery('.uls-fill-image').imagefill();
});
ulsDashboardCircleGraphInit();
ulsReadingProgressIndicatorInit();

ulsAppFavouritesSet(
  'uls_appwk_favs', //cookieName
  'localhost', //domain
  '/', //path
  800, //cookieExpiry
  'a.ulsAddFav.alert', //favBtnClass
  '.ulsFavCount' //favCount
);

ulsAppFavouritesActions(
  'uls_appwk_favs', //cookieName
  'localhost', //domain
  '/', //path
  800, //cookieExpiry
  '.event-cell', //rowClass
  'a.ulsAddFav', //favBtnClass
  '.ulsFavCount', //favCount
  'alert', //activeClass
  '#open-favourites', //openFavsTarget
  'https://www.ulster.ac.uk/welcome/favourites', //favsPagePath
  '?events=', //queryVar
  '#events-listing', //containerID
  ulsAppFavouritesSet, //callback,
  'a.ulsAddFav.alert' //favBtnClassSelected
);
