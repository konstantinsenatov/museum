$(document).ready(function() {
		$('.menu__link').click(function(event) {
			$(this).toggleClass('active').next().slideToggle(0);
		});
	console.log($(window).width());
	$('.header__burger').click(function(event) {
		$('.header__burger').addClass('active');
		$(".menu").addClass('active');
		$("body").addClass('overflow-hidden');
	});
	
	$('.menu__close').click(function(event) {
		$('.header__burger').removeClass('active');
		$(".menu").removeClass('active');
		$("body").removeClass('overflow-hidden');
	});
	$('.menu__overlay').click(function(event) {
		$('.header__burger').removeClass('active');
		$(".menu").removeClass('active');
		$("body").removeClass('overflow-hidden');
	});
	
	
	$('.header__search').click(function(event) {
		$('.search-header').addClass('active');
	});
	$('.search-header__close').click(function(event) {
		$('.search-header').removeClass('active');
	});
	
	$('.btn-header__text').click(function(event) {
		$(this).toggleClass('active').next().slideToggle(0);
	});


	var lastScroll = 0;
	$(window).scroll(function(){
		var scroll = $(window).scrollTop();
		if (scroll > lastScroll) {
			$(".header").addClass("header-active");
		} else {
			$(".header").removeClass("header-active");
		}
		lastScroll = scroll;
		
		if(scroll > 100){
			$('.header').addClass('header-active-border');
		} else{
			$('.header').removeClass('header-active-border');
		}
	});
	
	$(document).click( function(e){
		var header__search = $( ".search-header__input input, .header__search" );
		if ( !header__search.is(e.target) && header__search.has(e.target).length === 0 ) { 
			$('.search-header').removeClass('active');
		}
	});
}); 

