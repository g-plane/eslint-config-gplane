import { CLIEngine } from 'eslint'
import options = require('../../../.eslintrc.json')

const cli = new CLIEngine(options)

test('incorrect', () => {
  expect(cli.executeOnText(`
    const a = [1, 2,]
  `)).toHasLintingError('comma-dangle')

  expect(cli.executeOnText(`
    const a = { a, b, }
  `)).toHasLintingError('comma-dangle')
})

test('correct', () => {
  expect(cli.executeOnText(`
    const a = [1, 2]
  `)).not.toHasLintingError('comma-dangle')

  expect(cli.executeOnText(`
    const a = [
      1,
      2,
    ]
  `)).not.toHasLintingError('comma-dangle')

  expect(cli.executeOnText(`
    const a = { a, b }
  `)).not.toHasLintingError('comma-dangle')

  expect(cli.executeOnText(`
    const a = {
      a,
      b,
    }
  `)).not.toHasLintingError('comma-dangle')
})
