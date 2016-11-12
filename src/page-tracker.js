import md5 from 'md5';
import json5 from 'json5';
import {
  getScroll,
} from './page.js';
import {
  setItem,
  getItem,
} from './store.js';

function getName() {
  return md5(window.location.href);
}

function saveCurrentScroll() {
  setItem(getName(), json5.stringify(getScroll()));
}

function getSavedScroll() {
  return json5.parse(getItem(getName()));
}

function load() {
  var sc = getSavedScroll();
  if(sc) {
    window.scroll(sc.X, sc.Y);
  }
}

var _timeout = null;

function scroll() {
  _timeout && clearTimeout(_timeout);
  _timeout = setTimeout(function() {
    saveCurrentScroll();
  }, 500);
}

if(document.all) {
  window.attachEvent('onload', load);
  window.attachEvent('onscroll', scroll);
} else {
  window.addEventListener('load', load, false);
  window.addEventListener('scroll', scroll, false);
}