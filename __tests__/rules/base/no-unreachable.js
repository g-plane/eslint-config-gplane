const { CLIEngine } = require('eslint')
const options = require('../../../.eslintrc.json')

const cli = new CLIEngine(options)

test('incorrect', () => {
  expect(cli.executeOnText('throw Error()\na = b'))
    .toHasLintingError('no-unreachable')

  expect(cli.executeOnText('() => { return\na = b }'))
    .toHasLintingError('no-unreachable')
})
