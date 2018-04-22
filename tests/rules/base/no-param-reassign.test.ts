import { CLIEngine } from 'eslint'
import options = require('../../../.eslintrc.json')

const cli = new CLIEngine(options)

test('incorrect', () => {
  expect(cli.executeOnText('function f (a) { a = 5 }'))
    .toHasLintingError('no-param-reassign')
})

test('correct', () => {
  expect(cli.executeOnText('function f (a) { let b = a\nb = 5 }'))
    .not.toHasLintingError('no-param-reassign')
})
