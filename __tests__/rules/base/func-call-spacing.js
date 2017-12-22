const { CLIEngine } = require('eslint')
const options = require('../../../.eslintrc.json')

const cli = new CLIEngine(options)

test('incorrect', () => {
  expect(cli.executeOnText('fn ()'))
    .toHasLintingError('func-call-spacing')
})

test('correct', () => {
  expect(cli.executeOnText('fn()'))
    .not.toHasLintingError('func-call-spacing')
})
