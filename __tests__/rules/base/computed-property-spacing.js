const { CLIEngine } = require('eslint')
const options = require('../../../.eslintrc.json')

const cli = new CLIEngine(options)

test('incorrect', () => {
  expect(cli.executeOnText('obj[ key ]'))
    .toHasLintingError('computed-property-spacing')
})

test('correct', () => {
  expect(cli.executeOnText('obj[key]'))
    .not.toHasLintingError('computed-property-spacing')
})
