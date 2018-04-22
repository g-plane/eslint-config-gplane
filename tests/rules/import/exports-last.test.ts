import { CLIEngine } from 'eslint'
import options = require('../../..')

const cli = new CLIEngine(options)

test('incorrect', () => {
  expect(cli.executeOnText('export default 5; fn()'))
    .toHasLintingWarning('import/exports-last')
})

test('correct', () => {
  expect(cli.executeOnText('fn(); export default 5'))
    .not.toHasLintingWarning('import/exports-last')
})
