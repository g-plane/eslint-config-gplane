import { CLIEngine } from 'eslint'
import options = require('../../../.eslintrc.json')

const cli = new CLIEngine(options)

test('incorrect', () => {
  expect(cli.executeOnText('({ a: a })'))
    .toHasLintingError('object-shorthand')
})

test('correct', () => {
  expect(cli.executeOnText('({ a })'))
    .not.toHasLintingError('object-shorthand')
})
