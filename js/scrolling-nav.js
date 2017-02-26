//jQuery to collapse the navbar on scroll
$(window).scroll(function() {
    if ($(".navbar").offset().top > 50) {
		$("#logo img").addClass("logo-collapse");
		$("#logo img").attr("src", "img/logo_latin_soul_full.png");
    } else {
		$("#logo img").removeClass("logo-collapse");
		$("#logo img").attr("src", "img/logo_latin_soul_big.png");
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
