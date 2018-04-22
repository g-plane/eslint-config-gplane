import { CLIEngine } from 'eslint'
import options = require('../../../.eslintrc.json')

const cli = new CLIEngine(options)

test('incorrect', () => {
  expect(cli.executeOnText('() => { return 0 }'))
    .toHasLintingError('arrow-body-style')

  expect(cli.executeOnText('() => { return {} }'))
    .toHasLintingError('arrow-body-style')
})

test('correct', () => {
  expect(cli.executeOnText('() => 0'))
    .not.toHasLintingError('arrow-body-style')

  expect(cli.executeOnText('() => ({})'))
    .not.toHasLintingError('arrow-body-style')
})
