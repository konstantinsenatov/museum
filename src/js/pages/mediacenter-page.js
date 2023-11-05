const checkboxesClass = '.mediacenter-page__filter input';
const elem = document.querySelector('.mediacenter-page__items');
const checkboxes = document.querySelectorAll(checkboxesClass);
const getTotalItemsEl = document.querySelector('#js-items-total');
const getFilteredItemsEl = document.querySelector('#js-items-filtered');

const iso = new Isotope(elem, {
	itemSelector: '.mediacenter-page__item-wrapper'
});

document.addEventListener('input', (event) => {
	if (!event.target.matches(checkboxesClass)) return; 
	const inclusives = [];
	for (const checkbox of checkboxes) {
		if (checkbox.checked) {
			inclusives.push(checkbox.value);
		}
	}

	const filterValue = inclusives.length ? inclusives.join(', ') : '*';
	iso.arrange({ filter: filterValue });
	updateFilteredCount(); 
});

$('.mediacenter-page__filter-wrapper').click(function(event) {
	$(this).toggleClass('active');
});
$(document).click( function(e){ 
	var events__item = $( ".mediacenter-page__filter-wrapper" );
	if ( !events__item.is(e.target) && events__item.has(e.target).length === 0 ) { 
		events__item.removeClass('active'); 
		/* if (events__ww < 640) {
			$('.filter-events__dropdown').fadeOut(0); 
		} */
	}
});