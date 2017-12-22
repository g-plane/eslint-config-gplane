const { CLIEngine } = require('eslint')
const options = require('../../../.eslintrc.json')

const cli = new CLIEngine(options)

test('incorrect', () => {
  expect(cli.executeOnText('[1, , 2]'))
    .toHasLintingError('no-sparse-arrays')
})

test('correct', () => {
  expect(cli.executeOnText('[1, 2, 3]'))
    .not.toHasLintingError('no-sparse-arrays')
})
