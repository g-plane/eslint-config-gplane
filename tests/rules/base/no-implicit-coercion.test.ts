import { CLIEngine } from 'eslint'
import options = require('../../../.eslintrc.json')

const cli = new CLIEngine(options)

test('incorrect', () => {
  expect(cli.executeOnText('0 + ""'))
    .toHasLintingError('no-implicit-coercion')

  expect(cli.executeOnText('const a = []; 1 * a'))
    .toHasLintingError('no-implicit-coercion')
})

test('correct', () => {
  expect(cli.executeOnText('~[]'))
    .not.toHasLintingError('no-implicit-coercion')

  expect(cli.executeOnText('!![]'))
    .not.toHasLintingError('no-implicit-coercion')
})
