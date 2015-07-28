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

function checkBlackListed(selector){
	return function(blackList){
		Array.prototype.filter.call(document.querySelectorAll(selector), isBlackListed(blackList)).forEach(markBlackListed(blackList));
	};
}

module.exports = {
	npm: checkBlackListed('.package-name, .name'),
	github: checkBlackListed('h1, h1 strong')
};
