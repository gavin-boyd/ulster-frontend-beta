function activeState(url, pos) {
    var current_url = '%frontend_asset_url%';
    var count_slashes = current_url.split("/").length;
    var slashes = parseInt(count_slashes);
    var check = '%frontend_asset_linking_lineage^contains:{frontend_asset_assetid}%';
    var site_index_url = '%globals_site_index_id^as_asset:asset_url%';
    var site_url = '%globals_site_url%';
    if (pos == '0' && url == site_url && current_url == url) {
      return ' hover';
    }
    if (current_url.includes(url)) {
        if (pos == '0') {
            return ' hover-r';
        } else {
            return ' hover';
        }
    } else {
        return ' hover-r';
    }
}
try {
  var numLinks;
  var mainMenu = eval(_REST.response.body);
  var megamenuCol = '';
  if (mainMenu != null){
    numLinks = (100/mainMenu.length) + '%';
  }
  print('<div class="hide-for-small-only hide-for-print" id="navigation"><ul class="menu global-nav microsite">');
  for (i in mainMenu) {
    if (mainMenu[i].items) {
      print('<li class="menu-item large" style="width:'+numLinks+';"><a class="mega-menu-link dropdown' + activeState(mainMenu[i].url, i) + '" data-toggle="'+mainMenu[i].megamenuid+'" href="'+mainMenu[i].url+'">'+mainMenu[i].label+'</span></a>');
      print('<div class="dropdown-pane '+mainMenu[i].type+' p-l-10 p-b-30 p-t-30 p-r-10 m-t-50" data-auto-focus="true" data-close-on-click="true" data-dropdown="" id="'+mainMenu[i].megamenuid+'">');
      print('<div class="grid-x grid-margin-x">');
      for(j in mainMenu[i].items){
        if(mainMenu[i].type =='mega full'){
          print('<div class="cell medium-4 large-4">');
        } else {
          print('<div class="cell medium-12 large-12">');
        }
        print('<ul>');
        for(k in mainMenu[i].items[j].column) {
          for(l in mainMenu[i].items[j].column[k].heading) {
            print('<li class="h3 m-b-10 m-l-0">'+mainMenu[i].items[j].column[k].heading[l].label+'</li>');
          }
          for(m in mainMenu[i].items[j].column[k].link){
            print('<li><a class="m-b-10 display-block" href="'+mainMenu[i].items[j].column[k].link[m].url+'">'+mainMenu[i].items[j].column[k].link[m].label+'</a></li>');
          }
        } /* END Main Nav Column Items */
        print('</ul>');
        print('</div>');
      } /* END Main Nav loop */
      print('</div></div>'); /* END Mega Menu column group HTML */
      print('</li>');
    } else{
      print('<li class="menu-item large" style="width:'+numLinks+';"><a href="'+mainMenu[i].url+'" class="' + activeState(mainMenu[i].url, i) + '">'+mainMenu[i].label+'</a></li>');
    }
  } /* END Main Nav loop */
  /* End Mega Menu Divs */
  print('</ul></div>'); /* END Mega Menu column group HTML */
} /* END try statement */
catch(err) {
   //print('<br>'+err.message);
}
