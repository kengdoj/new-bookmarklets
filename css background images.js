
//Outline AND option to Hide CSS background images
function(){
var tags=document.getElementsByTagName('*');
var element;
for(var i=0; i<tags.length; i++) { 			
	element=tags[i];
	if(element.currentStyle) {
		if(element.currentStyle['backgroundImage']!=='none')element.style.outline='2px solid #f00';
	} else if(window.getComputedStyle){
		if(document.defaultView.getComputedStyle(element,null).getPropertyValue('background-image')!=='none')element.style.outline='2px solid #f00';
	}
	}
	//want to hide the CSS background images?
if (confirm("Do you want to hide the background images?")== true) {
			//hide the CSS background images
		//var d = document,s = window.getComputedStyle;
		//Array.prototype.forEach.call(d.querySelectorAll("body *"),
        //  if (s(el).backgroundImage.match(/url/)){
        //  el.style.backgroundImage="none";
	for(var i=0; i<tags.length; i++) { 
		element=tags[i];
		if(element.currentStyle) {
	if(element.currentStyle['backgroundImage']!=='none') element.style.backgroundImage='none';
	} else if(window.getComputedStyle){
		if(document.defaultView.getComputedStyle(element,null).getPropertyValue('background-image')!=='none') element.style.backgroundImage='none';
      }
		}
		}	else {
		alert ("Background images will be outlined.");
		}
}
		


//Outline CSS images GOOD
javascript:(function(){var tags=document.getElementsByTagName('*');var element;for(var i=0;i<tags.length;i++){element=tags[i];if(element.currentStyle){if(element.currentStyle['backgroundImage']!=='none')element.style.outline='2px solid #f00';}else if(window.getComputedStyle){if(document.defaultView.getComputedStyle(element,null).getPropertyValue('background-image')!=='none')element.style.outline='2px solid #f00';}}})();

javascript:(function(){var tags=document.getElementsByTagName('*');var element;for(var i=0;i<tags.length;i++){element=tags[i];if(element.currentStyle){if(element.currentStyle['backgroundImage']!=='none')element.style.outline='2px solid #f00';}else if(window.getComputedStyle){if(document.defaultView.getComputedStyle(element,null).getPropertyValue('background-image')!=='none')element.style.outline='2px solid #f00';}}if(confirm("Do you want to hide the background images?")==true){if(element.currentStyle){if(element.currentStyle['backgroundImage']!=='none')element.style.backgroundImage='none';}else if(window.getComputedStyle){if(document.defaultView.getComputedStyle(element,null).getPropertyValue('background-image')!=='none')element.style.backgroundImage='none';};}else{alert("We're done.");}})();
