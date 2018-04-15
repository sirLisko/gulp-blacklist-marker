'use strict'

function markBlackListed (blackList) {
  return function (pack) {
    pack.style.textDecoration = 'line-through'
    pack.title = blackList[pack.innerText.trim().replace(/['"]+/g, '')]
  }
}

function isBlackListed (blackList) {
  return function (pack) {
    return blackList[pack.innerText.trim().replace(/['"]+/g, '')]
  }
}

function checkBlackListed (selector) {
  return function (blackList) {
    Array.prototype.filter.call(document.querySelectorAll(selector), isBlackListed(blackList)).forEach(markBlackListed(blackList))
  }
}

module.exports = {
  npm: checkBlackListed('[class^=package__name], [class^=package-list-item__title]'),
  github: checkBlackListed('h1, h1 strong'),
  githubPackage: checkBlackListed('.blob-wrapper.data .pl-s')
}
