/* eslint handle-callback-err: 0 */

'use strict'

var test = require('tape')
var request = require('request')
var cheerio = require('cheerio')

var SELECTORS = require('../src/services').SELECTORS

var NPMPackageURL = 'https://www.npmjs.com/package/gulp-clean'
var NPMSearchURL = 'https://www.npmjs.com/search?q=gulp-css'
var GithubPackageURL =
  'https://github.com/sirLisko/sirlisko.com/blob/5c88c52cab8d7dd9768ebfcc2d7cd21790f99865/package.json'
var GithubModuleURL = 'https://github.com/robrich/gulp-rimraf'

test('NPM Package DOM is still correct', function (t) {
  request(NPMPackageURL, function (error, response) {
    const $ = cheerio.load(response.body)
    t.equal(
      $(SELECTORS.npmPackage)
        .first()
        .text(),
      'gulp-clean',
      'module name found'
    )
    t.equal($(SELECTORS.npmPackage).length, 2, 'there are two elements')
    t.end()
  })
})

test('NPM Search DOM is still correct', function (t) {
  request(NPMSearchURL, function (error, response) {
    const $ = cheerio.load(response.body)
    t.equal(
      $(SELECTORS.npm)
        .first()
        .text(),
      'gulp-css',
      'module name found'
    )
    t.end()
  })
})

test('Github Package DOM is still correct', function (t) {
  request(GithubPackageURL, function (error, response) {
    const $ = cheerio.load(response.body)
    t.equal(
      $(SELECTORS.githubPackage).filter(
        (i, module) => $(module).text() === '"gulp-rimraf"'
      ).length,
      1,
      'module name found'
    )
    t.end()
  })
})

test('Github Module DOM is still correct', function (t) {
  request(GithubModuleURL, function (error, response) {
    const $ = cheerio.load(response.body)
    t.equal(
      $(SELECTORS.github)
        .first()
        .text(),
      'gulp-rimraf',
      'module name found'
    )
    t.end()
  })
})
