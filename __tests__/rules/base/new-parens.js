const { CLIEngine } = require('eslint')
const options = require('../../../.eslintrc.json')

const cli = new CLIEngine(options)

test('incorrect', () => {
  expect(cli.executeOnText('new MyClass'))
    .toHasLintingError('new-parens')
})

test('correct', () => {
  expect(cli.executeOnText('new MyClass()'))
    .not.toHasLintingError('new-parens')
})
