/*
   Function: ulsterMomentTimezone

   This plugin identifies the users timezone and then shows personalised content

   Parameters:

   Dependencies: https://github.com/moment/moment-timezone/

   Index: 0.1
*/
jQuery.fn.extend({
    ulsterMomentTimezone: function() {
        var moment = require('moment');
        //https://gist.github.com/James1x0/8443042
        function getGreetingTime(m) {
            var g = null; //return g
            if (!m || !m.isValid()) {
                return;
            } //if we can't find a valid or filled moment, we return.
            var split_afternoon = parseInt('12', 8); //24hr time to split the afternoon
            var split_evening = parseInt('17', 8); //24hr time to split the evening
            var split_night = parseInt('19', 8); //24hr time to split the evening
            var split_sunrise = parseInt('05', 8); //24hr time to split the evening
            var split_sunrised = parseInt('07', 8); //24hr time to split the evening
            var currentHour = parseFloat(m.format("HH"));
            if (currentHour >= split_afternoon && currentHour <= split_evening) {
                g = "afternoon";
            } else if (currentHour >= split_evening) {
                g = "evening";
            } else if (currentHour >= split_night) {
                g = "night";
            } else if (currentHour >= split_sunrise && currentHour <= split_sunrised) {
                g = "sunrise";
            } else {
                g = "morning";
            }
            return g;
        }
        /* USE
            //The var "humanizedGreeting" below will equal (assuming the time is 8pm) "Good evening, James."

            var user = "James";
            var humanizedGreeting = "Good " + getGreetingTime(moment()) + ", " + user + ".";
        */
        //debug
        //console.log('Init timezone');
        //https://momentjs.com/timezone/docs/#/using-timezones/guessing-user-timezone/
        //https://github.com/moment/moment-timezone/issues/294
        var usersTimezone = moment.tz(moment.tz.guess()).format("HH:mm");
        var m = moment();
        var currentHour = parseFloat(m.format("HH"));
        //debug
        //console.log(currentHour);
        //console.log(usersTimezone);
        //console.log(getGreetingTime(moment()));
        jQuery(this).each(function() {
            var dayImage = jQuery(this).data('day-image');
            var nightImage = jQuery(this).data('night-image');
            var eveningImage = jQuery(this).data('evening-image');
            if (dayImage && nightImage) {
                if (currentHour == '07' || currentHour == '08' || currentHour == '09' || currentHour == '10' || currentHour == '11' || currentHour == '12' || currentHour == '13' || currentHour == '14' || currentHour == '15' || currentHour == '16' || currentHour == '17') {
                    jQuery(this).css('background-image', 'url("' + dayImage + '")');
                    //debug
                    //console.log('day');
                }
                if (currentHour == '18' || currentHour == '19' || currentHour == '05' || currentHour == '06') {
                    jQuery(this).css('background-image', 'url("' + eveningImage + '")');
                    //debug
                    //console.log('day');
                }
                if (currentHour == '20' || currentHour == '21' || currentHour == '22' || currentHour == '23' || currentHour == '24' || currentHour == '00' || currentHour == '01' || currentHour == '02' || currentHour == '03' || currentHour == '04') {
                    jQuery(this).css('background-image', 'url("' + nightImage + '")');
                    //debug
                    //console.log('night');
                }
            }
        });
    }
});

jQuery(document).ready(function() {
    jQuery('.uls-timezone').ulsterMomentTimezone();
});
