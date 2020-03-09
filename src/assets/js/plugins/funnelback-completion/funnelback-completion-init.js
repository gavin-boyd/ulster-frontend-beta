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

    jQuery("input#global-search-inside").fbcompletion({
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
    //refactored to use new auto suggestions
    /*jQuery("input#query").fbcompletion({
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
    });*/

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

    //hr site search
    jQuery("input#hr-search").fbcompletion({
        'enabled': 'enabled',
        'collection': 'ulster-hr',
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

    //doctoral college site search
    jQuery("input#dc-search").fbcompletion({
        'enabled': 'enabled',
        'collection': 'doctoral-college',
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

    //site search
    jQuery("input#careers-search").fbcompletion({
        'enabled': 'enabled',
        'collection': 'ulster-careers-services',
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

    //isd policies search
    jQuery("input.isd-policies").fbcompletion({
        'enabled': 'enabled',
        'collection': 'ulster-policy-checker',
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

    //isd site search
    jQuery("input#isd-search").fbcompletion({
        'enabled': 'enabled',
        'collection': 'ulster-isd',
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

    //ulsteruniversity.qa site search
    jQuery("input#qatar-search").fbcompletion({
        'enabled': 'enabled',
        'collection': 'ulster-qatar',
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

    //sports services site search
    jQuery("input#sport-search").fbcompletion({
        'enabled': 'enabled',
        'collection': 'ulster-sport',
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
});
