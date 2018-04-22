import { CLIEngine } from 'eslint'
import options = require('../../../.eslintrc.json')

const cli = new CLIEngine(options)

test('incorrect', () => {
  expect(cli.executeOnText('0 === a'))
    .toHasLintingError('yoda')
})

test('correct', () => {
  expect(cli.executeOnText('a === 0'))
    .not.toHasLintingError('yoda')
})
