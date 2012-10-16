$(function(){
	alert("herro");
	$("#navigationWrapper #navigation li").each(function() {
		var accessKey = $(this).attr("accesskey");
		alert($(this));
		
		if (accessKey == "N" || accessKey == "P") {
			$(this).addClass("prevNext");
		}
	});
});