var swiper = new Swiper(".themes__swiper", {
	slidesPerView: '1',
	navigation: {
		prevEl: ".themes-swiper-button-prev",
		nextEl: ".themes-swiper-button-next",
	},
	initialSlide: 1,
});



var tl = gsap.timeline();
var themes__deskbgy = '-870px'

tl.fromTo('.item-themes__image-bg', 1,{opacity: '1',}, {opacity: '0'}, 1)
tl.fromTo('.item-themes__body *', 1,{opacity: '1',}, {opacity: '0'}, 1)
tl.fromTo('.item-themes', 1,{opacity: '1',}, {opacity: '0'}, 1)
tl.fromTo('.themes__deskbg', 5,{y: '0',}, {y: themes__deskbgy}, 1)
tl.fromTo('.item-themes__title', 3,{opacity: '0',}, {opacity: '1'}, 4.5)
tl.fromTo('.outside-text1', 3,{opacity: '0',}, {opacity: '1'}, 5)
tl.fromTo('.outside-text2', 3,{opacity: '0',}, {opacity: '1'}, 5.5)
tl.fromTo('.outside-text3', 3,{opacity: '0',}, {opacity: '1'}, 6)
tl.fromTo('.outside-text4', 3,{opacity: '0',}, {opacity: '1'}, 6.5)
tl.fromTo('.outside-text5', 3,{opacity: '0',}, {opacity: '1'}, 7)

ScrollTrigger.create({
	animation: tl,
	trigger: '.themes__swiper-wrapper',
	start: '0 0',
	end: 'bottom',
	scrub: true,
	pin: true,
})