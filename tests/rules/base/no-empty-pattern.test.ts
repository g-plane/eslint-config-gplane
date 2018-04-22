import { CLIEngine } from 'eslint'
import options = require('../../../.eslintrc.json')

const cli = new CLIEngine(options)

test('incorrect', () => {
  expect(cli.executeOnText('const [] = a'))
    .toHasLintingError('no-empty-pattern')

  expect(cli.executeOnText('const {} = a'))
    .toHasLintingError('no-empty-pattern')

  expect(cli.executeOnText('const {o: {}} = a'))
    .toHasLintingError('no-empty-pattern')
})

test('correct', () => {
  expect(cli.executeOnText('const {o = {}} = a'))
    .not.toHasLintingError('no-empty-pattern')
})
