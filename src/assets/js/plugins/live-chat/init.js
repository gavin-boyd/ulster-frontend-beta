jQuery(document).ready(function(){
    if (jQuery('#uls-start-chat').length > 0 && jQuery('#form_email_555463_submit').length > 0) {
        jQuery('#uls-start-chat').click(function(e) {
            e.preventDefault();
            //debug
            console.log('start chat');
            jQuery('#form_email_555463_submit').click();
        });
    }
    if (jQuery('.uls-page-2-init').length > 0) {
        jQuery('.uls-page-2-init').click();
    }
    //globals
    var userID = jQuery('#uls-live-chat').data('userid');
    var chat_container = jQuery('#uls-chat-contents');
    var chat_admin = jQuery('#uls-live-chat').data('check');

    //object
    var jsonObj = [];
    if (jQuery('#q555490_q1').val()) {
        jsonObj = JSON.parse(jQuery('#q555490_q1').val());
    } else {
        jsonObj = [];
    }

    //form
    function doPoll() {
      if(jQuery('#SQ_FORM_555463_PAGE').val() == '2') {
        //form init
        jQuery('#form_email_555463').on('submit', function(e) {
            e.preventDefault(); // prevent native submit
        });
        //update UI on load
        if (jQuery('#q555490_q1').val()) {
            var chat_json_url = decodeURIComponent(jQuery('#uls-chat-data').data('feed'));
            jQuery.ajax({
                url: chat_json_url,
                dataType: 'json',
                contentType: 'application/x-www-form-urlencoded; charset=UTF-8',
                success: function(data) {
                    var chat_content = '';
                    //debug
                    //console.log('success!');
                    //console.log(data);
                    //loop
                    jQuery.each(data, function(key, value) {
                        if (value.admin == false) {
                            chat_content += '<div class="cell large-8"><span class="fas fa-user" aria-hidden="true"></span>&nbsp;&nbsp;' + value.message + '</div>';
                        }
                        if (value.admin == true) {
                            chat_content += '<div class="cell large-8 large-offset-4 text-right">' + value.message + '&nbsp;&nbsp;<img src="https://cdn.ulster.ac.uk/home/ulster-frontend/favicons/apple-touch-icon-57x57.png" width="30" /></div>';
                        }
                    });
                    chat_container.html(chat_content);
                },
                error: function(xhr, ajaxOptions, thrownError) {
                    //debug
                    console.log('error!');
                    console.log(xhr.status);
                    console.log(thrownError);
                }
            });
         }
      }
      setTimeout(doPoll,5000);
    }
    doPoll();

    jQuery('#uls-send-chat-msg').on('click', function(e) {
        e.preventDefault();
        //DEBUG
        console.log('send message !');
        var msg = jQuery('input[name=uls-chat-text]').val();
        item = {}
        item ['userid'] = userID;
        item ['message']  = msg;
        item ['admin']  = chat_admin;
        jsonObj.push(item);
        var jsonString = JSON.stringify(jsonObj);
        jQuery('#q555490_q1').val(jsonString);
        //prep form
        jQuery('#form_email_555463').ajaxForm(function() {
           console.log("Form prepped!");
        });
        //submit form
        jQuery('#form_email_555463').ajaxSubmit(function() {
            console.log("Form submitted!");
            //update UI
            var chat_json = jsonObj;
            chat_container.html('');
            jQuery.each(chat_json, function(key, value) {
                if (value.admin == false) {
                    //debug
                    console.log('user said:' + value.message);
                    chat_container.append('<div class="cell large-8"><span class="fas fa-user" aria-hidden="true"></span>&nbsp;&nbsp;' + value.message + '</div>');
                }
                if (value.admin == true) {
                    //debug
                    console.log('admin said:' + value.message);
                    chat_container.append('<div class="cell large-8 large-offset-4 text-right">' + value.message + '&nbsp;&nbsp;<img src="https://cdn.ulster.ac.uk/home/ulster-frontend/favicons/apple-touch-icon-57x57.png" width="30" /></div>');
                }
            });
            //clear chat text
            jQuery('input[name=uls-chat-text]').val('');
        });
    });
});
