const { CLIEngine } = require('eslint')
const options = require('../../../.eslintrc.json')

const cli = new CLIEngine(options)

test('incorrect', () => {
  expect(cli.executeOnText('let a\r\na = 5'))
    .toHasLintingError('linebreak-style')
})

test('correct', () => {
  expect(cli.executeOnText('let a\na = 5'))
    .not.toHasLintingError('linebreak-style')
})
