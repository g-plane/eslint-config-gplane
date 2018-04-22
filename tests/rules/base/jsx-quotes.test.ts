import { CLIEngine } from 'eslint'
import options = require('../../../.eslintrc.json')

const cli = new CLIEngine(options)

test('incorrect', () => {
  expect(cli.executeOnText("<input value='' />"))
    .toHasLintingError('jsx-quotes')
})

test('correct', () => {
  expect(cli.executeOnText('<input value="" />'))
    .not.toHasLintingError('jsx-quotes')
})
