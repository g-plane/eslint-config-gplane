import { CLIEngine } from 'eslint'
import options = require('../../../.eslintrc.json')

const cli = new CLIEngine(options)

test('incorrect', () => {
  expect(cli.executeOnText('\n\n\nexp'))
    .toHasLintingError('no-multiple-empty-lines')
})
