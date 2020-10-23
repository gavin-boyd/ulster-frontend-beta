jQuery(document).ready(function() {
  jQuery('input#student-concierge').autocompletion({
    program: '//ulster.funnelback.co.uk/s/suggest.json',
    datasets: {
      organic: {
        collection: 'ulster-student-connect',
        profile : '_default',
        format: 'extended',
        alpha: '0.5',
        show: '10',
        sort: '0',
        template: {
          header: $('<h5>').text('Keywords').addClass('tt-category'),
          notFound: $('<div>').html('<em>No suggestions found</em>')
        },
        group: true
      },
      studentadmin: {
        collection: 'ulster-studentadministration',
        profile : '_default',
        show: '3',
        template: {
          header: $('<h5>').text('Student Admin').addClass('tt-category'),
          suggestion: '<div>{{label.metaData.T}}</div>',
          notFound: $('<div>').html('<em>No suggestions found</em>')
        }
      },
      people: {
        name: 'People',
        collection: 'ulster-people',
        profile :'_default',
        show: '3',
        template: {
          header: $('<h5>').text('People').addClass('tt-category'),
          suggestion: '<div><img src="{{label.metaData.image}}" class="img-thumbnail pull-left autoc-thumb"/>{{label.metaData.t}}</div>',
          notFound: $('<div>').html('<em>No suggestions found</em>')
        }
      },

    },
    horizontal: true,
    typeahead: {hint: true},
    length: 3
  });
});
