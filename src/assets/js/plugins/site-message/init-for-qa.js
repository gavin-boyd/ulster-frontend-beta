//init the site message on ulsteruniversity.qa
require('./init-site-message');
//site message init
jQuery(document).ready(function() {
    jQuery('body').ulsterSiteMessage('https://www.ulsteruniversity.qa/_web_services/site-message/all-pages/_nocache', 'ulsteruniversity.qa');
});
