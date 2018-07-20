/* eslint handle-callback-err: 0 */

'use strict'

var test = require('tape')
var request = require('request')
var cheerio = require('cheerio')

var NPMPackageURL = 'https://www.npmjs.com/package/gulp-clean'
var NPMSearchURL = 'https://www.npmjs.com/search?q=gulp-css'
var GithubPackageURL = 'https://github.com/sirLisko/sirlisko.com/blob/5c88c52cab8d7dd9768ebfcc2d7cd21790f99865/package.json'
var GithubModuleURL = 'https://github.com/robrich/gulp-rimraf'

var NPMSelector = '[class^=package__name], [class^=package-list-item__title]'
var GithubPackageSelector = '.blob-wrapper.data .pl-s'
var GithubModuleSelector = 'h1 strong'

test('NPM Package DOM is still correct', function (t) {
  request(NPMPackageURL, function (error, response) {
    const $ = cheerio.load(response.body)
    t.equal($(NPMSelector).text(), 'gulp-clean', 'module name found')
    t.end()
  })
})

test('NPM Search DOM is still correct', function (t) {
  request(NPMSearchURL, function (error, response) {
    const $ = cheerio.load(response.body)
    t.equal($(NPMSelector).first().text(), 'gulp-css', 'module name found')
    t.end()
  })
})

test('Github Package DOM is still correct', function (t) {
  request(GithubPackageURL, function (error, response) {
    const $ = cheerio.load(response.body)
    t.equal($(GithubPackageSelector).filter((i, module) => $(module).text() === '"gulp-rimraf"').length, 1, 'module name found')
    t.end()
  })
})

test('Github Module DOM is still correct', function (t) {
  request(GithubModuleURL, function (error, response) {
    const $ = cheerio.load(response.body)
    t.equal($(GithubModuleSelector).first().text(), 'gulp-rimraf', 'module name found')
    t.end()
  })
})
