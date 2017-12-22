const { CLIEngine } = require('eslint')
const options = require('../../../.eslintrc.json')

const cli = new CLIEngine(options)

test('incorrect', () => {
  expect(cli.executeOnText('a = 5'))
    .toHasLintingError('no-undef')
})

test('correct', () => {
  expect(cli.executeOnText('const a = 5\na'))
    .not.toHasLintingError('no-undef')

  expect(cli.executeOnText('typeof a'))
    .not.toHasLintingError('no-undef')
})
