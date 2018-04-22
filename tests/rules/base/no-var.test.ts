import { CLIEngine } from 'eslint'
import options = require('../../../.eslintrc.json')

const cli = new CLIEngine(options)

test('incorrect', () => {
  expect(cli.executeOnText('var a = 5; a = 6'))
    .toHasLintingError('no-var')
})

test('correct', () => {
  expect(cli.executeOnText('let a = 5; a = 6; const c = 7'))
    .not.toHasLintingError('no-var')
})
