import { CLIEngine } from 'eslint'
import options = require('../../../.eslintrc.json')

const cli = new CLIEngine(options)

test('incorrect', () => {
  expect(cli.executeOnText('const a = 5'))
    .toHasLintingError('eol-last')
})

test('correct', () => {
  expect(cli.executeOnText('const a = 5\n'))
    .not.toHasLintingError('eol-last')
})