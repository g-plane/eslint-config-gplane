import { CLIEngine } from 'eslint'
import options = require('../../../.eslintrc.json')

const cli = new CLIEngine(options)

test('incorrect', () => {
  expect(cli.executeOnText('a = a'))
    .toHasLintingError('no-self-assign')
})
