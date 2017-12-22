const { CLIEngine } = require('eslint')
const options = require('../../../.eslintrc.json')

const cli = new CLIEngine(options)

test('incorrect', () => {
  expect(cli.executeOnText(`
    obj.fn().fn().fn()
  `)).toHasLintingError('newline-per-chained-call')
})

test('correct', () => {
  expect(cli.executeOnText(`
    obj.fn().fn()
  `)).not.toHasLintingError('newline-per-chained-call')

  expect(cli.executeOnText(`
    obj
      .fn()
      .fn()
      .fn()
  `)).not.toHasLintingError('newline-per-chained-call')
})
