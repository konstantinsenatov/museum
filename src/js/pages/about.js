function aboutinit() {
	let myMap = new ymaps.Map('about__map', {
		center: [68.97283754942652,33.07591499999998],
		zoom: 14,
	});


	MyIconContentLayout1 = ymaps.templateLayoutFactory.createClass(
		'<div class="map-icon-content map-icon-content-main">$[properties.iconContent]</div>'
	),
	placemark4 = new ymaps.Placemark([68.97283754942652,33.07591499999998], {
		hintContent: '',
		balloonContent: '',
		iconContent: ' ул. Коминтерна 13'
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

	myMap.geoObjects.add(placemark4);

}

ymaps.ready(aboutinit);