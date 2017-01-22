/* eslint handle-callback-err: 0 */

'use strict'

var test = require('tape')
var request = require('request')

var blackListUrl = 'https://raw.githubusercontent.com/gulpjs/plugins/master/src/blackList.json'

test('github proxy cors for raw files is working properly', function (t) {
  request(blackListUrl, function (error, response) {
    t.equal(response.statusCode, 200, 'external service is working')
    t.equal(typeof JSON.parse(response.body), 'object', 'service is returning a JSON')
    t.end()
  })
})
