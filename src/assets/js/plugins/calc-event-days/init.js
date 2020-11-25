import moment from 'moment';

/*
   Function: ulsterCalcEventDays

   This function updates calculates how long until the event starts

   Parameters:

   Index: 0.1
*/
jQuery.fn.extend({
    ulsterCalcEventDays: function() {
        jQuery(this).each(function() {
            var thisEvent = jQuery(this);
            var thisStartLabel = jQuery(this).data('start-label');
            var thisStartGeneralLabel = jQuery(this).data('start-general-label');
            var thisEventDate = jQuery(this).find('.uls-date-data').data('event-date');
            var today = moment();
            var endTime = jQuery(this).find('.uls-date-data').data('event-end-date');
            endTime = moment(thisEventDate);
            var end = jQuery(this).find('.uls-date-data').data('event-end-date');
            var calcEnd = moment(end).fromNow();
            //var multiDay = endTime.diff(today, 'hours');
            var calcDiff = moment(thisEventDate).fromNow();
            var calcDiffRaw = moment(thisEventDate).fromNow(true);
            //debug
            //console.log(thisEventDate);
            //console.log(multiDay);
            //console.log('calcEnd: ' + calcEnd);
            //console.log('calcDiff: ' + calcDiff);
            //console.log('calcDiffRaw: ' + calcDiffRaw);
            var label = '';
            //if (multiDay <= 0) {
              //debug
              //console.log('multi day');
                //jQuery(this).find('span.day-counter').hide();
            //} else {
                if (calcDiff.indexOf('ago') >= 0 && calcEnd.indexOf('ago') >= 0) {
                      label = '<span><span class="fas fa-hourglass-end"></span></span> This event has ended.';
                } else {
                  if (calcDiff.indexOf('ago') >= 0) {
                      label = '<span><span class="fas fa-hourglass-end"></span></span> This event has started.';
                  } else {
                      if (calcDiff.indexOf('days') >= 0 || calcDiff.indexOf('day') >= 0) {
                          if (thisStartLabel) {
                            label = '<span><span class="fas fa-hourglass-half"></span></span> ' + thisStartLabel + ' ' + calcDiff;
                          } else {
                            label = '<span><span class="fas fa-hourglass-half"></span></span> Event starts ' + calcDiff;
                          }
                      } else if (calcDiff.indexOf('months') >= 0) {
                          if (thisStartGeneralLabel) {
                              label = '<span><span class="fas fa-hourglass-start"></span></span> Only ' + calcDiffRaw + ' until this event ' + thisStartGeneralLabel + '.';
                          } else {
                              label = '<span><span class="fas fa-hourglass-start"></span></span> Only ' + calcDiffRaw + ' until this event.';
                          }
                      } else if (calcDiff.indexOf('month') >= 0) {
                          if (thisStartGeneralLabel) {
                              label = '<span><span class="fas fa-hourglass-start"></span></span> One month until this event ' + thisStartGeneralLabel + '.';
                          } else {
                              label = '<span><span class="fas fa-hourglass-start"></span></span> One month until this event.';
                          }
                      } else if (calcDiff.indexOf('hours') >= 0 && calcDiff.indexOf('in') >= 0) {
                          if (thisStartGeneralLabel) {
                              label = '<span><span class="fas fa-hourglass-half"></span></span> Event ' + thisStartGeneralLabel + ' soon, ' + calcDiffRaw + ' to go!';
                          } else {
                              label = '<span><span class="fas fa-hourglass-half"></span></span> Event starts soon, ' + calcDiffRaw + ' to go!';
                          }
                      } else if (calcDiff.indexOf('minutes') >= 0) {
                          if (thisStartGeneralLabel) {
                              label = '<span><span class="fas fa-hourglass-half"></span></span> Only ' + calcDiffRaw + ' until this event ' + thisStartGeneralLabel + '.';
                          } else {
                              label = '<span><span class="fas fa-hourglass-half"></span></span> Only ' + calcDiffRaw + ' until this event.';
                          }
                      } else if (calcDiff.indexOf('year') >= 0) {
                          if (thisStartLabel) {
                            label = '<span><span class="fas fa-hourglass-start"></span></span> ' + thisStartLabel + ' ' + calcDiff;
                          } else {
                            label = '<span><span class="fas fa-hourglass-start"></span></span> Event starts ' + calcDiff;
                          }
                      } else if (calcDiff.indexOf('an hour') >= 0) {
                          if (thisStartLabel) {
                              label = '<span><span class="fas fa-hourglass-half"></span></span> ' + thisStartLabel + ' ' + calcDiff;
                          } else {
                              label = '<span><span class="fas fa-hourglass-half"></span></span> Event starts ' + calcDiff;
                          }
                      } else if (calcDiff.indexOf('seconds') >= 0) {
                          if (thisStartLabel) {
                              label = '<span><span class="fas fa-hourglass-end"></span></span> ' + thisStartLabel + ' ' + calcDiff;
                          } else {
                              label = '<span><span class="fas fa-hourglass-end"></span></span> Event starts ' + calcDiff;
                          }
                      }
                  }
                }
                if (label == '') {
                  //debug
                  //console.log('hide');
                  jQuery(this).find('.day-counter').hide();
                } else {
                  //debug
                  //console.log('show');
                  jQuery(this).find('.day-counter').html(label);
                }
            //}
        });
    }
});

//init
jQuery(document).ready(function() {
  jQuery('.uls-event').ulsterCalcEventDays();
});
