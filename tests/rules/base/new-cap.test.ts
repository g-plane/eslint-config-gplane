import { CLIEngine } from 'eslint'
import options = require('../../../.eslintrc.json')

const cli = new CLIEngine(options)

test('incorrect', () => {
  expect(cli.executeOnText('new myClass()'))
    .toHasLintingError('new-cap')
})

test('correct', () => {
  expect(cli.executeOnText('new MyClass()'))
    .not.toHasLintingError('new-cap')
})
