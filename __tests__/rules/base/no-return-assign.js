const { CLIEngine } = require('eslint')
const options = require('../../../.eslintrc.json')

const cli = new CLIEngine(options)

test('incorrect', () => {
  expect(cli.executeOnText('function f () { return a = b }'))
    .toHasLintingError('no-return-assign')
})

test('correct', () => {
  expect(cli.executeOnText('function f () { a = b\nreturn a }'))
    .not.toHasLintingError('no-return-assign')

  expect(cli.executeOnText('function f () { return (a = b) }'))
    .not.toHasLintingError('no-return-assign')
})
