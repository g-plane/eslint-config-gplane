import { CLIEngine } from 'eslint'
import options = require('../../../.eslintrc.json')

const cli = new CLIEngine(options)

test('incorrect', () => {
  expect(cli.executeOnText('a == null'))
    .toHasLintingError('no-eq-null')
})

test('correct', () => {
  expect(cli.executeOnText('a === null'))
    .not.toHasLintingError('no-eq-null')
})
