(function() {
  var l;
  var count=0;
  for(l=0;l<document.all.length;l++) { 
    if(document.all[l].tagName=='A') { 
      count=count+1;
      with(document.all[l].style) {
        if(backgroundColor=='lime') {
          void(backgroundColor=document.bgColor)
        } else {
          void(backgroundColor='lime')
        }
      }
    }
  }
  if (count==0) {
  alert("No links found.");
  }
}
  )();
