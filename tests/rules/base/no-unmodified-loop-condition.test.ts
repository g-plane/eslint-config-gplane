import { CLIEngine } from 'eslint'
import options = require('../../../.eslintrc.json')

const cli = new CLIEngine(options)

test('incorrect', () => {
  expect(cli.executeOnText('for (let i = 0; i < 2;) {}'))
    .toHasLintingError('no-unmodified-loop-condition')

  expect(cli.executeOnText('let i = 0\nwhile (i < 2) {}'))
    .toHasLintingError('no-unmodified-loop-condition')
})

test('correct', () => {
  expect(cli.executeOnText('for (let i = 0; i < 2; i++) {}'))
    .not.toHasLintingError('no-unmodified-loop-condition')

  expect(cli.executeOnText('let i = 0\nwhile (i < 2) { i++ }'))
    .not.toHasLintingError('no-unmodified-loop-condition')
})
