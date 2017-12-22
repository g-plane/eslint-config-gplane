const { CLIEngine } = require('eslint')
const options = require('../../../.eslintrc.json')

const cli = new CLIEngine(options)

test('incorrect', () => {
  expect(cli.executeOnText('eval()'))
    .toHasLintingError('no-eval')
})

test('correct', () => {
  expect(cli.executeOnText('doSth()'))
    .not.toHasLintingError('no-eval')
})
