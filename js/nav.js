$(function(){
	$(".navbutton a").hover(function(){
    		var i = $(this).parent().parent().get(0);
    		$(i).toggleClass("navhover");	
    	});
})