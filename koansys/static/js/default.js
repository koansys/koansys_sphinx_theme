jQuery(function(){	
	jQuery("a.headerlink").each(function() {
		jQuery(this).html("&dArr;");
	});
	
	jQuery(".section blockquote div").each(function() {
		if(jQuery(this).is(":empty")) {
			jQuery(this).closest(".section").remove();
		}
	});
	
	jQuery(".section").each(function(){
		if(jQuery(this).add("#functions").length > 0) {
			console.log("hello");
			jQuery(this).addClass("functionsWrapper");
		}
	});
		
});
