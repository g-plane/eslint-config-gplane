const { CLIEngine } = require('eslint')
const options = require('../../../.eslintrc.json')

const cli = new CLIEngine(options)

test('incorrect', () => {
  expect(cli.executeOnText('const a = {b}'))
    .toHasLintingError('object-curly-spacing')

  expect(cli.executeOnText('const a = {b, c}'))
    .toHasLintingError('object-curly-spacing')

  expect(cli.executeOnText('const a = {a: {a, b}, b: {a, b}}'))
    .toHasLintingError('object-curly-spacing')

  expect(cli.executeOnText('const a = {a: { a, b }, b: { a, b }}'))
    .toHasLintingError('object-curly-spacing')

  expect(cli.executeOnText('const a = {a: [a, b]}'))
    .toHasLintingError('object-curly-spacing')
})

test('correct', () => {
  expect(cli.executeOnText('const a = { b }'))
    .not.toHasLintingError('object-curly-spacing')

  expect(cli.executeOnText('const a = { b, c }'))
    .not.toHasLintingError('object-curly-spacing')

  expect(cli.executeOnText('const a = { a: { a, b }, b: { a, b } }'))
    .not.toHasLintingError('object-curly-spacing')

  expect(cli.executeOnText('const a = { a: [a, b] }'))
    .not.toHasLintingError('object-curly-spacing')
})
