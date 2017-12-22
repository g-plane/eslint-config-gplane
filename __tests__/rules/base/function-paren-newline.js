const { CLIEngine } = require('eslint')
const options = require('../../../.eslintrc.json')

const cli = new CLIEngine(options)

test('incorrect', () => {
  expect(cli.executeOnText(`
    function fn (
      a, b) {}
  `)).toHasLintingError('function-paren-newline')
})

test('correct', () => {
  expect(cli.executeOnText(`
    function fn (a, b) {}
  `)).not.toHasLintingError('function-paren-newline')

  expect(cli.executeOnText(`
    function fn (
      a, b
    ) {}
  `)).not.toHasLintingError('function-paren-newline')

  expect(cli.executeOnText(`
    function fn (
      a,
      b
    ) {}
  `)).not.toHasLintingError('function-paren-newline')

  expect(cli.executeOnText(`
    function fn (a,
      b,
    c) {}
  `)).not.toHasLintingError('function-paren-newline')
})
