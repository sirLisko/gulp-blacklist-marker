'use strict';

var fetchBlacklist = require('./fetchBlackList');
var service = require('./services');

if (window.location.hostname === 'www.npmjs.com') {
	fetchBlacklist(service.npm);
}
