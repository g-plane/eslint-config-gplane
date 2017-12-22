const { CLIEngine } = require('eslint')
const options = require('../../../.eslintrc.json')

const cli = new CLIEngine(options)

test('incorrect', () => {
  expect(cli.executeOnText("import { a as a } from 'mod'"))
    .toHasLintingError('no-useless-rename')
})

test('correct', () => {
  expect(cli.executeOnText("import { a as b } from 'mod'"))
    .not.toHasLintingError('no-useless-rename')
})
