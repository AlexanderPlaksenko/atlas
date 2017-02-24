import $ from 'jquery';

var $document = $(document),
	$element = $('.fixed-button'),
	$elementA = $('.fixed-button a'),
	className = 'hasScrolled',
	section5 = $('.section-5').outerHeight();
if ($document.width() > 800) {
	$document.scroll(function () {
		$element.toggleClass(className, $document.scrollTop() >= 50);
		if ($(window).scrollTop() + $(window).height() >= ($(document).height() - section5)) {
			$element.addClass('abs-button').css('top', $(document).height() - section5)
		} else {
			$element.removeClass('abs-button').css('top', 'inherit')
		}
	});
}
function getMobileOperatingSystem() {
	var userAgent = navigator.userAgent || navigator.vendor || window.opera;

	if (/android/i.test(userAgent)) {
		$elementA.attr('href', 'https://play.google.com/store/apps/details?id=com.rusve.atlas')
	}

	if (/iPad|iPhone|iPod/.test(userAgent) && !window.MSStream) {
		console.log("i");
		$elementA.attr('href', 'https://itunes.apple.com/app/id1102821887')
	}
}
getMobileOperatingSystem();
