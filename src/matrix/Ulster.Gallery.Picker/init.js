function initNewsImagesGalleryFrontend() {
    var imagesString = "%globals_asset_metadata_Ulster.Gallery.Picker.Images^preg_replace:143423%";
    imagesArray = imagesString.split(',');
    var galleryID = Math.floor(Math.random() * 100);
    var output = '';
    if (imagesArray.length !== 0) {
        output += '<ul class="no-bullet m-l-0">';
    }
    for (var i = 0; i < imagesArray.length; i++) {
        var imageID = imagesArray[i];
        var imageURL = '%globals_asset_assetid:' + imageID + '^as_asset:asset_url%';
        var imageName = '%globals_asset_assetid:' + imageID + '^as_asset:asset_attribute_title%';
        var thumbURL = '%globals_asset_assetid:' + imageID + '^as_asset:image_v_thumb-newsletter_url%';
        var alt = '%globals_asset_assetid:' + imageID + '^as_asset:asset_attribute_title%';
        output += '<li class="inline-block">';
        output += '<a href="' + imageURL + '" title="' + alt + '" data-fancybox="gallery-' + galleryID + '" data-caption="' + imageName + '" class="display-block m-r-5 m-b-5">';
        output += '<img src="' + thumbURL + '" alt="' + alt + '" title="' + alt + '" width="160">';
        output += '</a>';
        output += '</li>';
    }
    if (imagesArray.length !== 0) {
        output += '</ul>';
    }
    print(output);
}
initNewsImagesGalleryFrontend();
