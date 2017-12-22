const { CLIEngine } = require('eslint')
const options = require('../../../.eslintrc.json')

const cli = new CLIEngine(options)

test('incorrect', () => {
  expect(cli.executeOnText('if (!key in obj) {}'))
    .toHasLintingError('no-unsafe-negation')

  expect(cli.executeOnText('if (!obj instanceof C) {}'))
    .toHasLintingError('no-unsafe-negation')
})

test('correct', () => {
  expect(cli.executeOnText('if (!(key in obj)) {}'))
    .not.toHasLintingError('no-unsafe-negation')

  expect(cli.executeOnText('if (!(obj instanceof C)) {}'))
    .not.toHasLintingError('no-unsafe-negation')
})
