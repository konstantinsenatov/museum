$('.contacts-page__btn-send').click(function(event) {
	$('.contacts-page__overlay').addClass('active');
	$('.contacts-page__popup').addClass('active');
});
$('.contacts-page__overlay').click(function(event) {
	$('.contacts-page__overlay').removeClass('active');
	$('.contacts-page__popup').removeClass('active');
});
$('.contacts-page__popup-close').click(function(event) {
	$('.contacts-page__overlay').removeClass('active');
	$('.contacts-page__popup').removeClass('active');
});


function contactsinit() {
	let myMap = new ymaps.Map('contacts-page__map', {
		center: [68.96785276838722,33.079111048916296],
		zoom: 14,
	});


	MyIconContentLayout1 = ymaps.templateLayoutFactory.createClass(
		'<div class="map-icon-content map-icon-content-main">$[properties.iconContent]</div>'
	),
	placemark1 = new ymaps.Placemark([68.97282213758429,33.075936457672114], {
		hintContent: '',
		balloonContent: '',
		iconContent: 'Главное здание'
	}, {
		iconLayout: 'default#imageWithContent',
		iconImageHref: 'images/icons/loc.svg',
		iconImageSize: [55, 70],
		iconImageOffset: [-27, -50],
		iconContentOffset: [55, 20],
		iconContentLayout: MyIconContentLayout1
	});
	




	MyIconContentLayout2 = ymaps.templateLayoutFactory.createClass(
		'<div class="map-icon-content map-icon-content-kvc">$[properties.iconContent]</div>'
	),
	placemark2 = new ymaps.Placemark([68.96833954941498,33.08093650000001], {
		hintContent: '',
		balloonContent: '',
		iconContent: 'КВЦ Русского музея'
	}, {
		iconLayout: 'default#imageWithContent',
		iconImageHref: 'images/icons/loc.svg',
		iconImageSize: [55, 70],
		iconImageOffset: [-27, -50],
		iconContentOffset: [55, 20],
		iconContentLayout: MyIconContentLayout2
	});

	MyIconContentLayout3 = ymaps.templateLayoutFactory.createClass(
		'<div class="map-icon-content map-icon-content-home">$[properties.iconContent]</div>'
	),
	placemark3 = new ymaps.Placemark([68.95983904942658,33.080285025131175], {
		hintContent: '',
		balloonContent: '',
		iconContent: 'Дом ремесел'
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

	myMap.geoObjects.add(placemark1);
	myMap.geoObjects.add(placemark2);
	myMap.geoObjects.add(placemark3);


	$("#contacts-page-title1 h3").click(function() {
		myMap.setCenter([68.97282213758429,33.075936457672114]);		
		myMap.setZoom(17);		
	});
	$("#contacts-page-title2 h3").click(function() {
		myMap.setCenter([68.96833954941498,33.08093650000001]);		
		myMap.setZoom(17);		
	});
	$("#contacts-page-title3 h3").click(function() {
		myMap.setCenter([68.95983904942658,33.080285025131175]);		
		myMap.setZoom(17);		
	});
}

ymaps.ready(contactsinit);


