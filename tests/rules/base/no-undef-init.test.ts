import { CLIEngine } from 'eslint'
import options = require('../../../.eslintrc.json')

const cli = new CLIEngine(options)

test('incorrect', () => {
  expect(cli.executeOnText('let a = undefined'))
    .toHasLintingError('no-undef-init')
})

test('correct', () => {
  expect(cli.executeOnText('let a'))
    .not.toHasLintingError('no-undef-init')
})
