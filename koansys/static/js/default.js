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
			jQuery(this).addClass("functionsWrapper");
		}
		
		var sectionID = jQuery(this).attr("id");
		jQuery(this).replaceWith(jQuery('<section id=' + sectionID + '/>').html(jQuery(this).html()));
	});
	
	//Add current page link to sidebar navigation
	var firstLink = jQuery(".sidebarNav li.active a").first()
	var linkTxt = firstLink.text().toLowerCase().replace(/ /g,'-').replace(/[^\w-]+/g,'');
	var newLink = "#" + linkTxt;
	
	firstLink.attr("href", newLink);
	
	jQuery(".sidebarNav ul li").each(function() {
		jQuery(this).attr("class", "");
	});
	
	jQuery(".sidebarNav ul li").each(function(index) {
		if(jQuery(this).children("ul").length > 0) {
			jQuery(this).addClass("hasChildren");
		}
	});
		
	var $window = $(window);
    jQuery('.sidebarNav').affix({
		offset: {
			top: function () { return $window.width() <= 980 ? 290 : 210 }
		}
	})
		
});
