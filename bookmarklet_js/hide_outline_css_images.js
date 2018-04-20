(function() {
  var tags=document.getElementsByTagName('*');
  var element;
  var count=0;
  for(var i=0;i<tags.length;i++){
        element=tags[i];
        if(element.currentStyle) {
                if(element.currentStyle['backgroundImage']!=='none') {
                  element.style.outline='2px solid #f00';
                  count++;
        } else if(window.getComputedStyle) {
          if(document.defaultView.getComputedStyle(element,null).getPropertyValue('background-image')!=='none') {
            element.style.outline='2px solid #f00';
            count++;
        }
  }
          //added check for no background images
  if (count=0) {
    alert("No background images found.");
    return;
  } else 
    //end check
    if(confirm("Do you want to hide the background images?")==true) {
    for(var i=0;i<tags.length;i++) {
      element=tags[i];
      if(element.currentStyle) {
        if(element.currentStyle['backgroundImage']!=='none')element.style.backgroundImage='none';
      } else if(window.getComputedStyle) {
        if(document.defaultView.getComputedStyle(element,null).getPropertyValue('background-image')!=='none')
          element.style.backgroundImage='none';
      }
    }
  } else {
    alert("Background images will be outlined.");
  }
})();
