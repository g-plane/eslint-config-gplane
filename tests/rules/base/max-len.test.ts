import { CLIEngine } from 'eslint'
import options = require('../../../.eslintrc.json')

const cli = new CLIEngine(options)

test('incorrect', () => {
  let variableName = ''
  for (let i = 0; i < 80; i++) {
    variableName += 'a'
  }
  expect(cli.executeOnText(`let ${variableName}`))
    .toHasLintingError('max-len')
})
