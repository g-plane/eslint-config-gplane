import { CLIEngine } from 'eslint'
import options = require('../../../.eslintrc.json')

const cli = new CLIEngine(options)

test('incorrect', () => {
  expect(cli.executeOnText('const o = { set k (v) {} }'))
    .toHasLintingWarning('accessor-pairs')
})

test('correct', () => {
  expect(cli.executeOnText('const o = { get k () {}\nget k () {} }'))
    .not.toHasLintingWarning('accessor-pairs')

  // By default, it is OK that getter is defined while setter is not.
  expect(cli.executeOnText('const o = { get k () {} }'))
    .not.toHasLintingWarning('accessor-pairs')
})
