const { CLIEngine } = require('eslint')
const options = require('../../../.eslintrc.json')

const cli = new CLIEngine(options)

test('incorrect', () => {
  expect(cli.executeOnText('//sth'))
    .toHasLintingError('spaced-comment')

  expect(cli.executeOnText('/*sth*/'))
    .toHasLintingError('spaced-comment')
})

test('correct', () => {
  expect(cli.executeOnText('// sth'))
    .not.toHasLintingError('spaced-comment')

  expect(cli.executeOnText('/* sth */'))
    .not.toHasLintingError('spaced-comment')
})
