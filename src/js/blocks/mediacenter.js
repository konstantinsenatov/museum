var swiper = new Swiper(".mediacenter__swiper", {
	slidesPerView: 1,
	grid: {
		rows: 1,
	},
	breakpoints: {
		640: {
			slidesPerView: 2,
		},
		992: {
			slidesPerView: 3,
			grid: {
				rows: 2,
			},
		},
	},
});