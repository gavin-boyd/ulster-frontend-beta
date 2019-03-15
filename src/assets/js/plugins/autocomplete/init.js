jQuery(document).ready(function() {
  //uuconnect init
  function initUUConnectAutoComplete() {
    if (jQuery('input#uuc-search').length !== 0) {
      jQuery('input#uuc-search').autocomplete({
        source: function(request, response) {
          jQuery.ajax({
            url: "https://ulster.funnelback.co.uk/s/search.html?collection=ulster-student-connect&profile=_default_preview&form=qc&query=" + request.term + "&num_ranks=10",
            dataType: "jsonp",
            data: {
              term: request.term
            },
            success: function(data) {
              response(data);
            }
          });
        },
        minLength: 3,
        highlightClass: "ui-state-highlight"
      });
      // Custom autocomplete instance.
      // https://jsfiddle.net/adamboduch/jhZ6E/
      jQuery('input#uuc-search').data("ui-autocomplete")._renderItem = function(ul, item) {
        var re = new RegExp( "(" + this.term + ")", "gi" ),
            cls = this.options.highlightClass,
            template = "<span class='" + cls + "'>$1</span>",
            label = item.label.replace(re, template),
            jQueryli = jQuery("<li/>").appendTo(ul);
        jQuery( "<a/>" ).attr("href", "#").html(label).appendTo(jQueryli);
        return jQueryli;
      }
    }
  }
  initUUConnectAutoComplete();

  //olp init
  function initOlpAutoComplete() {
    if (jQuery('input#query').length !== 0) {
      jQuery('input#query').autocomplete({
        source: function(request, response) {
          jQuery.ajax({
            url: "https://ulster.funnelback.co.uk/s/search.html?collection=ulster-dev&profile=_default_preview&form=qc&query=" + request.term + "&num_ranks=10",
            dataType: "jsonp",
            data: {
              term: request.term
            },
            success: function(data) {
              response(data);
            }
          });
        },
        minLength: 3,
        highlightClass: "ui-state-highlight"
      });
      // Custom autocomplete instance.
      // https://jsfiddle.net/adamboduch/jhZ6E/
      jQuery('input#query').data("ui-autocomplete")._renderItem = function(ul, item) {
        var re = new RegExp( "(" + this.term + ")", "gi" ),
            cls = this.options.highlightClass,
            template = "<span class='" + cls + "'>$1</span>",
            label = item.label.replace(re, template),
            jQueryli = jQuery("<li/>").appendTo(ul);
        jQuery( "<a/>" ).attr("href", "#").html(label).appendTo(jQueryli);
        return jQueryli;
      }
    }
  }
  initOlpAutoComplete();
});
