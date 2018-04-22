import { CLIEngine } from 'eslint'
import options = require('../../../.eslintrc.json')

const cli = new CLIEngine(options)

test('incorrect', () => {
  expect(cli.executeOnText('setTimeout("a + b", 0)'))
    .toHasLintingError('no-implied-eval')
})

test('correct', () => {
  expect(cli.executeOnText('setTimeout(() => a + b, 0)'))
    .not.toHasLintingError('no-implied-eval')
})
