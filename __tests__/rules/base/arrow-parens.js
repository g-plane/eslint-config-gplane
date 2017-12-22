const { CLIEngine } = require('eslint')
const options = require('../../../.eslintrc.json')

const cli = new CLIEngine(options)

test('incorrect', () => {
  expect(cli.executeOnText('(a) => 0'))
    .toHasLintingError('arrow-parens')
})

test('correct', () => {
  expect(cli.executeOnText('() => 0'))
    .not.toHasLintingError('arrow-parens')

  expect(cli.executeOnText('a => 0'))
    .not.toHasLintingError('arrow-parens')

  expect(cli.executeOnText('(a, b) => 0'))
    .not.toHasLintingError('arrow-parens')

  expect(cli.executeOnText('({ a, b }) => 0'))
    .not.toHasLintingError('arrow-parens')
})
