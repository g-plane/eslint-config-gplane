const { CLIEngine } = require('eslint')
const options = require('../../../.eslintrc.json')

const cli = new CLIEngine(options)

test('incorrect', () => {
  expect(cli.executeOnText('throw ""'))
    .toHasLintingError('no-throw-literal')
})

test('correct', () => {
  expect(cli.executeOnText('throw Error("")'))
    .not.toHasLintingError('no-throw-literal')
})
