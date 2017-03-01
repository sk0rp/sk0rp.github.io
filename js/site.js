function logoCollapse() {
	$("#logo img").attr("src", "img/logo_latin_soul_full.png");
	$("#logo img").addClass("logo-collapse");
	$("#logo2").fadeOut("slow");
}

function logoRecover() {
	$("#logo img").removeClass("logo-collapse");
	$("#logo img").attr("src", "img/logo_latin_soul_big_en.png");
	$("#logo2").fadeIn("slow");
}

$('.nav a').on('click', function(){
    $('.navbar-collapse').collapse('hide');
});