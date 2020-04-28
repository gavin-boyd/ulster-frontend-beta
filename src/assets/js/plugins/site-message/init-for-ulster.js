//init the site message on ulsteruniversity.qa
require('./init-site-message');
//site message init
jQuery(document).ready(function() {
    jQuery('body').ulsterSiteMessage('https://www.ulster.ac.uk/_web_services/site-message/all-pages/_nocache', 'ulster.ac.uk');
});
