import { CLIEngine } from 'eslint'
import options = require('../../../.eslintrc.json')

const cli = new CLIEngine(options)

test('incorrect', () => {
  expect(cli.executeOnText(`
    switch (a) {
      case 1:
        doSth()
      case 2:
        break
    }
  `)).toHasLintingError('no-fallthrough')
})

test('correct', () => {
  expect(cli.executeOnText(`
    switch (a) {
      case 1:
        doSth()
        // falls through
      case 2:
        break
    }
  `)).not.toHasLintingError('no-fallthrough')
})
