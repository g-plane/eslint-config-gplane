import { CLIEngine } from 'eslint'
import options = require('../../../.eslintrc.json')

const cli = new CLIEngine(options)

test('incorrect', () => {
  expect(cli.executeOnText('a + b'))
    .toHasLintingError('no-unused-expressions')

  expect(cli.executeOnText('a === b'))
    .toHasLintingError('no-unused-expressions')

  expect(cli.executeOnText('tag`a`'))
    .toHasLintingError('no-unused-expressions')
})

test('correct', () => {
  expect(cli.executeOnText('a || b()'))
    .not.toHasLintingError('no-unused-expressions')

  expect(cli.executeOnText('a ? (a = b) : c()'))
    .not.toHasLintingError('no-unused-expressions')
})
