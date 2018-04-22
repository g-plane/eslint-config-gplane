import { CLIEngine } from 'eslint'
import options = require('../../../.eslintrc.json')

const cli = new CLIEngine(options)

test('incorrect', () => {
  expect(cli.executeOnText('const a = 0; a = 1'))
    .toHasLintingError('no-const-assign')
})
