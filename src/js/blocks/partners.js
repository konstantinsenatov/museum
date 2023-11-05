$('.partners__show-more-btn').click(function () {
	$('.partners__item:hidden').slideDown(300);
	$('.partners__item:hidden').length < 1 ? $('.partners__show-more-btn').hide() : false;
});