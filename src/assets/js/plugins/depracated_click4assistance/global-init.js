var head = document.getElementsByTagName('head')[0];
var srcC4AW = document.createElement('script');
srcC4AW.type = 'text/javascript';
srcC4AW.charset = 'utf-8';
srcC4AW.id = 'srcC4AWidget';
srcC4AW.defer = true;
srcC4AW.async = true;
srcC4AW.src = 'https://prod3si.click4assistance.co.uk/JS/ChatWidget.js';
if (head) {head.appendChild(srcC4AW);}

function C4AWJSLoaded() {
   oC4AW_Widget = new oC4AW_Widget();
   oC4AW_Widget.setAccGUID("CD44000A-B9CB-4689-BCDD-0A909F0F65CA");
   oC4AW_Widget.setWSGUID("680c6c21-116b-46ba-b44b-4ef5a76f97a8");
   oC4AW_Widget.setWFGUID("9d7c3b58-ea0c-45da-9187-a6a1fc80917b");
   oC4AW_Widget.setPopupWindowWFGUID("9e38890d-bf93-457b-877d-917d2ff32328");
   oC4AW_Widget.setDockPosition("BOTTOM");
   oC4AW_Widget.setBtnStyle("position:fixed; border:none; bottom:0em; right:1em;");
   oC4AW_Widget.setIdentity("Embedded Chat");
   oC4AW_Widget.Initilize();
} 
