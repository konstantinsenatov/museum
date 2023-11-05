new isvek.Bvi({
	target: '.header__visible',
});
AOS.init();

function onEntry(entry) {
	entry.forEach(change => {
		if (change.isIntersecting) {
			change.target.classList.add('js-show');
		}
	});
}
let options = {
	threshold: [0.5] };
let observer = new IntersectionObserver(onEntry, options);
let elements = document.querySelectorAll('.js-hide');
for (let elm of elements) {
	observer.observe(elm);
}


$(document).ready(function() {
    $('.gallary-block__show-more-btn').click(function () {
        $('.gallary-block__item:hidden').show(300);
        $('.gallary-block__item:hidden').length < 1 ? $('.gallary-block__show-more-btn').hide() : false;
    });
});


      let vh = window.innerHeight * 0.01;
      // Then we set the value in the --vh custom property to the root of the document
      document.documentElement.style.setProperty('--vh', `${vh}px`);
      // We listen to the resize event
      window.addEventListener('resize', () => {
      // We execute the same script as before
			let vh = window.innerHeight * 0.01;
			document.documentElement.style.setProperty('--vh', `${vh}px`);
      });