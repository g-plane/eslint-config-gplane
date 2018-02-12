const { CLIEngine } = require('eslint')
const options = require('../../../index')

const cli = new CLIEngine(options)

test('incorrect', () => {
  expect(cli.executeOnText("import mod from './mod'"))
    .toHasLintingError('import/no-unresolved')
})

test('correct', () => {
  expect(cli.executeOnText("import Component from '@/Component'"))
    .not.toHasLintingError('import/no-unresolved')
})
