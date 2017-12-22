const { CLIEngine } = require('eslint')
const options = require('../../../.eslintrc.json')

const cli = new CLIEngine(options)

test('incorrect', () => {
  expect(cli.executeOnText('if (a){}'))
    .toHasLintingError('space-before-blocks')

  expect(cli.executeOnText('function fn (){}'))
    .toHasLintingError('space-before-blocks')
})

test('correct', () => {
  expect(cli.executeOnText('if (a) {}'))
    .not.toHasLintingError('space-before-blocks')

  expect(cli.executeOnText('function fn () {}'))
    .not.toHasLintingError('space-before-blocks')
})