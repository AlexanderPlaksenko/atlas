import $ from 'jquery';

var $document = $(document),
	$element = $('.fixed-button'),
	$elementA = $('.fixed-button a'),
	className = 'hasScrolled',
	section5 = $('.section-5').outerHeight();

function getMobileOperatingSystem() {
	var userAgent = navigator.userAgent || navigator.vendor || window.opera;

	if (/android/i.test(userAgent)) {
		$elementA.attr('href', 'https://redirect.appmetrica.yandex.com/serve/240790038462378290')
	}
	$elementA.attr('href', 'https://redirect.appmetrica.yandex.com/serve/240790038462378290')

	if (/iPad|iPhone|iPod/.test(userAgent) && !window.MSStream) {
		console.log("i");
		$elementA.attr('href', 'https://redirect.appmetrica.yandex.com/serve/673100423149702153')
	}
}

if ($document.width() > 800) {
	$document.scroll(function () {
		$element.toggleClass(className, $document.scrollTop() >= 50);
		if ($(window).scrollTop() + $(window).height() >= ($(document).height() - section5)) {
			$element.addClass('abs-button').css('top', $(document).height() - section5)
		} else {
			$element.removeClass('abs-button').css('top', 'inherit')
		}
	});
} else {
	getMobileOperatingSystem();
}

$(function() {
	$('a[href*="#"]:not([href="#"])').click(function() {
		if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
			var target = $(this.hash);
			target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
			if (target.length) {
				$('html, body').animate({
					scrollTop: target.offset().top
				}, 1000);
				return false;
			}
		}
	});
});
