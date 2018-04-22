import { CLIEngine } from 'eslint'
import options = require('../../../.eslintrc.json')

const cli = new CLIEngine(options)

test('incorrect', () => {
  expect(cli.executeOnText('function f () {}\nf = 5'))
    .toHasLintingError('no-func-assign')
})
