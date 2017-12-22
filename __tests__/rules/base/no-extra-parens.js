const { CLIEngine } = require('eslint')
const options = require('../../../.eslintrc.json')

const cli = new CLIEngine(options)

test('incorrect', () => {
  expect(cli.executeOnText('(a = b)'))
    .toHasLintingError('no-extra-parens')
})

test('correct', () => {
  expect(cli.executeOnText('a = b'))
    .not.toHasLintingError('no-extra-parens')

  expect(cli.executeOnText('if ((a = b)) {}'))
    .not.toHasLintingError('no-extra-parens')

  expect(cli.executeOnText('function () { return (a = b) }'))
    .not.toHasLintingError('no-extra-parens')

  expect(cli.executeOnText('if (a && (b || c)) {}'))
    .not.toHasLintingError('no-extra-parens')

  expect(cli.executeOnText('function () { return (\n<a></a>\n) }'))
    .not.toHasLintingError('no-extra-parens')

  expect(cli.executeOnText('() => (a ? b : c)'))
    .not.toHasLintingError('no-extra-parens')
})
