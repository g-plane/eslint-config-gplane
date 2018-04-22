import { CLIEngine } from 'eslint'
import options = require('../../../.eslintrc.json')

const cli = new CLIEngine(options)

test('incorrect', () => {
  expect(cli.executeOnText('"I am" + name'))
    .toHasLintingWarning('prefer-template')
})

test('correct', () => {
  // eslint-disable-next-line no-template-curly-in-string
  expect(cli.executeOnText('`I am ${name}`'))
    .not.toHasLintingWarning('prefer-template')
})
