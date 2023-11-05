$('.tags__show-more-btn').click(function () {
	$('.tags__item:hidden').slideDown(300);
	$('.tags__item:hidden').length < 1 ? $('.tags__show-more-btn').hide() : false;
});