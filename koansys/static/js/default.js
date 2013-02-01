jQuery(function(){	
	//GENERAL MANIPS:
	
	//Styling header links
	jQuery("a.headerlink").each(function() {
		jQuery(this).html("&dArr;");
	});
	
	//Remove empty divs
	jQuery(".section blockquote div").each(function() {
		if(jQuery(this).is(":empty")) {
			jQuery(this).closest(".section").remove();
		}
	});
	
	//Styling functions wrapper
	jQuery(".section").each(function(){
		if(jQuery(this).add("#functions").length > 0) {
			jQuery(this).addClass("functionsWrapper");
		}
		
		var sectionID = jQuery(this).attr("id");
		jQuery(this).replaceWith(jQuery('<section id=' + sectionID + '/>').html(jQuery(this).html()));
	});
	
	//SIDEBAR NAVIGATION:
	var firstLink = jQuery(".sidebarNav li.active a").first()
	var linkTxt = firstLink.text().toLowerCase().replace(/ /g,'-').replace(/[^\w-]+/g,'');
	var newLink = "#" + linkTxt;
	
	firstLink.attr("href", newLink);
	
	//Initiate classes
	jQuery(".sidebarNav ul li").each(function() {
		jQuery(this).attr("class", "");
	});
	
	//If empty uls exist
	jQuery(".sidebarNav ul").each(function() {
		if(jQuery(this).children().length == 0) {
			jQuery(this).remove();
		}
	});

	//If the uls contain sub-navs
	jQuery(".sidebarNav ul li").each(function(index) {
		if(jQuery(this).children("ul").length > 0) {
			jQuery(this).addClass("hasChildren");
		}
	});
	
	//If no content for the sidebar exists
	if(jQuery(".sidebarNav li.header").length == 0 ) {
		jQuery(".sidebarWrapper").remove();
	}
	
	//On click, if parent contains hasChildren class
	jQuery(".sidebarNav a").live("click", function() {	
		jQuery(".sidebarNav .hasChildren").removeClass("child-active");		
			
		if(jQuery(this).parents(".hasChildren").length > 0) {
			jQuery(this).closest("li.hasChildren").addClass("child-active");
		}
	});
		
	 //Firefox Scrolling
	jQuery('#bodyContainer').bind('DOMMouseScroll', function(e) {
		jQuery(".sidebarNav .hasChildren").removeClass("child-active");		
		
		jQuery(".sidebarNav .hasChildren li").each(function() {
			if(jQuery(this).hasClass("active")) {
				jQuery(this).parents(".hasChildren").addClass("active");
			}
		});
	});
	
	//IE, Opera, Webkit Scrolling
	jQuery('#bodyContainer').bind('mousewheel', function(e){
		jQuery(".sidebarNav .hasChildren").removeClass("child-active");		
		
		jQuery(".sidebarNav .hasChildren li").each(function() {
			if(jQuery(this).hasClass("active")) {
				jQuery(this).parents(".hasChildren").addClass("active");
			}
		});
	});
	
	if (jQuery(".sidebarNav ul li:first").hasClass("hasChildren")) {
		jQuery(".sidebarNav ul li:first").addClass("child-active");
	}
	else {
		jQuery(".sidebarNav ul li:first").addClass("active");
	}
	
	//Dynamic scrolling	
	var $window = $(window);
    jQuery('.sidebarNav').affix({
		offset: {
			top: function () { return $window.width() <= 980 ? 290 : 210 }
		}
	})
		
});
