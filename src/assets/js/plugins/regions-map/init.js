function interactiveMapsInit () {
  jQuery(document).ready(function() {
    /*
     * https://www.ulster.ac.uk/global/apply/country
     * middle-east-and-north-africa-action - middle-east-and-north-africa-off-canvas
     * east-asia-action - east-asia-off-canvas
     * south-asia-action - south-asia-off-canvas
     * north-america-action - north-america-off-canvas
     * europe-and-central-asia-action - europe-and-central-asia-off-canvas
     * latin-america-action - latin-america-off-canvas
     * sub-saharan-africa-action - sub-saharan-africa-off-canvas
     * south-east-asia-and-australasia-action - south-east-asia-and-australasia-off-canvas
    */
    if (jQuery('.global-your-country').length > 0) {
      jQuery('.global-your-country #middle-east-and-north-africa').click(function() {
        jQuery('.global-your-country #middle-east-and-north-africa-action').click();
      });
      jQuery('.global-your-country #east-asia').click(function() {
        jQuery('.global-your-country #east-asia-action').click();
      });
      jQuery('.global-your-country #south-asia').click(function() {
        jQuery('.global-your-country #south-asia-action').click();
      });
      jQuery('.global-your-country #north-america').click(function() {
        jQuery('.global-your-country #north-america-action').click();
      });
      jQuery('.global-your-country #europe-and-central-asia').click(function() {
        jQuery('.global-your-country #europe-and-central-asia-action').click();
      });
      jQuery('.global-your-country #latin-america').click(function() {
        jQuery('.global-your-country #latin-america-action').click();
      });
      jQuery('.global-your-country #sub-saharan-africa').click(function() {
        jQuery('.global-your-country #sub-saharan-africa-action').click();
      });
      jQuery('.global-your-country #south-east-asia-and-australasia').click(function() {
        jQuery('.global-your-country #south-east-asia-and-australasia-action').click();
      });
    }
    /*
     * Global Partnerships Regions Map
    */
    if (jQuery('.global-partnerships-regions').length > 0) {
      jQuery('.global-partnerships-regions #north-america').click(function() {
        jQuery('.global-partnerships-regions #list-item-americas > a').click();
      });
      jQuery('.global-your-country #latin-america').click(function() {
        jQuery('.global-partnerships-regions #list-item-americas > a').click();
      });
      jQuery('.global-your-country #europe-and-central-asia').click(function() {
        jQuery('.global-partnerships-regions #list-item-europe-label > a').click();
      });
    }
  });
}
export {interactiveMapsInit};
