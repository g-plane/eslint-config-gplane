const { CLIEngine } = require('eslint')
const options = require('../../../.eslintrc.json')

const cli = new CLIEngine(options)

test('incorrect', () => {
  expect(cli.executeOnText('if (5 === -0) {}'))
    .toHasLintingError('no-compare-neg-zero')
})

test('correct', () => {
  expect(cli.executeOnText('if (5 === 0) {}'))
    .not.toHasLintingError('no-compare-neg-zero')
})
