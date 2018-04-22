import { CLIEngine } from 'eslint'
import options = require('../../../.eslintrc.json')

const cli = new CLIEngine(options)

test('incorrect', () => {
  expect(cli.executeOnText('if (a) a++'))
    .toHasLintingError('curly')
})

test('correct', () => {
  expect(cli.executeOnText('if (a) { a++ }'))
    .not.toHasLintingError('curly')
})
