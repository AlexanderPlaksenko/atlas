import svg4everybody from 'svg4everybody';
import $ from 'jquery';

$(() => {
	svg4everybody();
});
var $document = $(document),
	$element = $('.fixed-button'),
	className = 'hasScrolled';

if ($document.width() > 800) {
	$document.scroll(function() {
		$element.toggleClass(className, $document.scrollTop() >= 50);
	});
}
