(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else {
		var a = factory();
		for(var i in a) (typeof exports === 'object' ? exports : root)[i] = a[i];
	}
})(this, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	__webpack_require__(1);

/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _md = __webpack_require__(2);

	var _md2 = _interopRequireDefault(_md);

	var _json = __webpack_require__(6);

	var _json2 = _interopRequireDefault(_json);

	var _page = __webpack_require__(7);

	var _store = __webpack_require__(8);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function getName() {
	  return (0, _md2.default)(window.location.href);
	}

	function saveCurrentScroll() {
	  (0, _store.setItem)(getName(), _json2.default.stringify((0, _page.getScroll)()));
	}

	function getSavedScroll() {
	  return _json2.default.parse((0, _store.getItem)(getName()));
	}

	function load() {
	  var sc = getSavedScroll();
	  if (sc) {
	    window.scroll(sc.X, sc.Y);
	  }
	}

	var _timeout = null;

	function scroll() {
	  _timeout && clearTimeout(_timeout);
	  _timeout = setTimeout(function () {
	    saveCurrentScroll();
	  }, 500);
	}

	if (document.all) {
	  window.attachEvent('onload', load);
	  window.attachEvent('onscroll', scroll);
	} else {
	  window.addEventListener('load', load, false);
	  window.addEventListener('scroll', scroll, false);
	}

/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	(function(){
	  var crypt = __webpack_require__(3),
	      utf8 = __webpack_require__(4).utf8,
	      isBuffer = __webpack_require__(5),
	      bin = __webpack_require__(4).bin,

	  // The core
	  md5 = function (message, options) {
	    // Convert to byte array
	    if (message.constructor == String)
	      if (options && options.encoding === 'binary')
	        message = bin.stringToBytes(message);
	      else
	        message = utf8.stringToBytes(message);
	    else if (isBuffer(message))
	      message = Array.prototype.slice.call(message, 0);
	    else if (!Array.isArray(message))
	      message = message.toString();
	    // else, assume byte array already

	    var m = crypt.bytesToWords(message),
	        l = message.length * 8,
	        a =  1732584193,
	        b = -271733879,
	        c = -1732584194,
	        d =  271733878;

	    // Swap endian
	    for (var i = 0; i < m.length; i++) {
	      m[i] = ((m[i] <<  8) | (m[i] >>> 24)) & 0x00FF00FF |
	             ((m[i] << 24) | (m[i] >>>  8)) & 0xFF00FF00;
	    }

	    // Padding
	    m[l >>> 5] |= 0x80 << (l % 32);
	    m[(((l + 64) >>> 9) << 4) + 14] = l;

	    // Method shortcuts
	    var FF = md5._ff,
	        GG = md5._gg,
	        HH = md5._hh,
	        II = md5._ii;

	    for (var i = 0; i < m.length; i += 16) {

	      var aa = a,
	          bb = b,
	          cc = c,
	          dd = d;

	      a = FF(a, b, c, d, m[i+ 0],  7, -680876936);
	      d = FF(d, a, b, c, m[i+ 1], 12, -389564586);
	      c = FF(c, d, a, b, m[i+ 2], 17,  606105819);
	      b = FF(b, c, d, a, m[i+ 3], 22, -1044525330);
	      a = FF(a, b, c, d, m[i+ 4],  7, -176418897);
	      d = FF(d, a, b, c, m[i+ 5], 12,  1200080426);
	      c = FF(c, d, a, b, m[i+ 6], 17, -1473231341);
	      b = FF(b, c, d, a, m[i+ 7], 22, -45705983);
	      a = FF(a, b, c, d, m[i+ 8],  7,  1770035416);
	      d = FF(d, a, b, c, m[i+ 9], 12, -1958414417);
	      c = FF(c, d, a, b, m[i+10], 17, -42063);
	      b = FF(b, c, d, a, m[i+11], 22, -1990404162);
	      a = FF(a, b, c, d, m[i+12],  7,  1804603682);
	      d = FF(d, a, b, c, m[i+13], 12, -40341101);
	      c = FF(c, d, a, b, m[i+14], 17, -1502002290);
	      b = FF(b, c, d, a, m[i+15], 22,  1236535329);

	      a = GG(a, b, c, d, m[i+ 1],  5, -165796510);
	      d = GG(d, a, b, c, m[i+ 6],  9, -1069501632);
	      c = GG(c, d, a, b, m[i+11], 14,  643717713);
	      b = GG(b, c, d, a, m[i+ 0], 20, -373897302);
	      a = GG(a, b, c, d, m[i+ 5],  5, -701558691);
	      d = GG(d, a, b, c, m[i+10],  9,  38016083);
	      c = GG(c, d, a, b, m[i+15], 14, -660478335);
	      b = GG(b, c, d, a, m[i+ 4], 20, -405537848);
	      a = GG(a, b, c, d, m[i+ 9],  5,  568446438);
	      d = GG(d, a, b, c, m[i+14],  9, -1019803690);
	      c = GG(c, d, a, b, m[i+ 3], 14, -187363961);
	      b = GG(b, c, d, a, m[i+ 8], 20,  1163531501);
	      a = GG(a, b, c, d, m[i+13],  5, -1444681467);
	      d = GG(d, a, b, c, m[i+ 2],  9, -51403784);
	      c = GG(c, d, a, b, m[i+ 7], 14,  1735328473);
	      b = GG(b, c, d, a, m[i+12], 20, -1926607734);

	      a = HH(a, b, c, d, m[i+ 5],  4, -378558);
	      d = HH(d, a, b, c, m[i+ 8], 11, -2022574463);
	      c = HH(c, d, a, b, m[i+11], 16,  1839030562);
	      b = HH(b, c, d, a, m[i+14], 23, -35309556);
	      a = HH(a, b, c, d, m[i+ 1],  4, -1530992060);
	      d = HH(d, a, b, c, m[i+ 4], 11,  1272893353);
	      c = HH(c, d, a, b, m[i+ 7], 16, -155497632);
	      b = HH(b, c, d, a, m[i+10], 23, -1094730640);
	      a = HH(a, b, c, d, m[i+13],  4,  681279174);
	      d = HH(d, a, b, c, m[i+ 0], 11, -358537222);
	      c = HH(c, d, a, b, m[i+ 3], 16, -722521979);
	      b = HH(b, c, d, a, m[i+ 6], 23,  76029189);
	      a = HH(a, b, c, d, m[i+ 9],  4, -640364487);
	      d = HH(d, a, b, c, m[i+12], 11, -421815835);
	      c = HH(c, d, a, b, m[i+15], 16,  530742520);
	      b = HH(b, c, d, a, m[i+ 2], 23, -995338651);

	      a = II(a, b, c, d, m[i+ 0],  6, -198630844);
	      d = II(d, a, b, c, m[i+ 7], 10,  1126891415);
	      c = II(c, d, a, b, m[i+14], 15, -1416354905);
	      b = II(b, c, d, a, m[i+ 5], 21, -57434055);
	      a = II(a, b, c, d, m[i+12],  6,  1700485571);
	      d = II(d, a, b, c, m[i+ 3], 10, -1894986606);
	      c = II(c, d, a, b, m[i+10], 15, -1051523);
	      b = II(b, c, d, a, m[i+ 1], 21, -2054922799);
	      a = II(a, b, c, d, m[i+ 8],  6,  1873313359);
	      d = II(d, a, b, c, m[i+15], 10, -30611744);
	      c = II(c, d, a, b, m[i+ 6], 15, -1560198380);
	      b = II(b, c, d, a, m[i+13], 21,  1309151649);
	      a = II(a, b, c, d, m[i+ 4],  6, -145523070);
	      d = II(d, a, b, c, m[i+11], 10, -1120210379);
	      c = II(c, d, a, b, m[i+ 2], 15,  718787259);
	      b = II(b, c, d, a, m[i+ 9], 21, -343485551);

	      a = (a + aa) >>> 0;
	      b = (b + bb) >>> 0;
	      c = (c + cc) >>> 0;
	      d = (d + dd) >>> 0;
	    }

	    return crypt.endian([a, b, c, d]);
	  };

	  // Auxiliary functions
	  md5._ff  = function (a, b, c, d, x, s, t) {
	    var n = a + (b & c | ~b & d) + (x >>> 0) + t;
	    return ((n << s) | (n >>> (32 - s))) + b;
	  };
	  md5._gg  = function (a, b, c, d, x, s, t) {
	    var n = a + (b & d | c & ~d) + (x >>> 0) + t;
	    return ((n << s) | (n >>> (32 - s))) + b;
	  };
	  md5._hh  = function (a, b, c, d, x, s, t) {
	    var n = a + (b ^ c ^ d) + (x >>> 0) + t;
	    return ((n << s) | (n >>> (32 - s))) + b;
	  };
	  md5._ii  = function (a, b, c, d, x, s, t) {
	    var n = a + (c ^ (b | ~d)) + (x >>> 0) + t;
	    return ((n << s) | (n >>> (32 - s))) + b;
	  };

	  // Package private blocksize
	  md5._blocksize = 16;
	  md5._digestsize = 16;

	  module.exports = function (message, options) {
	    if (message === undefined || message === null)
	      throw new Error('Illegal argument ' + message);

	    var digestbytes = crypt.wordsToBytes(md5(message, options));
	    return options && options.asBytes ? digestbytes :
	        options && options.asString ? bin.bytesToString(digestbytes) :
	        crypt.bytesToHex(digestbytes);
	  };

	})();


/***/ },
/* 3 */
/***/ function(module, exports) {

	(function() {
	  var base64map
	      = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/',

	  crypt = {
	    // Bit-wise rotation left
	    rotl: function(n, b) {
	      return (n << b) | (n >>> (32 - b));
	    },

	    // Bit-wise rotation right
	    rotr: function(n, b) {
	      return (n << (32 - b)) | (n >>> b);
	    },

	    // Swap big-endian to little-endian and vice versa
	    endian: function(n) {
	      // If number given, swap endian
	      if (n.constructor == Number) {
	        return crypt.rotl(n, 8) & 0x00FF00FF | crypt.rotl(n, 24) & 0xFF00FF00;
	      }

	      // Else, assume array and swap all items
	      for (var i = 0; i < n.length; i++)
	        n[i] = crypt.endian(n[i]);
	      return n;
	    },

	    // Generate an array of any length of random bytes
	    randomBytes: function(n) {
	      for (var bytes = []; n > 0; n--)
	        bytes.push(Math.floor(Math.random() * 256));
	      return bytes;
	    },

	    // Convert a byte array to big-endian 32-bit words
	    bytesToWords: function(bytes) {
	      for (var words = [], i = 0, b = 0; i < bytes.length; i++, b += 8)
	        words[b >>> 5] |= bytes[i] << (24 - b % 32);
	      return words;
	    },

	    // Convert big-endian 32-bit words to a byte array
	    wordsToBytes: function(words) {
	      for (var bytes = [], b = 0; b < words.length * 32; b += 8)
	        bytes.push((words[b >>> 5] >>> (24 - b % 32)) & 0xFF);
	      return bytes;
	    },

	    // Convert a byte array to a hex string
	    bytesToHex: function(bytes) {
	      for (var hex = [], i = 0; i < bytes.length; i++) {
	        hex.push((bytes[i] >>> 4).toString(16));
	        hex.push((bytes[i] & 0xF).toString(16));
	      }
	      return hex.join('');
	    },

	    // Convert a hex string to a byte array
	    hexToBytes: function(hex) {
	      for (var bytes = [], c = 0; c < hex.length; c += 2)
	        bytes.push(parseInt(hex.substr(c, 2), 16));
	      return bytes;
	    },

	    // Convert a byte array to a base-64 string
	    bytesToBase64: function(bytes) {
	      for (var base64 = [], i = 0; i < bytes.length; i += 3) {
	        var triplet = (bytes[i] << 16) | (bytes[i + 1] << 8) | bytes[i + 2];
	        for (var j = 0; j < 4; j++)
	          if (i * 8 + j * 6 <= bytes.length * 8)
	            base64.push(base64map.charAt((triplet >>> 6 * (3 - j)) & 0x3F));
	          else
	            base64.push('=');
	      }
	      return base64.join('');
	    },

	    // Convert a base-64 string to a byte array
	    base64ToBytes: function(base64) {
	      // Remove non-base-64 characters
	      base64 = base64.replace(/[^A-Z0-9+\/]/ig, '');

	      for (var bytes = [], i = 0, imod4 = 0; i < base64.length;
	          imod4 = ++i % 4) {
	        if (imod4 == 0) continue;
	        bytes.push(((base64map.indexOf(base64.charAt(i - 1))
	            & (Math.pow(2, -2 * imod4 + 8) - 1)) << (imod4 * 2))
	            | (base64map.indexOf(base64.charAt(i)) >>> (6 - imod4 * 2)));
	      }
	      return bytes;
	    }
	  };

	  module.exports = crypt;
	})();


/***/ },
/* 4 */
/***/ function(module, exports) {

	var charenc = {
	  // UTF-8 encoding
	  utf8: {
	    // Convert a string to a byte array
	    stringToBytes: function(str) {
	      return charenc.bin.stringToBytes(unescape(encodeURIComponent(str)));
	    },

	    // Convert a byte array to a string
	    bytesToString: function(bytes) {
	      return decodeURIComponent(escape(charenc.bin.bytesToString(bytes)));
	    }
	  },

	  // Binary encoding
	  bin: {
	    // Convert a string to a byte array
	    stringToBytes: function(str) {
	      for (var bytes = [], i = 0; i < str.length; i++)
	        bytes.push(str.charCodeAt(i) & 0xFF);
	      return bytes;
	    },

	    // Convert a byte array to a string
	    bytesToString: function(bytes) {
	      for (var str = [], i = 0; i < bytes.length; i++)
	        str.push(String.fromCharCode(bytes[i]));
	      return str.join('');
	    }
	  }
	};

	module.exports = charenc;


/***/ },
/* 5 */
/***/ function(module, exports) {

	/*!
	 * Determine if an object is a Buffer
	 *
	 * @author   Feross Aboukhadijeh <feross@feross.org> <http://feross.org>
	 * @license  MIT
	 */

	// The _isBuffer check is for Safari 5-7 support, because it's missing
	// Object.prototype.constructor. Remove this eventually
	module.exports = function (obj) {
	  return obj != null && (isBuffer(obj) || isSlowBuffer(obj) || !!obj._isBuffer)
	}

	function isBuffer (obj) {
	  return !!obj.constructor && typeof obj.constructor.isBuffer === 'function' && obj.constructor.isBuffer(obj)
	}

	// For Node v0.10 support. Remove this eventually.
	function isSlowBuffer (obj) {
	  return typeof obj.readFloatLE === 'function' && typeof obj.slice === 'function' && isBuffer(obj.slice(0, 0))
	}


/***/ },
/* 6 */
/***/ function(module, exports, __webpack_require__) {

	// json5.js
	// Modern JSON. See README.md for details.
	//
	// This file is based directly off of Douglas Crockford's json_parse.js:
	// https://github.com/douglascrockford/JSON-js/blob/master/json_parse.js

	var JSON5 = ( true ? exports : {});

	JSON5.parse = (function () {
	    "use strict";

	// This is a function that can parse a JSON5 text, producing a JavaScript
	// data structure. It is a simple, recursive descent parser. It does not use
	// eval or regular expressions, so it can be used as a model for implementing
	// a JSON5 parser in other languages.

	// We are defining the function inside of another function to avoid creating
	// global variables.

	    var at,           // The index of the current character
	        lineNumber,   // The current line number
	        columnNumber, // The current column number
	        ch,           // The current character
	        escapee = {
	            "'":  "'",
	            '"':  '"',
	            '\\': '\\',
	            '/':  '/',
	            '\n': '',       // Replace escaped newlines in strings w/ empty string
	            b:    '\b',
	            f:    '\f',
	            n:    '\n',
	            r:    '\r',
	            t:    '\t'
	        },
	        ws = [
	            ' ',
	            '\t',
	            '\r',
	            '\n',
	            '\v',
	            '\f',
	            '\xA0',
	            '\uFEFF'
	        ],
	        text,

	        renderChar = function (chr) {
	            return chr === '' ? 'EOF' : "'" + chr + "'";
	        },

	        error = function (m) {

	// Call error when something is wrong.

	            var error = new SyntaxError();
	            // beginning of message suffix to agree with that provided by Gecko - see https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/JSON/parse
	            error.message = m + " at line " + lineNumber + " column " + columnNumber + " of the JSON5 data. Still to read: " + JSON.stringify(text.substring(at - 1, at + 19));
	            error.at = at;
	            // These two property names have been chosen to agree with the ones in Gecko, the only popular
	            // environment which seems to supply this info on JSON.parse
	            error.lineNumber = lineNumber;
	            error.columnNumber = columnNumber;
	            throw error;
	        },

	        next = function (c) {

	// If a c parameter is provided, verify that it matches the current character.

	            if (c && c !== ch) {
	                error("Expected " + renderChar(c) + " instead of " + renderChar(ch));
	            }

	// Get the next character. When there are no more characters,
	// return the empty string.

	            ch = text.charAt(at);
	            at++;
	            columnNumber++;
	            if (ch === '\n' || ch === '\r' && peek() !== '\n') {
	                lineNumber++;
	                columnNumber = 0;
	            }
	            return ch;
	        },

	        peek = function () {

	// Get the next character without consuming it or
	// assigning it to the ch varaible.

	            return text.charAt(at);
	        },

	        identifier = function () {

	// Parse an identifier. Normally, reserved words are disallowed here, but we
	// only use this for unquoted object keys, where reserved words are allowed,
	// so we don't check for those here. References:
	// - http://es5.github.com/#x7.6
	// - https://developer.mozilla.org/en/Core_JavaScript_1.5_Guide/Core_Language_Features#Variables
	// - http://docstore.mik.ua/orelly/webprog/jscript/ch02_07.htm
	// TODO Identifiers can have Unicode "letters" in them; add support for those.

	            var key = ch;

	            // Identifiers must start with a letter, _ or $.
	            if ((ch !== '_' && ch !== '$') &&
	                    (ch < 'a' || ch > 'z') &&
	                    (ch < 'A' || ch > 'Z')) {
	                error("Bad identifier as unquoted key");
	            }

	            // Subsequent characters can contain digits.
	            while (next() && (
	                    ch === '_' || ch === '$' ||
	                    (ch >= 'a' && ch <= 'z') ||
	                    (ch >= 'A' && ch <= 'Z') ||
	                    (ch >= '0' && ch <= '9'))) {
	                key += ch;
	            }

	            return key;
	        },

	        number = function () {

	// Parse a number value.

	            var number,
	                sign = '',
	                string = '',
	                base = 10;

	            if (ch === '-' || ch === '+') {
	                sign = ch;
	                next(ch);
	            }

	            // support for Infinity (could tweak to allow other words):
	            if (ch === 'I') {
	                number = word();
	                if (typeof number !== 'number' || isNaN(number)) {
	                    error('Unexpected word for number');
	                }
	                return (sign === '-') ? -number : number;
	            }

	            // support for NaN
	            if (ch === 'N' ) {
	              number = word();
	              if (!isNaN(number)) {
	                error('expected word to be NaN');
	              }
	              // ignore sign as -NaN also is NaN
	              return number;
	            }

	            if (ch === '0') {
	                string += ch;
	                next();
	                if (ch === 'x' || ch === 'X') {
	                    string += ch;
	                    next();
	                    base = 16;
	                } else if (ch >= '0' && ch <= '9') {
	                    error('Octal literal');
	                }
	            }

	            switch (base) {
	            case 10:
	                while (ch >= '0' && ch <= '9' ) {
	                    string += ch;
	                    next();
	                }
	                if (ch === '.') {
	                    string += '.';
	                    while (next() && ch >= '0' && ch <= '9') {
	                        string += ch;
	                    }
	                }
	                if (ch === 'e' || ch === 'E') {
	                    string += ch;
	                    next();
	                    if (ch === '-' || ch === '+') {
	                        string += ch;
	                        next();
	                    }
	                    while (ch >= '0' && ch <= '9') {
	                        string += ch;
	                        next();
	                    }
	                }
	                break;
	            case 16:
	                while (ch >= '0' && ch <= '9' || ch >= 'A' && ch <= 'F' || ch >= 'a' && ch <= 'f') {
	                    string += ch;
	                    next();
	                }
	                break;
	            }

	            if(sign === '-') {
	                number = -string;
	            } else {
	                number = +string;
	            }

	            if (!isFinite(number)) {
	                error("Bad number");
	            } else {
	                return number;
	            }
	        },

	        string = function () {

	// Parse a string value.

	            var hex,
	                i,
	                string = '',
	                delim,      // double quote or single quote
	                uffff;

	// When parsing for string values, we must look for ' or " and \ characters.

	            if (ch === '"' || ch === "'") {
	                delim = ch;
	                while (next()) {
	                    if (ch === delim) {
	                        next();
	                        return string;
	                    } else if (ch === '\\') {
	                        next();
	                        if (ch === 'u') {
	                            uffff = 0;
	                            for (i = 0; i < 4; i += 1) {
	                                hex = parseInt(next(), 16);
	                                if (!isFinite(hex)) {
	                                    break;
	                                }
	                                uffff = uffff * 16 + hex;
	                            }
	                            string += String.fromCharCode(uffff);
	                        } else if (ch === '\r') {
	                            if (peek() === '\n') {
	                                next();
	                            }
	                        } else if (typeof escapee[ch] === 'string') {
	                            string += escapee[ch];
	                        } else {
	                            break;
	                        }
	                    } else if (ch === '\n') {
	                        // unescaped newlines are invalid; see:
	                        // https://github.com/aseemk/json5/issues/24
	                        // TODO this feels special-cased; are there other
	                        // invalid unescaped chars?
	                        break;
	                    } else {
	                        string += ch;
	                    }
	                }
	            }
	            error("Bad string");
	        },

	        inlineComment = function () {

	// Skip an inline comment, assuming this is one. The current character should
	// be the second / character in the // pair that begins this inline comment.
	// To finish the inline comment, we look for a newline or the end of the text.

	            if (ch !== '/') {
	                error("Not an inline comment");
	            }

	            do {
	                next();
	                if (ch === '\n' || ch === '\r') {
	                    next();
	                    return;
	                }
	            } while (ch);
	        },

	        blockComment = function () {

	// Skip a block comment, assuming this is one. The current character should be
	// the * character in the /* pair that begins this block comment.
	// To finish the block comment, we look for an ending */ pair of characters,
	// but we also watch for the end of text before the comment is terminated.

	            if (ch !== '*') {
	                error("Not a block comment");
	            }

	            do {
	                next();
	                while (ch === '*') {
	                    next('*');
	                    if (ch === '/') {
	                        next('/');
	                        return;
	                    }
	                }
	            } while (ch);

	            error("Unterminated block comment");
	        },

	        comment = function () {

	// Skip a comment, whether inline or block-level, assuming this is one.
	// Comments always begin with a / character.

	            if (ch !== '/') {
	                error("Not a comment");
	            }

	            next('/');

	            if (ch === '/') {
	                inlineComment();
	            } else if (ch === '*') {
	                blockComment();
	            } else {
	                error("Unrecognized comment");
	            }
	        },

	        white = function () {

	// Skip whitespace and comments.
	// Note that we're detecting comments by only a single / character.
	// This works since regular expressions are not valid JSON(5), but this will
	// break if there are other valid values that begin with a / character!

	            while (ch) {
	                if (ch === '/') {
	                    comment();
	                } else if (ws.indexOf(ch) >= 0) {
	                    next();
	                } else {
	                    return;
	                }
	            }
	        },

	        word = function () {

	// true, false, or null.

	            switch (ch) {
	            case 't':
	                next('t');
	                next('r');
	                next('u');
	                next('e');
	                return true;
	            case 'f':
	                next('f');
	                next('a');
	                next('l');
	                next('s');
	                next('e');
	                return false;
	            case 'n':
	                next('n');
	                next('u');
	                next('l');
	                next('l');
	                return null;
	            case 'I':
	                next('I');
	                next('n');
	                next('f');
	                next('i');
	                next('n');
	                next('i');
	                next('t');
	                next('y');
	                return Infinity;
	            case 'N':
	              next( 'N' );
	              next( 'a' );
	              next( 'N' );
	              return NaN;
	            }
	            error("Unexpected " + renderChar(ch));
	        },

	        value,  // Place holder for the value function.

	        array = function () {

	// Parse an array value.

	            var array = [];

	            if (ch === '[') {
	                next('[');
	                white();
	                while (ch) {
	                    if (ch === ']') {
	                        next(']');
	                        return array;   // Potentially empty array
	                    }
	                    // ES5 allows omitting elements in arrays, e.g. [,] and
	                    // [,null]. We don't allow this in JSON5.
	                    if (ch === ',') {
	                        error("Missing array element");
	                    } else {
	                        array.push(value());
	                    }
	                    white();
	                    // If there's no comma after this value, this needs to
	                    // be the end of the array.
	                    if (ch !== ',') {
	                        next(']');
	                        return array;
	                    }
	                    next(',');
	                    white();
	                }
	            }
	            error("Bad array");
	        },

	        object = function () {

	// Parse an object value.

	            var key,
	                object = {};

	            if (ch === '{') {
	                next('{');
	                white();
	                while (ch) {
	                    if (ch === '}') {
	                        next('}');
	                        return object;   // Potentially empty object
	                    }

	                    // Keys can be unquoted. If they are, they need to be
	                    // valid JS identifiers.
	                    if (ch === '"' || ch === "'") {
	                        key = string();
	                    } else {
	                        key = identifier();
	                    }

	                    white();
	                    next(':');
	                    object[key] = value();
	                    white();
	                    // If there's no comma after this pair, this needs to be
	                    // the end of the object.
	                    if (ch !== ',') {
	                        next('}');
	                        return object;
	                    }
	                    next(',');
	                    white();
	                }
	            }
	            error("Bad object");
	        };

	    value = function () {

	// Parse a JSON value. It could be an object, an array, a string, a number,
	// or a word.

	        white();
	        switch (ch) {
	        case '{':
	            return object();
	        case '[':
	            return array();
	        case '"':
	        case "'":
	            return string();
	        case '-':
	        case '+':
	        case '.':
	            return number();
	        default:
	            return ch >= '0' && ch <= '9' ? number() : word();
	        }
	    };

	// Return the json_parse function. It will have access to all of the above
	// functions and variables.

	    return function (source, reviver) {
	        var result;

	        text = String(source);
	        at = 0;
	        lineNumber = 1;
	        columnNumber = 1;
	        ch = ' ';
	        result = value();
	        white();
	        if (ch) {
	            error("Syntax error");
	        }

	// If there is a reviver function, we recursively walk the new structure,
	// passing each name/value pair to the reviver function for possible
	// transformation, starting with a temporary root object that holds the result
	// in an empty key. If there is not a reviver function, we simply return the
	// result.

	        return typeof reviver === 'function' ? (function walk(holder, key) {
	            var k, v, value = holder[key];
	            if (value && typeof value === 'object') {
	                for (k in value) {
	                    if (Object.prototype.hasOwnProperty.call(value, k)) {
	                        v = walk(value, k);
	                        if (v !== undefined) {
	                            value[k] = v;
	                        } else {
	                            delete value[k];
	                        }
	                    }
	                }
	            }
	            return reviver.call(holder, key, value);
	        }({'': result}, '')) : result;
	    };
	}());

	// JSON5 stringify will not quote keys where appropriate
	JSON5.stringify = function (obj, replacer, space) {
	    if (replacer && (typeof(replacer) !== "function" && !isArray(replacer))) {
	        throw new Error('Replacer must be a function or an array');
	    }
	    var getReplacedValueOrUndefined = function(holder, key, isTopLevel) {
	        var value = holder[key];

	        // Replace the value with its toJSON value first, if possible
	        if (value && value.toJSON && typeof value.toJSON === "function") {
	            value = value.toJSON();
	        }

	        // If the user-supplied replacer if a function, call it. If it's an array, check objects' string keys for
	        // presence in the array (removing the key/value pair from the resulting JSON if the key is missing).
	        if (typeof(replacer) === "function") {
	            return replacer.call(holder, key, value);
	        } else if(replacer) {
	            if (isTopLevel || isArray(holder) || replacer.indexOf(key) >= 0) {
	                return value;
	            } else {
	                return undefined;
	            }
	        } else {
	            return value;
	        }
	    };

	    function isWordChar(c) {
	        return (c >= 'a' && c <= 'z') ||
	            (c >= 'A' && c <= 'Z') ||
	            (c >= '0' && c <= '9') ||
	            c === '_' || c === '$';
	    }

	    function isWordStart(c) {
	        return (c >= 'a' && c <= 'z') ||
	            (c >= 'A' && c <= 'Z') ||
	            c === '_' || c === '$';
	    }

	    function isWord(key) {
	        if (typeof key !== 'string') {
	            return false;
	        }
	        if (!isWordStart(key[0])) {
	            return false;
	        }
	        var i = 1, length = key.length;
	        while (i < length) {
	            if (!isWordChar(key[i])) {
	                return false;
	            }
	            i++;
	        }
	        return true;
	    }

	    // export for use in tests
	    JSON5.isWord = isWord;

	    // polyfills
	    function isArray(obj) {
	        if (Array.isArray) {
	            return Array.isArray(obj);
	        } else {
	            return Object.prototype.toString.call(obj) === '[object Array]';
	        }
	    }

	    function isDate(obj) {
	        return Object.prototype.toString.call(obj) === '[object Date]';
	    }

	    var objStack = [];
	    function checkForCircular(obj) {
	        for (var i = 0; i < objStack.length; i++) {
	            if (objStack[i] === obj) {
	                throw new TypeError("Converting circular structure to JSON");
	            }
	        }
	    }

	    function makeIndent(str, num, noNewLine) {
	        if (!str) {
	            return "";
	        }
	        // indentation no more than 10 chars
	        if (str.length > 10) {
	            str = str.substring(0, 10);
	        }

	        var indent = noNewLine ? "" : "\n";
	        for (var i = 0; i < num; i++) {
	            indent += str;
	        }

	        return indent;
	    }

	    var indentStr;
	    if (space) {
	        if (typeof space === "string") {
	            indentStr = space;
	        } else if (typeof space === "number" && space >= 0) {
	            indentStr = makeIndent(" ", space, true);
	        } else {
	            // ignore space parameter
	        }
	    }

	    // Copied from Crokford's implementation of JSON
	    // See https://github.com/douglascrockford/JSON-js/blob/e39db4b7e6249f04a195e7dd0840e610cc9e941e/json2.js#L195
	    // Begin
	    var cx = /[\u0000\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g,
	        escapable = /[\\\"\x00-\x1f\x7f-\x9f\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g,
	        meta = { // table of character substitutions
	        '\b': '\\b',
	        '\t': '\\t',
	        '\n': '\\n',
	        '\f': '\\f',
	        '\r': '\\r',
	        '"' : '\\"',
	        '\\': '\\\\'
	    };
	    function escapeString(string) {

	// If the string contains no control characters, no quote characters, and no
	// backslash characters, then we can safely slap some quotes around it.
	// Otherwise we must also replace the offending characters with safe escape
	// sequences.
	        escapable.lastIndex = 0;
	        return escapable.test(string) ? '"' + string.replace(escapable, function (a) {
	            var c = meta[a];
	            return typeof c === 'string' ?
	                c :
	                '\\u' + ('0000' + a.charCodeAt(0).toString(16)).slice(-4);
	        }) + '"' : '"' + string + '"';
	    }
	    // End

	    function internalStringify(holder, key, isTopLevel) {
	        var buffer, res;

	        // Replace the value, if necessary
	        var obj_part = getReplacedValueOrUndefined(holder, key, isTopLevel);

	        if (obj_part && !isDate(obj_part)) {
	            // unbox objects
	            // don't unbox dates, since will turn it into number
	            obj_part = obj_part.valueOf();
	        }
	        switch(typeof obj_part) {
	            case "boolean":
	                return obj_part.toString();

	            case "number":
	                if (isNaN(obj_part) || !isFinite(obj_part)) {
	                    return "null";
	                }
	                return obj_part.toString();

	            case "string":
	                return escapeString(obj_part.toString());

	            case "object":
	                if (obj_part === null) {
	                    return "null";
	                } else if (isArray(obj_part)) {
	                    checkForCircular(obj_part);
	                    buffer = "[";
	                    objStack.push(obj_part);

	                    for (var i = 0; i < obj_part.length; i++) {
	                        res = internalStringify(obj_part, i, false);
	                        buffer += makeIndent(indentStr, objStack.length);
	                        if (res === null || typeof res === "undefined") {
	                            buffer += "null";
	                        } else {
	                            buffer += res;
	                        }
	                        if (i < obj_part.length-1) {
	                            buffer += ",";
	                        } else if (indentStr) {
	                            buffer += "\n";
	                        }
	                    }
	                    objStack.pop();
	                    buffer += makeIndent(indentStr, objStack.length, true) + "]";
	                } else {
	                    checkForCircular(obj_part);
	                    buffer = "{";
	                    var nonEmpty = false;
	                    objStack.push(obj_part);
	                    for (var prop in obj_part) {
	                        if (obj_part.hasOwnProperty(prop)) {
	                            var value = internalStringify(obj_part, prop, false);
	                            isTopLevel = false;
	                            if (typeof value !== "undefined" && value !== null) {
	                                buffer += makeIndent(indentStr, objStack.length);
	                                nonEmpty = true;
	                                key = isWord(prop) ? prop : escapeString(prop);
	                                buffer += key + ":" + (indentStr ? ' ' : '') + value + ",";
	                            }
	                        }
	                    }
	                    objStack.pop();
	                    if (nonEmpty) {
	                        buffer = buffer.substring(0, buffer.length-1) + makeIndent(indentStr, objStack.length) + "}";
	                    } else {
	                        buffer = '{}';
	                    }
	                }
	                return buffer;
	            default:
	                // functions and undefined should be ignored
	                return undefined;
	        }
	    }

	    // special case...when undefined is used inside of
	    // a compound object/array, return null.
	    // but when top-level, return undefined
	    var topLevelHolder = {"":obj};
	    if (obj === undefined) {
	        return getReplacedValueOrUndefined(topLevelHolder, '', true);
	    }
	    return internalStringify(topLevelHolder, '', true);
	};


/***/ },
/* 7 */
/***/ function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.getScroll = getScroll;
	exports.getScrollTop = getScrollTop;
	exports.getScrollLeft = getScrollLeft;
	function getScroll() {
	  var x, y;
	  if (window.pageYOffset) {
	    // all except IE   
	    y = window.pageYOffset;
	    x = window.pageXOffset;
	  } else if (document.documentElement && document.documentElement.scrollTop) {
	    // IE 6 Strict   
	    y = document.documentElement.scrollTop;
	    x = document.documentElement.scrollLeft;
	  } else if (document.body) {
	    // all other IE   
	    y = document.body.scrollTop;
	    x = document.body.scrollLeft;
	  }
	  return {
	    X: x,
	    Y: y
	  };
	}

	function getScrollTop() {
	  var y;
	  if (window.pageYOffset) {
	    // all except IE   
	    y = window.pageYOffset;
	  } else if (document.documentElement && document.documentElement.scrollTop) {
	    // IE 6 Strict   
	    y = document.documentElement.scrollTop;
	  } else if (document.body) {
	    // all other IE   
	    y = document.body.scrollTop;
	  }
	  return y;
	}

	function getScrollLeft() {
	  var x;
	  if (window.pageYOffset) {
	    // all except IE   
	    x = window.pageXOffset;
	  } else if (document.documentElement && document.documentElement.scrollTop) {
	    // IE 6 Strict   
	    x = document.documentElement.scrollLeft;
	  } else if (document.body) {
	    // all other IE   
	    x = document.body.scrollLeft;
	  }
	  return x;
	}

	exports.default = {
	  getScroll: getScroll,
	  getScrollTop: getScrollTop,
	  getScrollLeft: getScrollLeft
	};

/***/ },
/* 8 */
/***/ function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.setItem = setItem;
	exports.getItem = getItem;
	exports.removeItem = removeItem;
	exports.clear = clear;
	function setItem(name, value) {
	  value = encodeURIComponent(value);
	  if (window.localStorage) {
	    // use localStorage
	    localStorage.setItem(name, value);
	  } else {
	    // use cookies
	    var c_name = name;
	    var exdate = new Date();
	    var days = 365;
	    exdate.setDate(exdate.getDate() + days);
	    document.cookie = c_name + "=" + value + ";expires=" + exdate.toUTCString();
	  }
	}

	function getItem(name) {
	  var item = null;
	  if (window.localStorage) {
	    // use localStorage
	    item = localStorage.getItem(name);
	  } else {
	    // use cookies
	    if (document.cookie.length > 0) {
	      var c_name = name;
	      var c_start = document.cookie.indexOf(c_name + "=");
	      var c_end;

	      if (c_start != -1) {
	        c_start = c_start + c_name.length + 1;
	        c_end = document.cookie.indexOf(";", c_start);
	        if (c_end == -1) c_end = document.cookie.length;
	        item = document.cookie.substring(c_start, c_end);
	      }
	    }
	  }
	  return item ? decodeURIComponent(item) : item;
	}

	function removeItem(name) {
	  if (window.localStorage) {
	    // use localStorage
	    localStorage.removeItem(name);
	  } else {
	    // use cookies
	    document.cookie = name + "=''; expires=" + new Date(0).toUTCString();
	  }
	}

	function clear() {
	  if (window.localStorage) {
	    // use localStorage
	    localStorage.clear();
	  } else {
	    // use cookies
	    var keys = document.cookie.match(/[^ =;]+(?=\=)/g);
	    if (keys) {
	      for (var i = keys.length; i--;) {
	        document.cookie = keys[i] + '=0;expires=' + new Date(0).toUTCString();
	      }
	    }
	  }
	}

	exports.default = {
	  setItem: setItem,
	  getItem: getItem,
	  removeItem: removeItem,
	  clear: clear
	};

/***/ }
/******/ ])
});
;