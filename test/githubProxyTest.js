'use strict';

var assert = require('assert');
var request = require('request');

var blackListUrl = 'https://github-raw-cors-proxy.herokuapp.com/gulpjs/plugins/master/src/blackList.json';

describe('github proxy cors for raw files', function(done){
	it('is working properly', function(){
		request(blackListUrl, function (error, response) {
			assert.equal(response.statusCode, 200, 'external service is working');
			assert.equal(typeof JSON.parse(response.body), 'object', 'service is returning a JSON');
			done();
		});
	});
});
