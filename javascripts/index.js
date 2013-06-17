$(document).ready(function(){
	
	$(window).resize(function() {
  		layoutManager();
	});

	function layoutManager() {
		widthDocument = window.innerWidth ? window.innerWidth : $(window).width();
		widthDocument -= 15
		heightDocument = Math.floor(widthDocument * 4 / 3);
	
		$(".background").css("height", heightDocument)
						.css("width", widthDocument);
	}
	
	layoutManager();
	
	$('.bubble').each(function() {
		var selector = '.bubble #info-' + $(this).attr("id");
		$('#' + $(this).attr("id") + '.bubble').tooltipster({
			content: $(selector).html(),
			fixedWidth: 500,
			theme: ".tooltipster-shadow",
			interactive: true
		});
	});
	
});