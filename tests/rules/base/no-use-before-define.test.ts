import { CLIEngine } from 'eslint'
import options = require('../../../.eslintrc.json')

const cli = new CLIEngine(options)

test('incorrect', () => {
  expect(cli.executeOnText('f()\nfunction f () {}'))
    .toHasLintingError('no-use-before-define')
})

test('correct', () => {
  expect(cli.executeOnText('function f () {}\nf()'))
    .not.toHasLintingError('no-use-before-define')
})
