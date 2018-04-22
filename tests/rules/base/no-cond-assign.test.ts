import { CLIEngine } from 'eslint'
import options = require('../../../.eslintrc.json')

const cli = new CLIEngine(options)

test('incorrect', () => {
  expect(cli.executeOnText('if (a = b) {}'))
    .toHasLintingError('no-cond-assign')
})

test('correct', () => {
  expect(cli.executeOnText('if (a === b) {}'))
    .not.toHasLintingError('no-cond-assign')

  expect(cli.executeOnText('if ((a = b)) {}'))
    .not.toHasLintingError('no-cond-assign')
})
