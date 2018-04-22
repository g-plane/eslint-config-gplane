import { CLIEngine } from 'eslint'
import options = require('../../../.eslintrc.json')

const cli = new CLIEngine(options)

test('incorrect', () => {
  expect(cli.executeOnText('const a = { a: 1, a: 2 }'))
    .toHasLintingError('no-dupe-keys')
})

test('correct', () => {
  expect(cli.executeOnText('const a = { a: 1, b: 2 }'))
    .not.toHasLintingError('no-dupe-keys')
})
