export function getScroll() {
	var x, y;
	if(window.pageYOffset) { // all except IE   
		y = window.pageYOffset;
		x = window.pageXOffset;
	} else if(document.documentElement && document.documentElement.scrollTop) { // IE 6 Strict   
		y = document.documentElement.scrollTop;
		x = document.documentElement.scrollLeft;
	} else if(document.body) { // all other IE   
		y = document.body.scrollTop;
		x = document.body.scrollLeft;
	}
	return {
		X: x,
		Y: y
	};
}

export function getScrollTop() {
	var y;
	if(window.pageYOffset) { // all except IE   
		y = window.pageYOffset;
	} else if(document.documentElement && document.documentElement.scrollTop) { // IE 6 Strict   
		y = document.documentElement.scrollTop;
	} else if(document.body) { // all other IE   
		y = document.body.scrollTop;
	}
	return y;
}

export function getScrollLeft() {
	var x;
	if(window.pageYOffset) { // all except IE   
		x = window.pageXOffset;
	} else if(document.documentElement && document.documentElement.scrollTop) { // IE 6 Strict   
		x = document.documentElement.scrollLeft;
	} else if(document.body) { // all other IE   
		x = document.body.scrollLeft;
	}
	return x;
}

export default {
	getScroll: getScroll,
	getScrollTop: getScrollTop,
	getScrollLeft: getScrollLeft,
};