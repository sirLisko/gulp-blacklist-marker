(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

//var blackListUrl = 'https://raw.githubusercontent.com/gulpjs/plugins/master/src/blackList.json';
var blackListUrl = 'https://github-raw-cors-proxy.herokuapp.com/gulpjs/plugins/master/src/blackList.json';

function onLoad(cb){
	return function(e){
		var data = e.target;
		if (data.status >= 200 && data.status < 400){
			cb(JSON.parse(data.responseText));
		}
	};
}

function fetchBlackList(cb){
	var request = new XMLHttpRequest();
	request.open('GET', blackListUrl, true);
	request.onload = onLoad(cb);
	request.send();
}

module.exports = fetchBlackList;

},{}],2:[function(require,module,exports){
'use strict';

var fetchBlacklist = require('./fetchBlackList');
var service = require('./services');

if (window.location.hostname === 'www.npmjs.com') {
	fetchBlacklist(service.npm);
}

},{"./fetchBlackList":1,"./services":3}],3:[function(require,module,exports){
'use strict';

function markBlackListed(blackList){
	return function(pack){
		pack.style.textDecoration = 'line-through';
		pack.title = blackList[pack.innerText.trim()];
	};
}

function isBlackListed(blackList){
	return function(pack){
		return blackList[pack.innerText.trim()];
	};
}

function checkNpm(blackList){
	Array.prototype.filter.call(document.querySelectorAll('.package-name, .name'), isBlackListed(blackList)).forEach(markBlackListed(blackList));
}

module.exports = {
	npm: checkNpm
};

},{}]},{},[2]);
