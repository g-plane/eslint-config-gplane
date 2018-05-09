const path = require('path')
const { isPkgInstalled } = require('./utils')
const base = require('./.eslintrc.json')

const plugins = [
  'import',
]

plugins.forEach(plugin => {
  if (isPkgInstalled(`eslint-plugin-${plugin}`)) {
    const pluginInstance = require(path.join(__dirname, plugin))
    base.plugins.push(plugin)
    Object.assign(base.rules, pluginInstance.rules)
  }
})

if (isPkgInstalled('flow-bin')) {
  const config = require('./flow')
  base.parser = config.parser
  base.plugins = base.plugins.concat(config.plugins)
  Object.assign(base.rules, config.rules)
}

if (isPkgInstalled('react') || isPkgInstalled('preact')) {
  const config = require('./react')
  base.plugins = base.plugins.concat(config.plugins)
  Object.assign(base.env, config.env)
  Object.assign(base.settings, config.settings)
  Object.assign(base.rules, config.rules)
}

if (isPkgInstalled('vue')) {
  const config = require('./vue')
  base.plugins = base.plugins.concat(config.plugins)
  base.parser = config.parser
  Object.assign(base.env, config.env)
  Object.assign(base.rules, config.rules)
}

module.exports = base
