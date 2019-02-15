jQuery(document).ready(function() {

    //site search
    jQuery("input#global-search").fbcompletion({
        'enabled': 'enabled',
        'collection': 'ulster-meta',
        'program': '//ulster.funnelback.co.uk/s/suggest.json',
        'format': 'extended',
        'alpha': '.5',
        'show': '10',
        'sort': '0',
        'length': '3',
        'delay': '0',
        'profile': '',
        'interactionLog': '//ulster.funnelback.co.uk/s/log',
        'zindex': '10000'
    });

    //course finder
    jQuery("input#query").fbcompletion({
        'enabled': 'enabled',
        'collection': 'ulster-dev',
        'program': '//ulster.funnelback.co.uk/s/suggest.json',
        'format': 'extended',
        'alpha': '.5',
        'show': '10',
        'sort': '0',
        'length': '3',
        'delay': '100',
        'profile': '_default',
        'interactionLog': '//ulster.funnelback.co.uk/s/log',
        'zindex': '10000',
        'view_all': 'enabled'
    });

    //departments and people
    jQuery("input#dept-query").fbcompletion({
        'enabled': 'enabled',
        'collection': 'ulster-departments-and-people',
        'program': '//ulster.funnelback.co.uk/s/suggest.json',
        'format': 'extended',
        'alpha': '.5',
        'show': '10',
        'sort': '0',
        'length': '3',
        'delay': '100',
        'profile': '_default',
        'interactionLog': '//ulster.funnelback.co.uk/s/log',
        'zindex': '10000',
        'view_all': 'enabled'
    });

    //education resources
    jQuery("input#eduresources-search").fbcompletion({
        'enabled': 'enabled',
        'collection': 'ulster-education-resources-system',
        'program': '//ulster.funnelback.co.uk/s/suggest.json',
        'format': 'extended',
        'alpha': '.5',
        'show': '10',
        'sort': '0',
        'length': '3',
        'delay': '100',
        'profile': '_default',
        'interactionLog': '//ulster.funnelback.co.uk/s/log',
        'zindex': '10000',
        'view_all': 'enabled'
    });

    //uu connect
    /*jQuery("input#uuc-search").fbcompletion({
        'enabled': 'enabled',
        'collection': 'ulster-student-connect',
        'program': '//ulster.funnelback.co.uk/s/suggest.json',
        'format': 'extended',
        'alpha': '.5',
        'show': '10',
        'sort': '0',
        'length': '3',
        'delay': '100',
        'profile': '_default',
        'interactionLog': '//ulster.funnelback.co.uk/s/log',
        'zindex': '10000',
        'view_all': 'enabled'
    });*/

    //science shop
    jQuery("input#science-shop-search").fbcompletion({
        'enabled': 'enabled',
        'collection': 'ulster-science-shop',
        'program': '//ulster.funnelback.co.uk/s/suggest.json',
        'format': 'extended',
        'alpha': '.5',
        'show': '10',
        'sort': '0',
        'length': '3',
        'delay': '100',
        'profile': '_default',
        'interactionLog': '//ulster.funnelback.co.uk/s/log',
        'zindex': '10000',
        'view_all': 'enabled'
    });
});
