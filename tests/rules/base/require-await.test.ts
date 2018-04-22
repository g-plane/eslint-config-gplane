import { CLIEngine } from 'eslint'
import options = require('../../../.eslintrc.json')

const cli = new CLIEngine(options)

test('incorrect', () => {
  expect(cli.executeOnText('async function f () { return }'))
    .toHasLintingError('require-await')
})

test('correct', () => {
  expect(cli.executeOnText('async function f () { await 0\n }'))
    .not.toHasLintingError('require-await')
})
