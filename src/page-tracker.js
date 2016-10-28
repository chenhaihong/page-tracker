var md5 = require('md5');

import {
	getScrollTop,
	//default as page,
} from './page.js';
import {
	setItem,
	getItem,
	//default as store
} from './store.js';

function getName() {
	return md5(window.location.href);
}

function getSavedScroll() {
	return getItem(getName());
}

function load() {
	var y = getSavedScroll();
	if(y) {
		window.scroll(0, y);
	}
}

var _timeout = null;

function scroll() {
	_timeout && clearTimeout(_timeout);
	_timeout = setTimeout(function() {
		setItem(getName(), getScrollTop());
	}, 500);
}

if(document.all) {
	window.attachEvent('onload', load);
	window.attachEvent('onscroll', scroll);
} else {
	window.addEventListener('load', load, false);
	window.addEventListener('scroll', scroll, false);
}