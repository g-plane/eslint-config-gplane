import { CLIEngine } from 'eslint'
import options = require('../../../.eslintrc.json')

const cli = new CLIEngine(options)

test('incorrect', () => {
  expect(cli.executeOnText(`
    () =>
      a
  `)).toHasLintingError('implicit-arrow-linebreak')
})

test('correct', () => {
  expect(cli.executeOnText(`
    () => (
      a
    )
  `)).not.toHasLintingError('implicit-arrow-linebreak')
})
