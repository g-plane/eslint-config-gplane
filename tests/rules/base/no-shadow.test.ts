import { CLIEngine } from 'eslint'
import options = require('../../../.eslintrc.json')

const cli = new CLIEngine(options)

test('incorrect', () => {
  expect(cli.executeOnText('let a\nfunction f () { let a }'))
    .toHasLintingError('no-shadow')
})
