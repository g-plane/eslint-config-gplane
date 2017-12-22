const { CLIEngine } = require('eslint')
const options = require('../../../.eslintrc.json')

const cli = new CLIEngine(options)

test('incorrect', () => {
  expect(cli.executeOnText("const obj = { 'a': 0 }"))
    .toHasLintingError('quote-props')

  expect(cli.executeOnText('const obj = { class: 0 }'))
    .toHasLintingError('quote-props')

  expect(cli.executeOnText("const obj = { '0': 0 }"))
    .toHasLintingError('quote-props')
})

test('correct', () => {
  expect(cli.executeOnText('const obj = { a: 0 }'))
    .not.toHasLintingError('quote-props')

  expect(cli.executeOnText("const obj = { 'class': 0 }"))
    .not.toHasLintingError('quote-props')

  expect(cli.executeOnText('const obj = { 0: 0 }'))
    .not.toHasLintingError('quote-props')
})
