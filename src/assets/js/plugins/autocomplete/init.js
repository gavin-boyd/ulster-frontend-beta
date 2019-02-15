jQuery(document).ready(function() {
  //uuconnect init
  if (jQuery('#uuc-search').length !== 0) {
    // Custom autocomplete instance.
    // https://jsfiddle.net/adamboduch/jhZ6E/
    jQuery.widget("app.autocomplete", jQuery.ui.autocomplete, {
      options: {
          highlightClass: "ui-state-highlight"
      },
      _renderItem: function(ul, item) {
        var re = new RegExp( "(" + this.term + ")", "gi" ),
            cls = this.options.highlightClass,
            template = "<span class='" + cls + "'>$1</span>",
            label = item.label.replace(re, template),
            jQueryli = jQuery("<li/>").appendTo(ul);
        jQuery( "<a/>" ).attr("href", "#").html(label).appendTo(jQueryli);
        return jQueryli;
      }
    });
    jQuery('#uuc-search').autocomplete({
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
      select: function( event, ui ) {
        //debug
        //console.log( "Selected: " + ui.item.value + " aka " + ui.item.id );
      }
    });
  }
});
