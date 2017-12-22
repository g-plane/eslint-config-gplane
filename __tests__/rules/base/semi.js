const { CLIEngine } = require('eslint')
const options = require('../../../.eslintrc.json')

const cli = new CLIEngine(options)

test('incorrect', () => {
  expect(cli.executeOnText('const a = 5;'))
    .toHasLintingError('semi')
})

test('correct', () => {
  expect(cli.executeOnText('const a = 5'))
    .not.toHasLintingError('semi')
})
