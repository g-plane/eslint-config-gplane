import { CLIEngine } from 'eslint'
import options = require('../../../.eslintrc.json')

const cli = new CLIEngine(options)

test('incorrect', () => {
  expect(cli.executeOnText(`
    const a = [1,2]
  `)).toHasLintingError('comma-spacing')

  expect(cli.executeOnText(`
    const a = [1 , 2]
  `)).toHasLintingError('comma-spacing')
})

test('correct', () => {
  expect(cli.executeOnText(`
    const a = [1, 2]
  `)).not.toHasLintingError('comma-spacing')
})
