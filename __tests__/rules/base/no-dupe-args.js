const { CLIEngine } = require('eslint')
const options = require('../../../.eslintrc.json')

const cli = new CLIEngine(options)

test('correct', () => {
  expect(cli.executeOnText('function t (a, b) {}'))
    .not.toHasLintingError('no-dupe-args')
})
