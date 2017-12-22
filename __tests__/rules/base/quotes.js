const { CLIEngine } = require('eslint')
const options = require('../../../.eslintrc.json')

const cli = new CLIEngine(options)

test('incorrect', () => {
  expect(cli.executeOnText('const a = ""'))
    .toHasLintingError('quotes')

  expect(cli.executeOnText('const a = ``'))
    .toHasLintingError('quotes')
})

test('correct', () => {
  expect(cli.executeOnText("const a = ''"))
    .not.toHasLintingError('quotes')

  expect(cli.executeOnText('const a = "\'\'"'))
    .not.toHasLintingError('quotes')
})
