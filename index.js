const path = require('path')
const base = require('./.eslintrc.json')

const plugins = [
  'import',
  'eslint-comments',
]

plugins.forEach(plugin => {
  try {
    require.resolve(`eslint-plugin-${plugin}`)
    const pluginInstance = require(path.join(__dirname, plugin))
    base.plugins.push(plugin)
    Object.assign(base.rules, pluginInstance.rules)
  } catch (error) {
    //
  }
})

module.exports = base
