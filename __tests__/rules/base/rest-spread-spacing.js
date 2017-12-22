const { CLIEngine } = require('eslint')
const options = require('../../../.eslintrc.json')

const cli = new CLIEngine(options)

test('incorrect', () => {
  expect(cli.executeOnText('const nums = [1, 2]; fn(... nums)'))
    .toHasLintingError('rest-spread-spacing')
})

test('correct', () => {
  expect(cli.executeOnText('const nums = [1, 2]; fn(...nums)'))
    .not.toHasLintingError('rest-spread-spacing')
})
