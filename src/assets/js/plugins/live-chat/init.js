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
          console.log('error!');
          console.log(xhr.status);
          console.log(thrownError);
      }
    });

    //form
    function doPoll() {
      if(jQuery('#SQ_FORM_555463_PAGE').val() == '2') {
        //form init
        jQuery('#form_email_555463').on('submit', function(e) {
            e.preventDefault(); // prevent native submit
        });
        //update UI on load
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
                jQuery('#q555490_q1').val(data);
            },
            error: function(xhr, ajaxOptions, thrownError) {
                //debug
                console.log('error!');
                console.log(xhr.status);
                console.log(thrownError);
            }
        });
      }
      setTimeout(doPoll,5000);
    }
    doPoll();

    jQuery('#uls-send-chat-msg').on('click', function(e) {
        e.preventDefault();
        var msg = jQuery('input[name=uls-chat-text]').val();
        item = {}
        item ['userid'] = userID;
        item ['message'] = msg;
        item ['admin'] = chat_admin;
        var chat_json_url = decodeURIComponent(jQuery('#uls-chat-data').data('feed'));
        jQuery.ajax({
          url: chat_json_url,
          dataType: 'json',
          contentType: 'application/x-www-form-urlencoded; charset=UTF-8',
          success: function(data) {
            data.push(item);
            jQuery('#q555490_q1').val(JSON.stringify(data));
          },
          error: function(xhr, ajaxOptions, thrownError) {
            //debug
            console.log('error!');
            console.log(xhr.status);
            console.log(thrownError);
          }
        });
        //prep form
        jQuery('#form_email_555463').ajaxForm(function() {
           //debug
           console.log("Form prepped!");
        });
        //submit form
        jQuery('#form_email_555463').ajaxSubmit(function() {
            var chat_json_url = decodeURIComponent(jQuery('#uls-chat-data').data('feed'));
            jQuery.ajax({
              url: chat_json_url,
              dataType: 'json',
              contentType: 'application/x-www-form-urlencoded; charset=UTF-8',
              success: function(data) {
                  var chat_content = '';
                  //debug
                  //console.log('success!');
                  console.log(data);
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
                  jQuery('#q555490_q1').val(JSON.stringify(data));
              },
              error: function(xhr, ajaxOptions, thrownError) {
                  //debug
                  console.log('error!');
                  console.log(xhr.status);
                  console.log(thrownError);
              }
            });
            //clear chat text
            jQuery('input[name=uls-chat-text]').val('');
        });
    });
});
