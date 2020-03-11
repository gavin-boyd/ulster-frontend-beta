jQuery(document).ready(function() {

  // addition show/hide fields js cretaed for
  function initShowHide(questionsArray, fieldsArray) {
    var fields = fieldsArray.split(',');
    //hide fields on load
    for (i = 0; i < fieldsArray.length; i++) {
      jQuery('label[for=' + fields[i] + ']').parent().hide();
    }
    var questions = questionsArray.split(',');
    //click events for radios
    for (i = 0; i < questions.length; i++) {
      jQuery('#' + questions[i]).change(function() {
        if (jQuery(this).prop('checked') == true && jQuery(this).val() == 0) {
          for (i = 0; i < fieldsArray.length; i++) {
            jQuery('label[for=' + fields[i] + ']').parent().show();
          }
        } else {
          for (i = 0; i < fieldsArray.length; i++) {
            jQuery('label[for=' + fields[i] + ']').parent().hide();
            jQuery('#' + fields[i]).val('');
          }
        }
      });
    }
  }

  //https://www.ulster.ac.uk/global/accept/preparation-courses/apply
  initShowHide('q524262_q10_0,q524262_q10_1', 'q524262_q11,q524262_q7');

  // https://www.ulster.ac.uk/accept/offer/upload
  initShowHide('q527337_q15_0,q527337_q15_1', 'q527337_q7,q527337_q6');

  // https://www.ulster.ac.uk/accept/offer/statement-of-purpose
  initShowHide('q533544_q8_0,q533544_q8_1', 'q533544_q9,q533544_q10');

  // https://www.ulster.ac.uk/accept/offer/visa-history
  initShowHide('q533749_q7_0,q533749_q7_1', 'q533749_q8,q533749_q9');
});
