import { CLIEngine } from 'eslint'
import options = require('../../../.eslintrc.json')

const cli = new CLIEngine(options)

test('incorrect', () => {
  expect(cli.executeOnText('let a = 5'))
    .toHasLintingError('prefer-const')
})

test('correct', () => {
  expect(cli.executeOnText('const a = 5'))
    .not.toHasLintingError('prefer-const')
})
