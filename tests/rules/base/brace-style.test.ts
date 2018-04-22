import { CLIEngine } from 'eslint'
import options = require('../../../.eslintrc.json')

const cli = new CLIEngine(options)

test('incorrect', () => {
  expect(cli.executeOnText(`
    if (a) {
      //
    }
    else {
      //
    }
  `)).toHasLintingError('brace-style')

  expect(cli.executeOnText(`
    if (a) {
      //
    }
    else
    {
      //
    }
  `)).toHasLintingError('brace-style')
})

test('correct', () => {
  expect(cli.executeOnText(`
    if (a) {
      //
    } else {
      //
    }
  `)).not.toHasLintingError('brace-style')
})
