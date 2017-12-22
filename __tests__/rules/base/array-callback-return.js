const { CLIEngine } = require('eslint')
const options = require('../../../.eslintrc.json')

const cli = new CLIEngine(options)

test('incorrect', () => {
  expect(cli.executeOnText('[].map(item => {})'))
    .toHasLintingError('array-callback-return')
})

test('correct', () => {
  expect(cli.executeOnText('[].map(item => item)'))
    .not.toHasLintingError('array-callback-return')

  expect(cli.executeOnText('[].forEach(item => {})'))
    .not.toHasLintingError('array-callback-return')
})
