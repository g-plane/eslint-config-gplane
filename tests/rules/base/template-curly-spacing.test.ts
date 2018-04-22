import { CLIEngine } from 'eslint'
import options = require('../../../.eslintrc.json')

const cli = new CLIEngine(options)

test('incorrect', () => {
  // eslint-disable-next-line no-template-curly-in-string
  expect(cli.executeOnText('`${ name }`'))
    .toHasLintingError('template-curly-spacing')
})

test('correct', () => {
  // eslint-disable-next-line no-template-curly-in-string
  expect(cli.executeOnText('`${name}`'))
    .not.toHasLintingError('template-curly-spacing')
})
