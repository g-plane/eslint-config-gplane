import { CLIEngine } from 'eslint'
import options = require('../../../.eslintrc.json')

const cli = new CLIEngine(options)

test('incorrect', () => {
  expect(cli.executeOnText(`
    function fn (a, b, c, d) {}
  `)).toHasLintingError('max-params')
})

test('correct', () => {
  expect(cli.executeOnText(`
    function fn ({ a, b, c, d }) {}
  `)).not.toHasLintingError('max-params')
})
