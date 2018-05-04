import { CLIEngine } from 'eslint'
import options = require('../../../.eslintrc.json')

const cli = new CLIEngine(options)

test('incorrect', () => {
  expect(cli.executeOnText(`
    a = b
      + c
  `)).toHasLintingError('operator-linebreak')
  expect(cli.executeOnText(`
    a = b ?
      c :
      d
  `)).toHasLintingError('operator-linebreak')
})

test('correct', () => {
  expect(cli.executeOnText(`
    a = b +
      c
  `)).not.toHasLintingError('operator-linebreak')
  expect(cli.executeOnText(`
    a = b
      ? c
      : d
  `)).not.toHasLintingError('operator-linebreak')
})
