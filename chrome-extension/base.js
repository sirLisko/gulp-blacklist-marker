(function(){
	'use strict';

	//var blackListUrl = 'https://raw.githubusercontent.com/gulpjs/plugins/master/src/blackList.json';
	var blackListUrl = 'https://github-raw-cors-proxy.herokuapp.com/gulpjs/plugins/master/src/blackList.json',
		blackList;

	function markBlackListed(pack){
		pack.style.textDecoration = 'line-through';
		pack.title = blackList[pack.innerText.trim()];
	}

	function isBlackListed(pack){
		return blackList[pack.innerText.trim()];
	}

	function handleResponse(){
		Array.prototype.filter.call(document.querySelectorAll('.package-name, .name'), isBlackListed).forEach(markBlackListed);
	}

	function onLoad(e){
		var data = e.target;
		if (data.status >= 200 && data.status < 400){
			blackList = JSON.parse(data.responseText);
			handleResponse();
		}
	}

	function fetchBlackList(){
		var request = new XMLHttpRequest();
		request.open('GET', blackListUrl, true);
		request.onload = onLoad;
		request.send();
	}

	fetchBlackList();

})();
