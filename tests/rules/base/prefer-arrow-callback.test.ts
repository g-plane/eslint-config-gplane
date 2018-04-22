import { CLIEngine } from 'eslint'
import options = require('../../../.eslintrc.json')

const cli = new CLIEngine(options)

test('incorrect', () => {
  expect(cli.executeOnText('outer(function () { return 0 })'))
    .toHasLintingError('prefer-arrow-callback')
})

test('correct', () => {
  expect(cli.executeOnText('outer(() => 0)'))
    .not.toHasLintingError('prefer-arrow-callback')
})
