jQuery(document).ready(function() {
  function processForm(e) {
    e.preventDefault();
    jQuery('body').prepend('<div id="loading" style="width:100%; height:100%; position:fixed; background: rgba(0,0,0,.8); z-index:9999; display:table;"><div style="display:table-cell;vertical-align:middle;text-align:center;"><img src="//cdn.ulster.ac.uk/home/ulster-frontend/beta/assets/img/cool-preloader.gif" alt="Loading" /><p style="color:#fff;" id="loading-text">Creating your prospectus</p></div></div>');
    jQuery.ajax({
        url: '%globals_asset_url%',
        type: 'POST',
        data: jQuery(this).serialize(),
        success: function(result){
          //debug
          //console.log('Success!');
          var html = result;
          var id = jQuery(html).find('#uls_assetid').text();
          var url = jQuery(html).find('#uls_asseturl').text();
          //debug
          //console.log('Assetid: ' + id);
          //console.log('Asset url: ' + url);
          //jQuery('#loading').remove();
          jQuery('#loading-text').text('All Done. Loading your prospectus');
          window.location.replace(url);
        },
        error: function(errorThrown){
          //console.log('Error!');
          jQuery('#loading').remove();
        }
    });
  }
  jQuery('#page_asset_builder_272204').submit(processForm);
});
