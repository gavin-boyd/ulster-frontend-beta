try {
var mainMenu = eval(_REST.response.body);
var megamenuCol = '';

print('<div class="hide-for-small-only" id="navigation"><ul class="menu global-nav microsite">');

for (i in mainMenu) {

if(mainMenu[i].items){
print('<li class="menu-item"><a class="mega-menu-link dropdown" data-toggle="'+mainMenu[i].megamenuid+'" href="'+mainMenu[i].url+'">'+mainMenu[i].label+'</span></a></li>');
}else{
print('<li class="menu-item"><a href="'+mainMenu[i].url+'">'+mainMenu[i].label+'</a></li>');
}



} /* END Main Nav loop */
/* End Mega Menu Divs */

print('</ul></div>'); /* END Mega Menu column group HTML */


/* Moved stuff */

for (i in mainMenu) {

if(mainMenu[i].items){

print('<div class="dropdown-pane '+mainMenu[i].type+' p-l-10 p-b-30 p-t-30 p-r-10 m-t-50" data-auto-focus="true" data-close-on-click="true" data-dropdown="" id="'+mainMenu[i].megamenuid+'">');

print('<div class="grid-container">');
print('<div class="grid-x grid-margin-x">');

for(j in mainMenu[i].items){

if(mainMenu[i].type =='mega full'){
print('<div class="cell medium-4 large-4">');
}else{
print('<div class="cell medium-12 large-12">');
}

for(k in mainMenu[i].items[j].column){

for(l in mainMenu[i].items[j].column[k].heading){
 print('<p class="h3 m-b-10 m-l-0">'+mainMenu[i].items[j].column[k].heading[l].label+'</p>');
}

for(l in mainMenu[i].items[j].column[k].link){
    print('<a class="m-b-10" href="'+mainMenu[i].items[j].column[k].link[l].url+'">'+mainMenu[i].items[j].column[k].link[l].label+'</a><br/>');
}

print('</div>');


} /* END Main Nav Column Items */


} /* END Main Nav loop */

print('</div></div></div>'); /* END Mega Menu column group HTML */



} /* END If has Columns */

}


/* END Moved Stuff */



} /* END try statement */

catch(err) {
   print('<br>'+err.message);
}
