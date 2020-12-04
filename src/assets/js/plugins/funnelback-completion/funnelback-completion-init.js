function funnelbackCompletionInit (input, collection) {
  jQuery(document).ready(function() {
    jQuery(input).fbcompletion({
        'enabled': 'enabled',
        'collection': collection,
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
}
export {funnelbackCompletionInit};


/*function funnelbackCompletionSiteSearchInit () {
  jQuery(document).ready(function() {
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
  });
}

function funnelbackCompletionGlobalSearchInit () {
  jQuery(document).ready(function() {
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
  });
}

function funnelbackCompletionDepartmentsSearchInit () {
  jQuery(document).ready(function() {
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
  });
}

function funnelbackCompletionPersonSearchInit () {
  jQuery(document).ready(function() {
    jQuery("input.uls-person-lookup").fbcompletion({
        'enabled': 'enabled',
        'collection': 'ulster-people',
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
}

function funnelbackCompletionHRSearchInit () {
  jQuery(document).ready(function() {
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
  });
}

function funnelbackCompletionEducationResourcesInit () {
  jQuery(document).ready(function() {
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
  });
}

function funnelbackCompletionScienceShopInit () {
  jQuery(document).ready(function() {
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
}

function funnelbackCompletionInit (input, collection) {
  jQuery(document).ready(function() {
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
}

export {
  funnelbackCompletionSiteSearchInit,
  funnelbackCompletionGlobalSearchInit,
  funnelbackCompletionDepartmentsSearchInit,
  funnelbackCompletionHRSearchInit,
  funnelbackCompletionEducationResourcesInit,
  funnelbackCompletionScienceShopInit
};

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


      jQuery("input#covid-search-inside").fbcompletion({
          'enabled': 'enabled',
          'collection': 'ulster-important-update-site',
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
*/
