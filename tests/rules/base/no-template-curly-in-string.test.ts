import { CLIEngine } from 'eslint'
import options = require('../../../.eslintrc.json')

const cli = new CLIEngine(options)

/* tslint:disable no-invalid-template-strings */

test('incorrect', () => {
  expect(cli.executeOnText('"${s}"'))
    .toHasLintingWarning('no-template-curly-in-string')
})
