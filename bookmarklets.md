# Testing for Accessibility Bookmarklets (updated 10/2/2017)

## New favelets

* Outline and Hide CSS background images
  * (javascript:(function(){var tags=document.getElementsByTagName('*');var element;for(var i=0;i<tags.length;i++){element=tags[i];if(element.currentStyle){if(element.currentStyle['backgroundImage']!=='none')element.style.outline='2px solid #f00';}else if(window.getComputedStyle){if(document.defaultView.getComputedStyle(element,null).getPropertyValue('background-image')!=='none')element.style.outline='2px solid #f00';}}if(confirm("Do you want to hide the background images?")==true){for(var i=0;i<tags.length;i++){element=tags[i];if(element.currentStyle){if(element.currentStyle['backgroundImage']!=='none')element.style.backgroundImage='none';}else if(window.getComputedStyle){if(document.defaultView.getComputedStyle(element,null).getPropertyValue('background-image')!=='none')element.style.backgroundImage='none';}}}else{alert("Background images will be outlined.");}})();)

* Highlight CSS content
  * (javascript:(function(){var sheets=document.styleSheets;var pseudoClasses=[],i=0,j=0;for(i=0;i<sheets.length;i++){try{var rules=sheets[i].cssRules;for(j=0;j<rules.length;j++){if(rules[j].selectorText.indexOf(':before')!=-1||rules[j].selectorText.indexOf(':after')!=-1){pseudoClasses.push(rules[j].selectorText);}}}catch(ex){}}var classes=[];var classesLength;if(pseudoClasses.length>0){pseudoClasses=pseudoClasses.join(',').split(',');for(i=0;i<pseudoClasses.length;i++){var colonPos=pseudoClasses[i].indexOf(':');if(colonPos!=-1){classes.push(pseudoClasses[i].substring(0,colonPos));}}}classesLength=classes.length;if(classes.length>0){alert('The list of '+classesLength+' pseudo-elements with :before or :after are: '+classes+'.\n\nKeep Going!!');}else{alert('There is no CSS content.');return;}var eachClass,i;var eachClassBefore,eachClassAfter;for(i=0;i<classes.length;i++){eachClass=classes[i];eachClassBefore=eachClass.concat("::before");eachClassAfter=eachClass.concat("::after");document.styleSheets[0].addRule(eachClassBefore,'background-color: orange');document.styleSheets[0].addRule(eachClassAfter,'background-color: yellow');}alert("CSS content will be highlighted. \n\nOrange highlight on BEFORE content. \nYellow highlight on AFTER content.");})();)

* Show links
  * (javascript:for(l=0;l<document.all.length;l++){if(document.all[l].tagName=='A'){with(document.all[l].style){if(backgroundColor=='lime'){void(backgroundColor=document.bgColor)}else{void(backgroundColor='lime')}}}})

* Page Title
  * (javascript:(function(){alert("The page title is: "+document.title);})();)

## These are Good ones too..

* [Outline CSS Background Images](http://zomigi.com/demo/background-images_remove_outline.html#)

* [Hide CSS background images](http://zomigi.com/demo/background-images_remove_outline.html#)

* [Validate This Page In New Window](https://validator.w3.org/favelets.html)

* [Juicy Table Inspectors](http://juicystudio.com/article/complextableinspector.php#thebook)

* [WhatFont](http://www.chengyinliu.com/whatfont.html)

* [Fount](https://fount.artequalswork.com/)

* [slayeroffice Favelet Suite](http://slayeroffice.com/?c=/content/tools/suite.html)

* [ANDI](https://www.ssa.gov/accessibility/andi/help/install.html)


