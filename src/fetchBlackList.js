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
