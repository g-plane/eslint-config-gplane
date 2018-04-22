import { CLIEngine } from 'eslint'
import options = require('../../../.eslintrc.json')

const cli = new CLIEngine(options)

test('incorrect', () => {
  expect(cli.executeOnText(`
    import { a } from 'mod'
    import { b } from 'mod'
  `)).toHasLintingError('no-duplicate-imports')
})

test('correct', () => {
  expect(cli.executeOnText(`
    import { a, b } from 'mod'
  `)).not.toHasLintingError('no-duplicate-imports')
})
