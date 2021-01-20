//https://www.jqueryscript.net/other/Sticky-Reading-Progress-Indicator-jQuery.html

function ulsReadingProgressIndicatorInit() {
  if (jQuery('#uls-reading-progress').length == 1) {
    jQuery(document).ready(function() {
      const win = jQuery(window);
      const doc = jQuery(document);
      const progressBar = jQuery('progress');
      const progressLabel = jQuery('.uls-reading-progress-label');
      const setValue = () => win.scrollTop();
      const setMax = () => doc.height() - win.height();
      const setPercent = () => Math.round(win.scrollTop() / (doc.height() - win.height()) * 100);

      progressLabel.text(setPercent() + '%');
      progressBar.attr({ value: setValue(), max: setMax() });

      doc.on('scroll', () => {
        progressLabel.text(setPercent() + '%');
        progressBar.attr({ value: setValue() });
      });

      win.on('resize', () => {
        progressLabel.text(setPercent() + '%');
        progressBar.attr({ value: setValue(), max: setMax() });
      })
    });
  }
}
export {ulsReadingProgressIndicatorInit};
