const { CLIEngine } = require('eslint')
const options = require('../../../.eslintrc.json')

const cli = new CLIEngine(options)

test('incorrect', () => {
  expect(cli.executeOnText('a = a + b'))
    .toHasLintingWarning('operator-assignment')
})

test('correct', () => {
  expect(cli.executeOnText('a += b'))
    .not.toHasLintingWarning('operator-assignment')
})
