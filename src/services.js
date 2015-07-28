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
