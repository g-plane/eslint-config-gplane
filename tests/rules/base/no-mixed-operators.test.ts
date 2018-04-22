import { CLIEngine } from 'eslint'
import options = require('../../../.eslintrc.json')

const cli = new CLIEngine(options)

test('incorrect', () => {
  expect(cli.executeOnText('a || b && c'))
    .toHasLintingError('no-mixed-operators')
})

test('correct', () => {
  expect(cli.executeOnText('a || (b && c)'))
    .not.toHasLintingError('no-mixed-operators')

  expect(cli.executeOnText('a + b - c'))
    .not.toHasLintingError('no-mixed-operators')
})
