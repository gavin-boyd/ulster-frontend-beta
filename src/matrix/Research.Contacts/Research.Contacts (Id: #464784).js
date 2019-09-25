function outputPeople(theArray) {
    var ids = theArray.replace('\[', '');
    ids = ids.replace('\]', '');
    ids = ids.split(',');
    var output = '<ul>';
    for (i = 0; i < ids.length; i++) {
        var url = '%globals_asset_url:' + ids[i] + '%';
        var title = '%globals_asset_metadata_Staff.Title:' + ids[i] + '%';
        var forename = '%globals_asset_metadata_Staff.Forename:' + ids[i] + '%';
        var surname = '%globals_asset_metadata_Staff.Surname:' + ids[i] + '%';
        output += '<li><a href="' + url + '">' + title + ' ' + forename + ' ' + surname + '</a></li>';
    }
    output += '<ul>';
    print(output);
}
