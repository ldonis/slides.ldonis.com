function scrollTo(destination, duration = 200, easing = 'linear', callback) {

	var easings = {
		linear(t) {
			return t;
		},
		easeInQuad(t) {
			return t * t;
		},
		easeOutQuad(t) {
			return t * (2 - t);
		},
		easeInOutQuad(t) {
			return t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t;
		},
		easeInCubic(t) {
			return t * t * t;
		},
		easeOutCubic(t) {
			return (--t) * t * t + 1;
		},
		easeInOutCubic(t) {
			return t < 0.5 ? 4 * t * t * t : (t - 1) * (2 * t - 2) * (2 * t - 2) + 1;
		},
		easeInQuart(t) {
			return t * t * t * t;
		},
		easeOutQuart(t) {
			return 1 - (--t) * t * t * t;
		},
		easeInOutQuart(t) {
			return t < 0.5 ? 8 * t * t * t * t : 1 - 8 * (--t) * t * t * t;
		},
		easeInQuint(t) {
			return t * t * t * t * t;
		},
		easeOutQuint(t) {
			return 1 + (--t) * t * t * t * t;
		},
		easeInOutQuint(t) {
			return t < 0.5 ? 16 * t * t * t * t * t : 1 + 16 * (--t) * t * t * t * t;
		}
	};

	var start = window.pageYOffset;
	var startTime = 'now' in window.performance ? performance.now() : new Date().getTime();

	var documentHeight = Math.max(document.body.scrollHeight, document.body.offsetHeight, document.documentElement.clientHeight, document.documentElement.scrollHeight, document.documentElement.offsetHeight);
	var windowHeight = window.innerHeight || document.documentElement.clientHeight || document.getElementsByTagName('body')[0].clientHeight;
	var destinationOffset = typeof destination === 'number' ? destination : destination.offsetTop;
	var destinationOffsetToScroll = Math.round(documentHeight - destinationOffset < windowHeight ? documentHeight - windowHeight : destinationOffset);

	if ('requestAnimationFrame' in window === false) {
		window.scroll(0, destinationOffsetToScroll);
		if (callback) {
			callback();
		}
		return;
	}

	function scroll() {
		var now = 'now' in window.performance ? performance.now() : new Date().getTime();
		var time = Math.min(1, ((now - startTime) / duration));
		var timeFunction = easings[easing](time);
		window.scroll(0, Math.ceil((timeFunction * (destinationOffsetToScroll - start)) + start));

		if (window.pageYOffset === destinationOffsetToScroll) {
			if (callback) {
				callback();
			}
		return;
		}

		requestAnimationFrame(scroll);

	}

	scroll();

}



function getSlides(){

	let header = document.getElementsByTagName("header")[0]

	let sections = document.getElementsByTagName("section")

	let footer = document.getElementsByTagName("footer")[0]

	let copy = document.getElementsByClassName("socialmedia")[0]

	elements.push(header)

	for (var section of sections) {
		
		elements.push(section)

	}

	elements.push(footer)

	elements.push(copy)

}

function slideNext(){

	slide++

	if(slide >= elements.length){

		slide = 0		

	}

	let element = elements[slide]

	scrollTo(element, 300)

}

function slidePrev(){

	slide--

	if(slide < 0){

		slide = (elements.length - 1)

	}

	let element = elements[slide]

	scrollTo(element, 300)

}

var slide = -1

var elements = []

getSlides()

slideNext()

document.onkeydown  = function (e) {

    e = e || window.event;

	if(e.key == "ArrowDown" || e.key == "ArrowRight"){

		slideNext()

	}

	if(e.key == "ArrowUp" || e.key == "ArrowLeft"){

		slidePrev()

	}

}


var goTo = function(slide){

	for(let i = 0; i < slide; i++){

		slideNext();

	}

}


goTo(5);