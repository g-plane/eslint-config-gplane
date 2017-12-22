const { CLIEngine } = require('eslint')
const options = require('../../../.eslintrc.json')

const cli = new CLIEngine(options)

test('incorrect', () => {
  expect(cli.executeOnText('const o = { a: 2 }; const a = o.a'))
    .toHasLintingError('prefer-destructuring')
})

test('correct', () => {
  expect(cli.executeOnText('const o = { a: 2 }; const { a } = o'))
    .not.toHasLintingError('prefer-destructuring')
})
