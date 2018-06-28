jQuery(document).ready(function() {
  console.log('init atoz');
  function coursesAlphabetical() {
      jQuery('.courses-az').each(function() {
          jQuery('.page_letters').remove();
          var lettersHTML = '<div data-sticky-container class="page_letters_container"><div class="page_letters sticky" data-sticky data-top-anchor="wysiwyg:top" data-margin-top="30px"><p><strong>Course A-Z navigation</strong></p>';
          var lettersArray = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
          var currentLettersArray = [];
          jQuery(this).children('div').each(function(index, value) {
              var letter = jQuery(this).data('letter');
              if (jQuery(this).next('div').length !== 0) {
                  var nextLetter = jQuery(this).next('div').data('letter');
                  if (letter != nextLetter) {
                      jQuery('<div class="callout primary"><h2 class="h1" id="' + nextLetter + '">' + nextLetter + '</h2></div>').insertAfter(jQuery(this));
                      currentLettersArray.push(nextLetter);
                      //lettersHTML += '<a href="#' + nextLetter + '" data-letter="' + nextLetter + '">' + nextLetter + '</a>';
                      //debug
                      //console.log('1');
                  }
              }
              if (index == 0) {
                  jQuery('<div class="callout primary"><h2 class="h1" id="' + nextLetter + '">' + letter + '</h2></div>').insertBefore(jQuery(this));
                  currentLettersArray.push(letter);
                  //lettersHTML += '<a href="#' + letter + '" data-letter="' + letter + '">' + letter + '</a>';
                  //debug
                  //console.log('1');
              }
          });
          for (var i = 0; i < lettersArray.length; i++) {
              var letter = lettersArray[i];
              letter = letter.toUpperCase();
              //debug
              var check = jQuery.inArray(letter, currentLettersArray);
              if (check !== -1) {
                  lettersHTML += '<div data-letter="' + letter + '"><a href=#' + letter + ' data-letter="' + letter + '" class="page-letter-' + letter + '">' + letter + '</a></div>';
              } else {
                  lettersHTML += '<div data-letter="' + letter + '"><span>' + letter + '</span></div>';
              }
          }
          lettersHTML += '</div></div>';
          jQuery(lettersHTML).insertBefore(jQuery('#nav-courses-page-letters'));
          jQuery('.page_letters a').click(function(event) {
              jQuery('.page_letters a').removeClass('active');
              jQuery(this).addClass('active');
              if (
                  location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') &&
                  location.hostname == this.hostname
              ) {
                  // Figure out element to scroll to
                  var target = jQuery(this.hash);
                  target = target.length ? target : jQuery('[name=' + this.hash.slice(1) + ']');
                  // Does a scroll target exist?
                  if (target.length) {
                      // Only prevent default if animation is actually gonna happen
                      event.preventDefault();
                      jQuery('html, body').animate({
                          scrollTop: target.offset().top
                      }, 1000, function() {
                          // Callback after animation
                          // Must change focus!
                          var target = jQuery(target);
                          target.focus();
                          if (target.is(":focus")) { // Checking if the target was focused
                              return false;
                          } else {
                              target.attr('tabindex', '-1'); // Adding tabindex for elements not focusable
                              target.focus(); // Set focus again
                          };
                      });
                  }
              }
          });
          /*jQuery('.page_letters div').tsort({
              attr: 'data-letter'
          });​*/
      });
    }
    if (jQuery('.courses-az').length !== 0) {
        coursesAlphabetical();
        var sticky = new Foundation.Sticky(jQuery('.sticky'), {
            marginTop: 0,
            anchor: 'sticky-anchor'
        });
    }
});
