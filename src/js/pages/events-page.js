$(document).ready(function() {
	$(function() {
		$('.filter-events__item-datepicker').datepicker({
			autoClose: false,
			classes: 'filter-events__item-datepicker-calendar',
			position: 'bottom center',
			offset: 22,
			range: true,
			multipleDatesSeparator: '',
			onShow: function() {
				$('.filter-events__item-calendar').addClass('active');
			},
			onHide: function() {
				$('.filter-events__item-calendar').removeClass('active');
			},
		})
	});
	$('body').on('click', '.datepicker--pointer',function(){
		$('.filter-events__item-datepicker').trigger('blur'); 
	});
	$('.filter-events__item-top').click(function(event) {
		$(this).toggleClass('active');
	});
	$('.datepicker--nav-action').click(function(event) {
		$(this).toggleClass('active');
		$('.filter-events__item-datepicker-calendar').removeClass('active');
	});

	$(document).click( function(e){
		var events__item = $( ".filter-events__item-top" );
		if ( !events__item.is(e.target) && events__item.has(e.target).length === 0 ) { 
			events__item.removeClass('active');
		}
	});


	$('.events-page__constant-show-more').click(function () {
		$('.events__item-constant:hidden').show(300);
		$('.events__item-constant:hidden').length < 1 ? $('.events-page__constant-show-more').hide() : false;
	});

	$('.events-page__current-show-more').click(function () {
		$('.events__item-current:hidden').show(300);
		$('.events__item-current:hidden').length < 1 ? $('.events-page__current-show-more').hide() : false;
	});

	$('.events-page__future-show-more').click(function () {
		$('.events__item-future:hidden').show(300);
		$('.events__item-future:hidden').length < 1 ? $('.events-page__future-show-more').hide() : false;
	});




}); 