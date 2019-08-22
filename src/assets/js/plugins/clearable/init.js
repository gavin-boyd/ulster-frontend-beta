jQuery(document).ready(function() {
  jQuery(".clearable").each(function() {
    var inp = jQuery(this).find("input:text");
    var cle = jQuery(this).find(".clearable__clear");
    inp.on("input", function(){
      cle.toggle(!!this.value);
    });
    cle.on("touchstart click", function(e) {
      e.preventDefault();
      inp.val("").trigger("input");
    });
  });
});
