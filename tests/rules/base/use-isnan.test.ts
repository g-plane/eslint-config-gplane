import { CLIEngine } from 'eslint'
import options = require('../../../.eslintrc.json')

const cli = new CLIEngine(options)

test('incorrect', () => {
  expect(cli.executeOnText('a === NaN'))
    .toHasLintingError('use-isnan')
})

test('correct', () => {
  expect(cli.executeOnText('isNaN(a)'))
    .not.toHasLintingError('use-isnan')
})
