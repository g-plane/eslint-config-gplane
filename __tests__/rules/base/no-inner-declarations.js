const { CLIEngine } = require('eslint')
const options = require('../../../.eslintrc.json')

const cli = new CLIEngine(options)

test('incorrect', () => {
  expect(cli.executeOnText('if (a) { function f () {} }'))
    .toHasLintingError('no-inner-declarations')
})

test('correct', () => {
  expect(cli.executeOnText('if (a) { const f = function () {} }'))
    .not.toHasLintingError('no-inner-declarations')

  expect(cli.executeOnText('function fn () { function f () {} }'))
    .not.toHasLintingError('no-inner-declarations')
})
