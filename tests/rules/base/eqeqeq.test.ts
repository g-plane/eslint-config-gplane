import { CLIEngine } from 'eslint'
import options = require('../../../.eslintrc.json')

const cli = new CLIEngine(options)

test('incorrect', () => {
  expect(cli.executeOnText('a == b'))
    .toHasLintingError('eqeqeq')
})

test('correct', () => {
  expect(cli.executeOnText('a === b'))
    .not.toHasLintingError('eqeqeq')
})
