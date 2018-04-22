import { CLIEngine } from 'eslint'
import options = require('../../..')

const cli = new CLIEngine(options)

test('incorrect', () => {
  expect(cli.executeOnText('require(a)'))
    .toHasLintingWarning('import/no-dynamic-require')
})
