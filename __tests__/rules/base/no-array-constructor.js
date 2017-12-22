const { CLIEngine } = require('eslint')
const options = require('../../../.eslintrc.json')

const cli = new CLIEngine(options)

test('incorrect', () => {
  expect(cli.executeOnText('const a = new Array()'))
    .toHasLintingError('no-array-constructor')

  expect(cli.executeOnText('const a = Array()'))
    .toHasLintingError('no-array-constructor')
})

test('correct', () => {
  expect(cli.executeOnText('const a = []'))
    .not.toHasLintingError('no-array-constructor')
})
