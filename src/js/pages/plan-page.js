var swiper = new Swiper(".plan-page__swiper-btns", {
	slidesPerView: 'auto',
	breakpoints: {
		991: {
			slidesPerView: 3,
		},
	},
});
var swiper2 = new Swiper(".swiper-plan-map", {
	spaceBetween: 0,
	thumbs: {
		swiper: swiper,
	},
	effect: 'fade',
	allowTouchMove: false,
});



function planinit1() {
	let myMap = new ymaps.Map('plan__map1', {
		center: [68.97283754942652,33.07591499999998],
		zoom: 15,
	});


	MyIconContentLayout1 = ymaps.templateLayoutFactory.createClass(
		'<div class="map-icon-content map-icon-content-main">$[properties.iconContent]</div>'
	),
	placemark1 = new ymaps.Placemark([68.97283754942652,33.07591499999998], {
		hintContent: '',
		balloonContent: '',
		iconContent: ' Главное здание'
	}, {
		iconLayout: 'default#imageWithContent',
		iconImageHref: 'images/icons/loc.svg',
		iconImageSize: [55, 70],
		iconImageOffset: [-27, -50],
		iconContentOffset: [55, 20],
		iconContentLayout: MyIconContentLayout1
	});
	




	myMap.controls.remove('geolocationControl'); 
	myMap.controls.remove('searchControl'); 
	myMap.controls.remove('trafficControl'); 
	myMap.controls.remove('typeSelector');
	myMap.controls.remove('fullscreenControl');
	myMap.controls.remove('rulerControl');
	myMap.controls.remove('zoomControl');
	myMap.behaviors.enable('scrollZoom'); 

	myMap.geoObjects.add(placemark1);

}

ymaps.ready(planinit1);



function planinit2() {
	let myMap = new ymaps.Map('plan__map2', {
		center: [68.96833954941498,33.08093650000001],
		zoom: 15,
	});


	MyIconContentLayout2 = ymaps.templateLayoutFactory.createClass(
		'<div class="map-icon-content map-icon-content-kvc">$[properties.iconContent]</div>'
	),
	placemark2 = new ymaps.Placemark([68.96833954941498,33.08093650000001], {
		hintContent: '',
		balloonContent: '',
		iconContent: ' КВЦ Русского музея'
	}, {
		iconLayout: 'default#imageWithContent',
		iconImageHref: 'images/icons/loc.svg',
		iconImageSize: [55, 70],
		iconImageOffset: [-27, -50],
		iconContentOffset: [55, 20],
		iconContentLayout: MyIconContentLayout2
	});
	




	myMap.controls.remove('geolocationControl'); 
	myMap.controls.remove('searchControl'); 
	myMap.controls.remove('trafficControl'); 
	myMap.controls.remove('typeSelector');
	myMap.controls.remove('fullscreenControl');
	myMap.controls.remove('rulerControl');
	myMap.controls.remove('zoomControl');
	myMap.behaviors.enable('scrollZoom'); 

	myMap.geoObjects.add(placemark2);

}

ymaps.ready(planinit2);



function planinit3() {
	let myMap = new ymaps.Map('plan__map3', {
		center: [68.95983904942658,33.080285025131175],
		zoom: 15,
	});


	MyIconContentLayout3 = ymaps.templateLayoutFactory.createClass(
		'<div class="map-icon-content map-icon-content-home">$[properties.iconContent]</div>'
	),
	placemark3 = new ymaps.Placemark([68.95983904942658,33.080285025131175], {
		hintContent: '',
		balloonContent: '',
		iconContent: ' Дом ремесел'
	}, {
		iconLayout: 'default#imageWithContent',
		iconImageHref: 'images/icons/loc.svg',
		iconImageSize: [55, 70],
		iconImageOffset: [-27, -50],
		iconContentOffset: [55, 20],
		iconContentLayout: MyIconContentLayout3
	});
	




	myMap.controls.remove('geolocationControl'); 
	myMap.controls.remove('searchControl'); 
	myMap.controls.remove('trafficControl'); 
	myMap.controls.remove('typeSelector');
	myMap.controls.remove('fullscreenControl');
	myMap.controls.remove('rulerControl');
	myMap.controls.remove('zoomControl');
	myMap.behaviors.enable('scrollZoom'); 

	myMap.geoObjects.add(placemark3);

}

ymaps.ready(planinit3);