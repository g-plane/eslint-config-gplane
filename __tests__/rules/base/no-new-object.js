const { CLIEngine } = require('eslint')
const options = require('../../../.eslintrc.json')

const cli = new CLIEngine(options)

test('incorrect', () => {
  expect(cli.executeOnText('const a = new Object()'))
    .toHasLintingError('no-new-object')
})

test('correct', () => {
  expect(cli.executeOnText('const a = {}'))
    .not.toHasLintingError('no-new-object')

  expect(cli.executeOnText('const a = Object.create(null)'))
    .not.toHasLintingError('no-new-object')
})
