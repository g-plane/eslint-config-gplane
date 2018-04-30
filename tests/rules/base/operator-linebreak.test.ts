import { CLIEngine } from 'eslint'
import options = require('../../../.eslintrc.json')

const cli = new CLIEngine(options)

test('incorrect', () => {
  expect(cli.executeOnText(`
    a = b
      + c
  `)).toHasLintingError('operator-linebreak')
})

test('correct', () => {
  expect(cli.executeOnText(`
    a = b +
      c
  `)).not.toHasLintingError('operator-linebreak')
})
