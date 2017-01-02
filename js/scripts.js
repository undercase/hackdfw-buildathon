var mountainBackAnimation = anime({
	targets: $('.background .mountain-back')[0],
	top: 1200,
	autoplay: false
});
var mountainForeAnimation = anime({
	targets: $('.background .mountain-fore')[0],
	top: 800,
	autoplay: false
});
var valleyAnimation = anime({
	targets: $('.background .valley')[0],
	top: 400,
	autoplay: false
});
var forestAnimation = anime({
	targets: $('.background .forest')[0],
	top: 0,
	autoplay: false
});
var titleAnimation = anime({
	targets: $('#home .content')[0],
	top: 400,
	autoplay: false
});
if( !/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {

	$(window).scroll(function() {
		if ($(window).scrollTop() <= $('#home').height()*.5) {
			var amount = $(window).scrollTop()/150;
			mountainBackAnimation.seek(amount);
			mountainForeAnimation.seek(amount);
			valleyAnimation.seek(amount);
			// forestAnimation.seek(amount);
			titleAnimation.seek(amount);
		}
		// console.log($(window).scrollTop());
	});

}
