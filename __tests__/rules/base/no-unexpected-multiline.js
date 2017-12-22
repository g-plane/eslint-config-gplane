const { CLIEngine } = require('eslint')
const options = require('../../../.eslintrc.json')

const cli = new CLIEngine(options)

test('incorrect', () => {
  expect(cli.executeOnText('a = b\n(1 + 1)'))
    .toHasLintingError('no-unexpected-multiline')
})

test('correct', () => {
  expect(cli.executeOnText('a = b\n;(1 + 1)'))
    .not.toHasLintingError('no-unexpected-multiline')
})
