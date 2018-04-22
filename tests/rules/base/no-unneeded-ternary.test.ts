import { CLIEngine } from 'eslint'
import options = require('../../../.eslintrc.json')

const cli = new CLIEngine(options)

test('incorrect', () => {
  expect(cli.executeOnText('1 === 2 ? true : false'))
    .toHasLintingError('no-unneeded-ternary')

  expect(cli.executeOnText('a ? a : b'))
    .toHasLintingError('no-unneeded-ternary')
})

test('correct', () => {
  expect(cli.executeOnText('1 === 2'))
    .not.toHasLintingError('no-unneeded-ternary')

  expect(cli.executeOnText('a || b'))
    .not.toHasLintingError('no-unneeded-ternary')
})
