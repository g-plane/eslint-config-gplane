const { CLIEngine } = require('eslint')
const options = require('../../../.eslintrc.json')

const cli = new CLIEngine(options)

test('incorrect', () => {
  expect(cli.executeOnText('function fn () { arguments }'))
    .toHasLintingError('prefer-rest-params')
})

test('correct', () => {
  expect(cli.executeOnText('function fn (...args) { args }'))
    .not.toHasLintingError('prefer-rest-params')
})
