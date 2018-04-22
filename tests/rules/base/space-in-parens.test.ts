import { CLIEngine } from 'eslint'
import options = require('../../../.eslintrc.json')

const cli = new CLIEngine(options)

test('incorrect', () => {
  expect(cli.executeOnText('if ( a ) {}'))
    .toHasLintingError('space-in-parens')

  expect(cli.executeOnText('function fn ( p ) {}'))
    .toHasLintingError('space-in-parens')
})

test('correct', () => {
  expect(cli.executeOnText('if (a) {}'))
    .not.toHasLintingError('space-in-parens')

  expect(cli.executeOnText('function fn (p) {}'))
    .not.toHasLintingError('space-in-parens')
})
