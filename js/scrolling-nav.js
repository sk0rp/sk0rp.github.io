//jQuery to collapse the navbar on scroll
$(window).scroll(function() {
    if ($(".navbar").offset().top > 50) {
		logoCollapse();
    } else {
		logoRecover();
    }
	
	if ($(window).scrollTop() + $(window).height() > $(document).height() - 150) {
		$("#social-bar").hide();
    } else {
		$("#social-bar").show();
    }
});

//jQuery for page scrolling feature - requires jQuery Easing plugin
$(function() {
    $('a.page-scroll').bind('click', function(event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top
        }, 1500, 'easeInOutExpo');
        event.preventDefault();
    });
});
