const base = require('./.eslintrc.json')

try {
  require.resolve('eslint-plugin-import')
  const _import = require('./import')
  base.plugins.push('import')
  Object.assign(base.rules, _import.rules)
} catch (error) {
  //
}

try {
  require.resolve('eslint-plugin-eslint-comments')
  const _eslintComments = require('./eslint-comments')
  base.plugins.push('eslint-comments')
  Object.assign(base.rules, _eslintComments.rules)
} catch (error) {
  //
}

module.exports = base
