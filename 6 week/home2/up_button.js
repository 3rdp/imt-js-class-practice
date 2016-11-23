function runScroll() {
	scrollTo(document.body, 0, 600);
}

function scrollTo(element, to, duration) {
	if (duration <= 0) return;
	var difference = to - element.scrollTop;
	var perTick = difference / duration * 10;

	setTimeout(function() {
		element.scrollTop = element.scrollTop + perTick;
		if (element.scrollTop == to) return;
		scrollTo(element, to, duration - 10);
	}, 10);
}

window.onload = function() {
	var scrollme;
	scrollme = document.querySelector("#scrollme");
	scrollme.addEventListener("click",runScroll,false)

	window.onscroll = function() {
		console.log('Величина прокрутки Y', window.pageYOffset);
		if (window.pageYOffset > 100) {
			scrollme.style.display = 'block';
		} else {
			scrollme.style.display = '';
		}
	}
}

