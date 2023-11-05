(function ($) {
	$(function () {

		$('ul.search-result__sidebar-btns').on('click', 'li:not(.active)', function () {
			$(this)
				.addClass('active').siblings().removeClass('active').closest('div.search-result__container').find('div.search-result__content-tab').slideUp().eq($(this).index()).slideDown();
		});

	});
})(jQuery);