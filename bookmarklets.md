# Testing for Accessibility (updated 4/2/2018)

Here's a page to [test Flash (red or general flash)](rgbcompute_b.html)


## Create a bookmarklet
I like to use this [Bookmarklet Crunchinator](http://ted.mielczarek.org/code/mozilla/bookmarklet.html). 

## New favelets

* Flash rectangle overlay
  * javascript:(function(){{var add_div=document.createElement('div');add_div.setAttribute('id','mydiv');add_div.style.position="absolute";add_div.style.zIndex="9";add_div.innerHTML='<canvas id="myCanvas" width="256" height="341" style="border:1px solid #000000; background:#8080C0;">';document.body.appendChild(add_div);dragElement(document.getElementById(("mydiv")));function dragElement(elmnt){var pos1=0,pos2=0,pos3=0,pos4=0;if(document.getElementById(elmnt.id+"header")){document.getElementById(elmnt.id+"header").onmousedown=dragMouseDown;}else{elmnt.onmousedown=dragMouseDown;}function dragMouseDown(e){e=e||window.event;pos3=e.clientX;pos4=e.clientY;document.onmouseup=closeDragElement;document.onmousemove=elementDrag;}function elementDrag(e){e=e||window.event;pos1=pos3-e.clientX;pos2=pos4-e.clientY;pos3=e.clientX;pos4=e.clientY;elmnt.style.top=(elmnt.offsetTop-pos2)+"px";elmnt.style.left=(elmnt.offsetLeft-pos1)+"px";}function closeDragElement(){document.onmouseup=null;document.onmousemove=null;}}}})();

* Outline and Hide CSS background images
  * javascript:(function(){var tags=document.getElementsByTagName('*');var element;for(var i=0;i<tags.length;i++){element=tags[i];if(element.currentStyle){if(element.currentStyle['backgroundImage']!=='none')element.style.outline='2px solid #f00';}else if(window.getComputedStyle){if(document.defaultView.getComputedStyle(element,null).getPropertyValue('background-image')!=='none')element.style.outline='2px solid #f00';}}if(confirm("Do you want to hide the background images?")==true){for(var i=0;i<tags.length;i++){element=tags[i];if(element.currentStyle){if(element.currentStyle['backgroundImage']!=='none')element.style.backgroundImage='none';}else if(window.getComputedStyle){if(document.defaultView.getComputedStyle(element,null).getPropertyValue('background-image')!=='none')element.style.backgroundImage='none';}}}else{alert("Background images will be outlined.");}})();

* Highlight CSS content
  * javascript:(function(){var sheets=document.styleSheets;var pseudoClasses=[],i=0,j=0;for(i=0;i<sheets.length;i++){try{var rules=sheets[i].cssRules;for(j=0;j<rules.length;j++){if(rules[j].selectorText.indexOf(':before')!=-1||rules[j].selectorText.indexOf(':after')!=-1){pseudoClasses.push(rules[j].selectorText);}}}catch(ex){}}var classes=[];var classesLength;if(pseudoClasses.length>0){pseudoClasses=pseudoClasses.join(',').split(',');for(i=0;i<pseudoClasses.length;i++){var colonPos=pseudoClasses[i].indexOf(':');if(colonPos!=-1){classes.push(pseudoClasses[i].substring(0,colonPos));}}}classesLength=classes.length;if(classes.length>0){alert('The list of '+classesLength+' pseudo-elements with :before or :after are: '+classes+'.\n\nKeep Going!!');}else{alert('There is no CSS content.');return;}var eachClass,i;var eachClassBefore,eachClassAfter;for(i=0;i<classes.length;i++){eachClass=classes[i];eachClassBefore=eachClass.concat("::before");eachClassAfter=eachClass.concat("::after");document.styleSheets[0].addRule(eachClassBefore,'background-color: orange');document.styleSheets[0].addRule(eachClassAfter,'background-color: yellow');}alert("CSS content will be highlighted. \n\nOrange highlight on BEFORE content. \nYellow highlight on AFTER content.");})();

* CSS absolute position
  * javascript:(function(){{var x=document.getElementsByTagName("*");var i;var count=0;var all=[],cssprop,thisclass;var absolutes=[];for(i=0;i<x.length;i++){cssprop=window.getComputedStyle(x[i],null).getPropertyValue("position");if(cssprop=="absolute"){absolutes.push(x[i]);count=count+1;x[i].setAttribute("style","background-color: lime;");}}alert("there are "+count+" absolute positions: "+absolutes);if(confirm("Remove the absolute position style?")==true){for(i=0;i<absolutes.length;i++){thisclass=absolutes[i];thisclass.setAttribute("style","background-color: lime; position: static;");}}else{alert("The absolute positions are highlighted.");}}})();
 
* Show links
  * javascript:for(l=0;l<document.all.length;l++){if(document.all[l].tagName=='A'){with(document.all[l].style){if(backgroundColor=='lime'){void(backgroundColor=document.bgColor)}else{void(backgroundColor='lime')}}}}

* Page Title
  * javascript:(function(){alert("The page title is: "+document.title);})();

* Highlight Icon (fonts), doesn't work on typed html unicode fonts...yet.
  * javascript:(function(){var sheet=document.createElement('style');sheet.innerHTML="i, .fa, .glyphicon, .material-icons, [data-icon] { background-color: lime; }";document.body.appendChild(sheet);})();

## These are Good ones too..

* [Outline CSS Background Images](http://zomigi.com/demo/background-images_remove_outline.html#)

* [Hide CSS background images](http://zomigi.com/demo/background-images_remove_outline.html#)

* [Validate This Page In New Window](https://validator.w3.org/favelets.html)

* [Juicy Table Inspectors](http://juicystudio.com/article/complextableinspector.php#thebook)

* [WhatFont](http://www.chengyinliu.com/whatfont.html)

* [Fount](https://fount.artequalswork.com/)

* [slayeroffice Favelet Suite](http://slayeroffice.com/?c=/content/tools/suite.html)

* [ANDI](https://www.ssa.gov/accessibility/andi/help/install.html)


