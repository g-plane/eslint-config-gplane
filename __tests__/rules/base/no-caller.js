const { CLIEngine } = require('eslint')
const options = require('../../../.eslintrc.json')

const cli = new CLIEngine(options)

test('incorrect', () => {
  expect(cli.executeOnText('function f () { arguments.callee() }'))
    .toHasLintingError('no-caller')
})
