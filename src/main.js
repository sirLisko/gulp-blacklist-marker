'use strict'

var fetchBlacklist = require('./fetchBlackList')
var service = require('./services')

var page = window.location.hostname
var serviceName

if (page === 'www.npmjs.com') {
  serviceName = 'npm'
} else if (page === 'github.com') {
  if (window.location.href.split('/').pop() === 'package.json') {
    serviceName = 'githubPackage'
  } else {
    serviceName = 'github'
  }
}

fetchBlacklist(service[serviceName])
