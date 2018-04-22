import { CLIEngine } from 'eslint'
import options = require('../../../.eslintrc.json')

const cli = new CLIEngine(options)

/* tslint:disable no-invalid-template-strings */

test('incorrect', () => {
  expect(cli.executeOnText('`${ name }`'))
    .toHasLintingError('template-curly-spacing')
})

test('correct', () => {
  expect(cli.executeOnText('`${name}`'))
    .not.toHasLintingError('template-curly-spacing')
})
