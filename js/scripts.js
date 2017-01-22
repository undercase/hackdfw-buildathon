var titleAnimation = anime({
	targets: $('#home .content')[0],
	top: 400,
	autoplay: false
});
if( !/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {

	$(window).scroll(function() {
		if ($(window).scrollTop() <= $('#home').height()*.5) {
			var amount = $(window).scrollTop()/150;
			titleAnimation.seek(amount);
		}
	});

}
