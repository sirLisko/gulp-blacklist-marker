'use strict'

const SELECTORS = {
  npm: '.items-end h3',
  npmPackage: '[class*=package-name], main h2 [title]',
  github: '.Box-body h1, h1 strong',
  githubPackage: '.blob-wrapper.data .pl-s'
}

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
  SELECTORS: SELECTORS,
  npm: checkBlackListed(SELECTORS.npm),
  npmPackage: checkBlackListed(SELECTORS.npmPackage),
  github: checkBlackListed(SELECTORS.github),
  githubPackage: checkBlackListed(SELECTORS.githubPackage)
}
