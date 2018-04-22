import { CLIEngine } from 'eslint'
import options = require('../../../.eslintrc.json')

const cli = new CLIEngine(options)

test('incorrect', () => {
  expect(cli.executeOnText('obj. key'))
    .toHasLintingError('no-whitespace-before-property')
})

test('correct', () => {
  expect(cli.executeOnText('obj.key'))
    .not.toHasLintingError('no-whitespace-before-property')
})
