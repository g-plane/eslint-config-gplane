import { CLIEngine } from 'eslint'
import options = require('../../../.eslintrc.json')

const cli = new CLIEngine(options)

test('incorrect', () => {
  expect(cli.executeOnText('const fn = function func () {}'))
    .toHasLintingError('func-name-matching')
})

test('correct', () => {
  expect(cli.executeOnText('const fn = function fn () {}'))
    .not.toHasLintingError('func-name-matching')

  expect(cli.executeOnText('const fn = function () {}'))
    .not.toHasLintingError('func-name-matching')
})
