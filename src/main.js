'use strict';

var fetchBlacklist = require('./fetchBlackList');
var service = require('./services');

var page = window.location.hostname, serviceName;

if (page === 'www.npmjs.com') {
	serviceName = 'npm';
} else if (page === 'github.com') {
	serviceName = 'github';
}

fetchBlacklist(service[serviceName]);
