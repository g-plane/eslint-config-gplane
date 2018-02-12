/* eslint-disable no-var, prefer-rest-params */
var base = require('./.eslintrc.json')

function assign (t) {
  for (var s, i = 1, n = arguments.length; i < n; i++) {
    s = arguments[i]
    for (var p in s) {
      if (Object.prototype.hasOwnProperty.call(s, p)) {
        t[p] = s[p]
      }
    }
  }
  return t
}

try {
  require('eslint-plugin-import')
  var _import = require('./import')
  base.plugins.push('import')
  assign(base.rules, _import.rules)
} catch (error) {
  //
}

try {
  require('eslint-plugin-eslint-comments')
  var _eslintComments = require('./eslint-comments')
  base.plugins.push('eslint-comments')
  assign(base.rules, _eslintComments.rules)
} catch (error) {
  //
}

module.exports = base
