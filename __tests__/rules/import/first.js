const { CLIEngine } = require('eslint')
const options = require('../../../index')

const cli = new CLIEngine(options)

test('incorrect', () => {
  expect(cli.executeOnText("fn(); import './mod'"))
    .toHasLintingError('import/first')
})

test('correct', () => {
  expect(cli.executeOnText("import './mod'; fn()"))
    .not.toHasLintingError('import/first')
})
