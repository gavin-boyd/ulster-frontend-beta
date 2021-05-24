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
