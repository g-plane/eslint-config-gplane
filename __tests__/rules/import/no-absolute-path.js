const { CLIEngine } = require('eslint')
const options = require('../../../index')

const cli = new CLIEngine(options)

test('incorrect', () => {
  expect(cli.executeOnText('require("/home/e.js")'))
    .toHasLintingError('import/no-absolute-path')
})
