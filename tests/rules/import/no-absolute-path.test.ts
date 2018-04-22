import { CLIEngine } from 'eslint'
import options = require('../../..')

const cli = new CLIEngine(options)

test('incorrect', () => {
  expect(cli.executeOnText('require("/home/e.js")'))
    .toHasLintingError('import/no-absolute-path')
})
