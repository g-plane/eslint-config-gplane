import { CLIEngine } from 'eslint'
import options = require('../../../.eslintrc.json')

const cli = new CLIEngine(options)

test('incorrect', () => {
  expect(cli.executeOnText(`
    switch (a) {
      case 1:
        break;
     case 1:
        break;
    }
  `)).toHasLintingError('no-duplicate-case')
})

test('correct', () => {
  expect(cli.executeOnText(`
    switch (a) {
      case 1:
        break;
      case 2:
        break;
    }
  `)).not.toHasLintingError('no-duplicate-case')
})
