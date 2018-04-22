import { CLIEngine } from 'eslint'
import options = require('../../../.eslintrc.json')

const cli = new CLIEngine(options)

test('incorrect', () => {
  expect(cli.executeOnText('/a   b/'))
    .toHasLintingWarning('no-regex-spaces')
})

test('correct', () => {
  expect(cli.executeOnText('/a {2}b/'))
    .not.toHasLintingWarning('no-regex-spaces')
})
