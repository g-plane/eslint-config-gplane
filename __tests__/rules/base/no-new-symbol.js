const { CLIEngine } = require('eslint')
const options = require('../../../.eslintrc.json')

const cli = new CLIEngine(options)

test('incorrect', () => {
  expect(cli.executeOnText('new Symbol()'))
    .toHasLintingError('no-new-symbol')
})

test('correct', () => {
  expect(cli.executeOnText('Symbol()'))
    .not.toHasLintingError('no-new-symbol')
})
