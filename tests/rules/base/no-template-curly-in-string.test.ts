import { CLIEngine } from 'eslint'
import options = require('../../../.eslintrc.json')

const cli = new CLIEngine(options)

test('incorrect', () => {
  // eslint-disable-next-line no-template-curly-in-string
  expect(cli.executeOnText('"${s}"'))
    .toHasLintingWarning('no-template-curly-in-string')
})
