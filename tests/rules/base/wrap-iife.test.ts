import { CLIEngine } from 'eslint'
import options = require('../../../.eslintrc.json')

const cli = new CLIEngine(options)

test('incorrect', () => {
  expect(cli.executeOnText('(function () { return }())'))
    .toHasLintingError('wrap-iife')
})

test('correct', () => {
  expect(cli.executeOnText('(function () { return })()'))
    .not.toHasLintingError('wrap-iife')
})
