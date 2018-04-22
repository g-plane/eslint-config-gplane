import { CLIEngine } from 'eslint'
import options = require('../../../.eslintrc.json')

const cli = new CLIEngine(options)

test('incorrect', () => {
  expect(cli.executeOnText('if (true) {}'))
    .toHasLintingError('no-constant-condition')
})

test('correct', () => {
  expect(cli.executeOnText('if (a) {}'))
    .not.toHasLintingError('no-constant-condition')
})
