import { CLIEngine } from 'eslint'
import options = require('../../../.eslintrc.json')

const cli = new CLIEngine(options)

test('incorrect', () => {
  expect(cli.executeOnText('switch (a) { case 1: break; }'))
    .toHasLintingWarning('default-case')
})

test('correct', () => {
  expect(cli.executeOnText('switch (a) { case 1: break; default: break; }'))
    .not.toHasLintingWarning('default-case')
})
