const { CLIEngine } = require('eslint')
const options = require('../../../.eslintrc.json')

const cli = new CLIEngine(options)

test('incorrect', () => {
  expect(cli.executeOnText('function fn() {}'))
    .toHasLintingError('space-before-function-paren')
})

test('correct', () => {
  expect(cli.executeOnText('function fn () {}'))
    .not.toHasLintingError('space-before-function-paren')
})
