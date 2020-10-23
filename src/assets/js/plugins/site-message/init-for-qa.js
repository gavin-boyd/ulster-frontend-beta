//init the site message on ulsteruniversity.edu.qa
require('./init-site-message-old');
//site message init
jQuery(document).ready(function() {
    jQuery('body').ulsterSiteMessage('https://www.ulsteruniversity.edu.qa/_web_services/site-message/all-pages/_nocache', 'ulsteruniversity.edu.qa');
});
