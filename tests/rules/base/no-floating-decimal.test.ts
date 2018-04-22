import { CLIEngine } from 'eslint'
import options = require('../../../.eslintrc.json')

const cli = new CLIEngine(options)

test('incorrect', () => {
  expect(cli.executeOnText('.5'))
    .toHasLintingError('no-floating-decimal')
})

test('correct', () => {
  expect(cli.executeOnText('0.5'))
    .not.toHasLintingError('no-floating-decimal')
})
