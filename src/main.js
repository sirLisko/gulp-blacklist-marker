'use strict'

var fetchBlacklist = require('./fetchBlackList')
var service = require('./services')

var page = window.location.hostname
var serviceName

if (page === 'www.npmjs.com') {
  serviceName = window.location.href.indexOf('search') !== -1
    ? 'npm'
    : 'npmPackage'
} else if (page === 'github.com') {
  serviceName = window.location.href.split('/').pop() === 'package.json'
    ? 'githubPackage'
    : 'github'
}

fetchBlacklist(service[serviceName])
