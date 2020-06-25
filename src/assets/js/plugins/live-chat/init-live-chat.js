function ulsChatJSON() {
  var chat_json_url = decodeURIComponent(jQuery('#uls-chat-data').data('feed'));
  var chat_container = jQuery('#uls-chat-contents');
  jQuery.ajax({
      url: chat_json_url,
      dataType: 'json',
      contentType: 'application/x-www-form-urlencoded; charset=UTF-8',
      success: function(data) {
          if (data) {
            jQuery('#q555490_q1').val(JSON.stringify(data));
          }
          //// DEBUG:
          //console.log('Test success ulsChatJSON()');
          //console.log(data);
          var chat_content = '';
          jQuery.each(data, function(key, value) {
              if (value.admin == false) {
                  chat_content += '<div class="cell large-8"><span class="fas fa-user" aria-hidden="true"></span>&nbsp;&nbsp;' + value.message + '</div>';
              }
              if (value.admin == true) {
                  chat_content += '<div class="cell large-8 large-offset-4 text-right">' + value.message + '&nbsp;&nbsp;<img src="https://cdn.ulster.ac.uk/home/ulster-frontend/favicons/apple-touch-icon-57x57.png" width="30" /></div>';
              }
          });
          chat_container.html(chat_content);
          //jQuery('#q555490_q1').val(data);
      },
      error: function(xhr, ajaxOptions, thrownError) {
          //debug
          //console.log(xhr.status);
          console.log(thrownError);
      }
  });
}

function ulsDoPoll() {
  if(jQuery('#SQ_FORM_555463_PAGE').val() == '2') {
    //form init
    jQuery('#form_email_555463').on('submit', function(e) {
        e.preventDefault(); // prevent native submit
    });
    //AJAX
    ulsChatJSON();
  }
  setTimeout(ulsDoPoll, 800);
}

jQuery(document).ready(function() {

    if (jQuery('.uls-page-2-init').length > 0) {
      jQuery('.uls-page-2-init').click();
    }

    //object
    if(jQuery('#SQ_FORM_555463_PAGE').val() == '2') {
      if (jQuery('#q555490_q1').val()) {
        var chat_json_url = decodeURIComponent(jQuery('#uls-chat-data').data('feed'));
        var jsonObj = [];
        jQuery.ajax({
          url: chat_json_url,
          dataType: 'json',
          contentType: 'application/x-www-form-urlencoded; charset=UTF-8',
          success: function(data) {
            if (jQuery('#q555490_q1').val()) {
                jsonObj = JSON.parse(data);
            } else {
                jsonObj = [];
            }
          },
          error: function(xhr, ajaxOptions, thrownError) {
              jsonObj = [];
              //debug
              console.log('error with load ajax!');
              console.log(xhr.status);
              console.log(thrownError);
          }
        });
      }
    }

    //init poll
    ulsDoPoll();

    //on enter button
    jQuery('#uls-live-chat-input').bind("enterKey",function(e){
       if (jQuery('#uls-live-chat-input').val()) {
         jQuery('#uls-send-chat-msg').click();
       }
    });
    jQuery('#uls-live-chat-input').keyup(function(e){
      if(e.keyCode == 13) {
        jQuery(this).trigger("enterKey");
      }
    });

    //Send button clicked
    jQuery('#uls-send-chat-msg').on('click', function(e) {
        e.preventDefault();

        //get message text
        var msg = jQuery('input[name=uls-chat-text]').val();

        //create message object
        //globals
        var userID = jQuery('#uls-live-chat').data('userid');
        var chat_admin = jQuery('#uls-live-chat').data('check');
        var chat_message = {}
        chat_message['userid'] = userID;
        chat_message['message'] = msg;
        chat_message['admin'] = chat_admin;

        //get input contents
        if (jQuery('#q555490_q1').val()) {
          var json_input_contents = jQuery('#q555490_q1').val();
          json_input_contents = JSON.parse(json_input_contents);
        } else {
          var json_input_contents = [];
        }

        //add to json and update field
        json_input_contents.push(chat_message);
        jQuery('#q555490_q1').val(JSON.stringify(json_input_contents));

        //debug
        //console.log('Updated json input contents: ' + jQuery('#q555490_q1').val());

        //init ajax form
        jQuery('#form_email_555463').ajaxForm();

        //submit form
        jQuery('#form_email_555463').ajaxSubmit({
          success: function() {
            //debug
            //console.log('form submitted');
            //Display updated chat
            ulsChatJSON();
            //clear chat text
            jQuery('input[name=uls-chat-text]').val('');
          },
          error: function() {
            console.log('error with ajaxSubmit.');
          }
        });
    });
});
