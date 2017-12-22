const { CLIEngine } = require('eslint')
const options = require('../../../.eslintrc.json')

const cli = new CLIEngine(options)

test('incorrect', () => {
  expect(cli.executeOnText('a ++'))
    .toHasLintingError('space-unary-ops')
})

test('correct', () => {
  expect(cli.executeOnText('a++'))
    .not.toHasLintingError('space-unary-ops')
})
