const { CLIEngine } = require('eslint')
const options = require('../../../.eslintrc.json')

const cli = new CLIEngine(options)

test('incorrect', () => {
  expect(cli.executeOnText('if (true) {}'))
    .toHasLintingError('no-constant-condition')
})

test('correct', () => {
  expect(cli.executeOnText('if (a) {}'))
    .not.toHasLintingError('no-constant-condition')
})
