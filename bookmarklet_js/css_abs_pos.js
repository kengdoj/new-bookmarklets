(function() {
    var x=document.getElementsByTagName("*");
    var i;
    var count=0;
    var all=[],cssprop,thisclass;
    var absolutes=[];
    for(i=0;i<x.length;i++) {
      cssprop=window.getComputedStyle(x[i],null).getPropertyValue("position");
      if(cssprop=="absolute") {
        absolutes.push(x[i]);
        count=count+1;
        x[i].setAttribute("style","background-color: lime;");
      }
    }
    alert("there are "+count+" absolute positions: "+absolutes);
    if(confirm("Remove the absolute position style?")==true) { 
      for(i=0;i<absolutes.length;i++) {
        thisclass=absolutes[i];
        thisclass.setAttribute("style","background-color: lime; position: static;");
      }
    } else {
      alert("The absolute positions are highlighted.");
    }
})();
