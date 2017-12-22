const { CLIEngine } = require('eslint')
const options = require('../../../.eslintrc.json')

const cli = new CLIEngine(options)

test('incorrect', () => {
  expect(cli.executeOnText("({ ['a']: 1 })"))
    .toHasLintingError('no-useless-computed-key')
})

test('correct', () => {
  expect(cli.executeOnText('({ a: 1 })'))
    .not.toHasLintingError('no-useless-computed-key')
})
