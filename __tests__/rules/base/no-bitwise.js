const { CLIEngine } = require('eslint')
const options = require('../../../.eslintrc.json')

const cli = new CLIEngine(options)

test('incorrect', () => {
  expect(cli.executeOnText('const a = b | 0'))
    .toHasLintingError('no-bitwise')
})

test('correct', () => {
  expect(cli.executeOnText('~[1,2,3].indexOf(1) === -1'))
    .not.toHasLintingError('no-bitwise')
})
