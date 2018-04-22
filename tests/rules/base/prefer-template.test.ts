import { CLIEngine } from 'eslint'
import options = require('../../../.eslintrc.json')

const cli = new CLIEngine(options)

/* tslint:disable no-invalid-template-strings */

test('incorrect', () => {
  expect(cli.executeOnText('"I am" + name'))
    .toHasLintingWarning('prefer-template')
})

test('correct', () => {
  expect(cli.executeOnText('`I am ${name}`'))
    .not.toHasLintingWarning('prefer-template')
})
