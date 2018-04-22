import { CLIEngine } from 'eslint'
import options = require('../../../.eslintrc.json')

const cli = new CLIEngine(options)

test('incorrect', () => {
  expect(cli.executeOnText(`
    class C {
      constructor () {}
    }
  `)).toHasLintingError('no-useless-constructor')
})

test('correct', () => {
  expect(cli.executeOnText(`
    class C {}
  `)).not.toHasLintingError('no-useless-constructor')
})
