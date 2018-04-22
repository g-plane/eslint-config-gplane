import { CLIEngine } from 'eslint'
import options = require('../../../.eslintrc.json')

const cli = new CLIEngine(options)

test('incorrect', () => {
  expect(cli.executeOnText('function f () {return true}'))
    .toHasLintingError('block-spacing')
})

test('correct', () => {
  expect(cli.executeOnText('function f () { return true }'))
    .not.toHasLintingError('block-spacing')
})
