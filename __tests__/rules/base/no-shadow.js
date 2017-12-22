const { CLIEngine } = require('eslint')
const options = require('../../../.eslintrc.json')

const cli = new CLIEngine(options)

test('incorrect', () => {
  expect(cli.executeOnText('let a\nfunction f () { let a }'))
    .toHasLintingError('no-shadow')
})
