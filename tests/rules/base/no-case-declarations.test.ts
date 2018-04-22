import { CLIEngine } from 'eslint'
import options = require('../../../.eslintrc.json')

const cli = new CLIEngine(options)

test('incorrect', () => {
  expect(cli.executeOnText('switch (a) { case 1: const a = 5 }'))
    .toHasLintingError('no-case-declarations')
})
