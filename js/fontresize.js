//     JQuery Text resize + Cookie recall
//     Ben Hayes, January 2010 | info@jackfruitdesign.com
//     Based initially on a script from http://www.shopdev.co.uk/blog/text-resizing-with-jquery/
//     This script gives a simplified binary option: normal or large text

$(document).ready(function() {
		
	     // declare a few constants:
	     var SMALL = 14; //small font size in pixels
	     var LARGE = 16; //larger size in pixels

	     //make it small by default
	     var fontsize = SMALL; 

	     // Only show text resizing links if JS is enabled
	     $(".fontresize").show();

	

	     // large font-size link:
	     $("#large").bind("click", function() {
			     if(fontsize == SMALL) {
			     fontsize = LARGE;
			     $("article").css("font-size", fontsize + "px");
			     $("#large").toggleClass("current");
			     $("#small").toggleClass("current");
			     $(".fontlarge").toggle();
			     $(".fontsmall").toggle();
			     }
			     return false;	
			     });
	     
	     // small font-size link:
	     $("#small").bind("click", function() {
			     if(fontsize == LARGE) {
			     fontsize = SMALL;
			     $("article").css("font-size", fontsize + "px");
			     $("#large").toggleClass("current");
			     $("#small").toggleClass("current");
			     $(".fontlarge").toggle();
			     $(".fontsmall").toggle();
			     }
			     return false;	
			     });
});
