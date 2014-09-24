$(document).keyup(function(e) {
	if (e.keyCode == 27)
	{
	  //$("#webHelpDyslexia-blackUper").remove();
	  //$("#webHelpDyslexia-blackBotton").remove();
	  //$("#webHelpDyslexia-select-reader-size").val('');
	  //$("#webHelpDyslexia-text").remove();
	  removeElements();
	}
});
		
$(document).bind('mousemove', function(e){
  $('#webHelpDyslexia-tail').css({
	 top:   e.pageY - 1000
  });
  $('#webHelpDyslexia-blackUper').css({
	 top:   e.pageY - (2010 + tam)
  });
  $('#webHelpDyslexia-blackBotton').css({
	 top:   e.pageY +12
  });
  
 // $('#webHelpDyslexia-text').css({
	// top:   e.pageY -100,
	// left:  e.pageX
  //});
}); 

