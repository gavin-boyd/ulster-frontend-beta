if (jQuery('#teams li').length > 0) {
    var teamsArray = [];
    jQuery('#teams li').each(function() {
       teamsArray.push(jQuery(this).text());
    });
    if (jQuery('#q460528_q2').length > 0) {
      jQuery('#q460528_q2').hide();
      var control = '<ul>';
      var container = jQuery('#q460528_q2').parent('div');
      for (i = 0; i < teamsArray.length; i++) {
          control += '<li><input type="radio" name="team-sel" id="' + i + '-team" value="' + teamsArray[i] + '" class="sq-form-field team-select"><label for="' + i + '-team">' + teamsArray[i] + '</label></li>';
      }
      control += '</ul>';
      container.append(control);
      jQuery('.team-select').each(function() {
        jQuery(this).change(function() {
         jQuery('#q460528_q2').val(jQuery(this).val());
        });
      });
      if (jQuery('#q460528_q2').val() !== '') {
        jQuery('input[name="team-sel"][value="' + jQuery('#q460528_q2').val() + '"]').prop('checked' , true);
      }
    }
}
